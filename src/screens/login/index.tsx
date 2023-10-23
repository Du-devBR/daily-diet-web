import { EyeSlash } from 'phosphor-react';
import logo from '../../assets/logo.png'
import { Link, useNavigate,} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../../redux/reducer/login/login-reducer';
import { AppDispatch } from '../../redux/store';
import { fetchLoginUser } from '../../redux/actions/login/login-action';
import Swal from 'sweetalert2';
import { TailSpin } from 'react-loader-spinner';



export interface Ilogin {
  email: string,
  password: string
}

export function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const loading = useSelector(selectLoading)

  const {register, handleSubmit} = useForm<Ilogin>()

  const handlesubmitLoginUser = async (data: Ilogin) => {

    try {
      await dispatch(fetchLoginUser(data)).then((result) => {
        if(result.payload){
          Swal.fire({
            icon: "success",
            title: "Login feito com sucesso!",
            timer: 2000,
            showConfirmButton: false
          }).then((resul) => {
            if(resul.dismiss === Swal.DismissReason.timer){
              navigate(`/`)
            }
          })
        }else {
          Swal.fire({
            icon: "error",
            title: "Erro ao fazer login",
            timer: 2000,
            showConfirmButton: false
          })
        }


      })

    }catch(error){
      console.error(error)
    }
  }



  return (
    <div className='flex flex-col items-center w-full h-screen bg-BrandGreenLight'>
      <div className='w-full h-full flex flex-col justify-between px-6 py-8'>
        <header className='flex flex-col  items-center gap-4'>
          <img className='w-full max-w-[101px]' src={logo} alt="" />
          <p className=' text-titleS text-BaseGray300 font-nunito'>Você no controle sempre</p>
        </header>
        {loading ?
          <div className=' flex justify-center items-center'>
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>:
          <form onSubmit={handleSubmit(handlesubmitLoginUser)} action="" className='w-full flex flex-col items-center'>
          <h1 className=' text-BaseGray100 text-titleM font-nunito mb-6'>Acesse sua conta</h1>
          <input
            type="text"
            className='w-full mb-4 px-2 py-4 rounded-lg bg-BaseGray700 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300'
            placeholder='E-mail'
            {...register('email')}
          />
          <div className=' flex w-full mb-6 relative items-center'>
            <input
              type="password"
              className='w-full px-2 py-4 rounded-lg bg-BaseGray700 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300'
              placeholder='Senha'
              {...register('password')}
            />
            <EyeSlash className=' text-BaseGray300 text-titleS absolute right-4'  />
          </div>
          <button className=' active-solid-button bg-BrandGreenDark w-full mb-4'>Acessar</button>
        </form>
        }
        <footer className='flex flex-col w-full items-center'>
          <h2 className=' text-titleXS text-BaseGray300 font-nunito mb-2'>Ainda não possui uma conta?</h2>
          <Link
            to={'/register'}
            className=' active-outline-button border-BrandGreenDark text-BrandGreenDark w-full'
              >
                Criar conta
          </Link>
        </footer>
      </div>
    </div>
  );
}
