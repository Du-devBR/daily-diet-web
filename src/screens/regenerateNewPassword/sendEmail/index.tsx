import { ArrowLeft } from "phosphor-react";
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { fetchSendEmail } from "../../../redux/actions/regenerateNewPassword/sendEmail-action";
import { selectLoading } from "../../../redux/reducer/regenerateNewPassword/sendEmail-reducer";
import Swal from "sweetalert2";
import { Error } from "../../../components/error/inputErrors";
import { Loading } from "../../../components/loading";

export interface IEmail {
  email: string;
}
export function SendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>();
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(selectLoading);
  const navigate = useNavigate();

  const handleSendEmail = async (email: IEmail) => {
    if (Object.keys(errors).length === 0) {
      try {
        await dispatch(fetchSendEmail(email)).then((result) => {
          if (result.payload) {
            Swal.fire({
              icon: "success",
              title: "Email enviado com sucesso!",
              timer: 2000,
              showConfirmButton: false,
            }).then((resul) => {
              if (resul.dismiss === Swal.DismissReason.timer) {
                navigate(`/`);
              }
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Email não cadastrado no sistema!",
              timer: 2000,
              showConfirmButton: false,
            });
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className=" bg-BrandGreenLight min-h-screen flex flex-col">
      <div className=" w-full min-h-screen flex flex-col self-center md:max-w-2xl">
        <header className="flex flex-col w-full gap-6 p-6">
          <Link to={"/login"}>
            <ArrowLeft className=" w-6 h-6" />
          </Link>
          <img className=" self-center" src={logo} alt="" />
        </header>
        {loading ? (
          <div className=" m-auto">
            <Loading />
          </div>
        ) : (
          <form
            action=""
            onSubmit={handleSubmit(handleSendEmail)}
            className=" w-full rounded-3xl bg-BaseGray700 py-16 px-10"
          >
            <h1 className=" text-titleM text-BaseGray100 font-nunito text-center mb-8 ">
              Esqueceu a senha?
            </h1>
            <p className=" text-BaseGray200 text-bodyM font-nunito mb-8">
              Abaixo, você irá informar o seu e-mail cadastrado para que
              possamos lhe enviar o próximo passo para redefinir sua senha. Por
              favor, verifique seu e-mail para redefinir sua senha!
            </p>
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" text-titleXS font-nunito text-BaseGray200"
              >
                Email de acesso
              </label>
              <input
                className={`w-full mb-4 px-2 py-4 rounded-lg ${
                  errors.email ? " bg-BrandRedLight" : "bg-BaseGray500"
                } text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray400`}
                type="text"
                placeholder="exemplo@email.com"
                {...register("email", {
                  required: "Campo obrigatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Endereço de email invalido!",
                  },
                })}
              />
              {<Error errors={errors} />}
            </div>
            <button className=" active-solid-button w-full mt-8">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
}
