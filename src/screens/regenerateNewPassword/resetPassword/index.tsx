import { ArrowLeft } from 'phosphor-react';
import logo from '../../../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTokenForResetPassword } from '../../../redux/actions/regenerateNewPassword/resetPassword-action';
import { AppDispatch } from '../../../redux/store';
import { selectLoading } from '../../../redux/reducer/regenerateNewPassword/resetPassword-reducer';
import Swal from 'sweetalert2';


export function ResetPassword() {
  const dispatch = useDispatch<AppDispatch>()
  const loading = useSelector(selectLoading)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(location.search)
      const token = searchParams.get('token')
      if(token){
        dispatch(fetchTokenForResetPassword(token)).then((result) => {
          if(result.payload){
            console.log('ok')
          }else {
            Swal.fire({
              icon: "error",
              title: "Token expirado, por favor ir até pagina de login!",
              showConfirmButton: true,
              confirmButtonText: "Login"
            }).then((resul) => {
              if(resul.isConfirmed){
                navigate("/login")
              }
            })
          }
        })
      }
    } catch (error) {
      console.log(error);

    }
  }, [dispatch, location.search, navigate])

  if(loading){
    return <div>loading</div>
  }

  if(loading){
    return <div>loading</div>
  }


  return (
    <div className=' bg-BrandGreenLight min-h-screen flex flex-col'>
      <header className='flex flex-col w-full gap-6 px-6 pt-6 mb-5'>
        <Link to={"/login"}>
          <ArrowLeft className=' w-6 h-6' />
        </Link>
        <img className=' self-center' src={logo} alt="" />
      </header>
      <form action="" className=' w-full rounded-3xl bg-BaseGray700 p-10 calc-main-height '>
        <h1 className=' text-titleM text-BaseGray100 font-nunito text-center mb-8 '>Redefinir senha</h1>
        <p className=' text-BaseGray200 text-bodyM font-nunito mb-8'>Abaixo, você irá informar sua nova senha. Lembrece de criar uma senha forte com
          <strong>(Letras maiúsculas e minúsculas, numeros e caracteres especiais)</strong>e não a compartilhe com mais ninguem!
        </p>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="" className=' text-titleXS font-nunito text-BaseGray200'>Nova senha</label>
          <input
            className='w-full mb-4 px-2 py-4 rounded-lg bg-BaseGray500 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300'
            type="password"
            placeholder='exemplo@email.com'
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="" className=' text-titleXS font-nunito text-BaseGray200'>Confirme a nova senha</label>
          <input
            className='w-full mb-4 px-2 py-4 rounded-lg bg-BaseGray500 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300'
            type="password"
            placeholder='exemplo@email.com'
          />
        </div>
        <button className=' active-solid-button w-full mt-8'>Enviar</button>
      </form>
    </div>
  );
}
