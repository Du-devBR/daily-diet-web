import { Eye, EyeSlash } from 'phosphor-react';
import logo from '../../assets/logo.png'
import { Link, useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { fetchRegisterUser } from '../../redux/actions/register/register-action';
import { selectLoading } from '../../redux/reducer/register/regiter-reducer';
import { TailSpin } from 'react-loader-spinner';

export interface IRegister {
  name: string,
  lastname: string
  email: string,
  password: string,
  confirmPassword: string
}

export function Register() {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const loading = useSelector(selectLoading)

  const {register, handleSubmit,  getValues, formState:{errors}} = useForm<IRegister>()
  const [togglePassword, setTogglePassword] = useState(false)
  const [toggleAviso, setToggleAviso] = useState(false)

  const handleSubmitRegisterUser = async (data: IRegister) => {

    if(Object.keys(errors).length === 0){
      try {
        await dispatch(fetchRegisterUser(data)).then((result) => {
          if(result.payload){
            Swal.fire({
              icon: "success",
              title: "Usuario registrado com sucesso!",
              timer: 2000,
              showConfirmButton: false
            }).then((resul) => {
              if(resul.dismiss === Swal.DismissReason.timer){
                navigate(`/login`)
              }
            })
          }else {
            Swal.fire({
              icon: "error",
              title: "Email ja cadastrado",
              text: "Caso não lembre a senha, clique em esqueci a senha na pagina de login!",
              timer: 2000,
              showConfirmButton: false
            })
          }
        })
      }catch(error){
        console.error(error)
      }
    }
  }

  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-BrandGreenLight'>
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
          <form onSubmit={handleSubmit(handleSubmitRegisterUser)} action="" className='w-full flex flex-col items-center'>
          <h1 className=' text-BaseGray100 text-titleM font-nunito mb-6'>Acesse sua conta</h1>
          <input
            type="text"
            className='w-full mb-4 px-2 py-4 rounded-lg bg-BaseGray700 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300'
            placeholder='Nome'
            {...register('name', {
              required: "Nome obrigatório",
              minLength: 2
            })}
          />
          <input
            type="text"
            className='w-full mb-4 px-2 py-4 rounded-lg bg-BaseGray700 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300'
            placeholder='Sobrenome'
            {...register('lastname', {
              required: "Nome obrigatório",
              minLength: 2
            })}
          />
          <input
            type="text"
            className='w-full mb-4 px-2 py-4 rounded-lg bg-BaseGray700 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300'
            placeholder='E-mail'
            {...register('email', {
              required: "Email obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Endereço de email inválido"
              }
            })}
          />
          <div className=' flex w-full mb-6 relative items-center'>
            <input
              type={togglePassword ? "text" : 'password'}
              className='w-full px-2 py-4 rounded-lg bg-BaseGray700 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300'
              placeholder="Senha"
              {...register('password', {
                required: "Senha obrigatório",
                minLength:{
                  value: 8,
                  message: "A senha deve ser maior que 8 caracteres."
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "A senha deve conter pelo menos 8 caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial"
                }
              })}
              onFocus={() => setToggleAviso(true)}
              onBlur={() => setToggleAviso(false)}
            />
            {togglePassword ? <Eye
               className=' text-BaseGray300 text-titleS absolute right-4'
               onClick={() => setTogglePassword(!togglePassword)}
              /> : <EyeSlash
              className=' text-BaseGray300 text-titleS absolute right-4'
              onClick={() => setTogglePassword(!togglePassword)}
              />
            }
          </div>
          <div className= {` ${toggleAviso ? "flex" : "hidden"} flex-col w-full bg-BrandRedLight rounded-lg p-2 mb-4 gap-1`}>
            <strong className=' text-titleXS text-BaseGray200 font-nunito'>Sua senha precisa ter: </strong>
            <span className=' text-bodyS text-BaseGray300 font-nunito'>Minimo de 8 caracteres</span>
            <span className=' text-bodyS text-BaseGray300 font-nunito'>Minimo de 1 caractere especial '*/_@'</span>
            <span className=' text-bodyS text-BaseGray300 font-nunito'>Minimo de 1 numemo</span>
            <span className=' text-bodyS text-BaseGray300 font-nunito'>Letras maiusculas e minusculas</span>
          </div>
          <div className=' flex w-full mb-6 relative items-center'>
            <input
              type={togglePassword ? "text" : 'password'}
              className='w-full px-2 py-4 rounded-lg bg-BaseGray700 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300'
              placeholder="Confirme sua senha"
              {...register('confirmPassword', {
                required: "Confirme sua senha obrigatório",
                minLength:{
                  value: 8,
                  message: "Deve ser igual a digitada.",
                },
                validate: value => value === getValues("password") || "Senha diferente da digitada."
              })}
            />
            {togglePassword ? <Eye
               className=' text-BaseGray300 text-titleS absolute right-4'
               onClick={() => setTogglePassword(!togglePassword)}
              /> : <EyeSlash
              className=' text-BaseGray300 text-titleS absolute right-4'
              onClick={() => setTogglePassword(!togglePassword)}
              />
            }
          </div>
          {
            <div className='flex flex-col self-start mb-4'>
              <span className=' text-bodyS text-BrandRedDark font-nunito'>{errors.name && errors.name.message}</span>
              <span className='text-bodyS text-BrandRedDark font-nunito'>{errors.email && errors.email.message}</span>
              <span className=' text-bodyS text-BrandRedDark font-nunito'>{errors.password && errors.password.message}</span>
              <span className='text-bodyS text-BrandRedDark font-nunito'>{errors.confirmPassword && errors.confirmPassword.message}</span>
            </div>
          }
          <button
            className=' active-solid-button bg-BrandGreenDark w-full mb-4 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-BrandRedDark'
            disabled= {Object.keys(errors).length >= 1 ? true : false}
              >
                Registrar
          </button>
        </form>
        }
        <footer className='flex flex-col w-full items-center'>
          <h2 className=' text-titleXS text-BaseGray300 font-nunito mb-2'>Ja possui uma conta?</h2>
          <Link
            to={'/login'}
            className=' active-outline-button border-BrandGreenDark text-BrandGreenDark w-full'
              >
                Ir para login
          </Link>
        </footer>
      </div>
    </div>
  );
}
