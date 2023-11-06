import { ArrowLeft } from "phosphor-react";
import logo from "../../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewPassword,
  fetchTokenForResetPassword,
} from "../../../redux/actions/regenerateNewPassword/resetPassword-action";
import { AppDispatch } from "../../../redux/store";
import { selectLoading } from "../../../redux/reducer/regenerateNewPassword/resetPassword-reducer";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Error } from "../../../components/error/inputErrors";
import { PasswordPattern } from "../../../components/error/passwordPattern";
import { Loading } from "../../../components/loading";

export interface Ipassword {
  password: string;
  confirmePassword: string;
}

export function ResetPassword() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Ipassword>();

  const [togglePasswordPattern, setTogglePasswordPattern] = useState(false);

  const loading = useSelector(selectLoading);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get("token");
      if (token) {
        localStorage.removeItem("token");
        dispatch(fetchTokenForResetPassword(token)).then((result) => {
          if (result.payload) {
            localStorage.setItem("reset", token);
          } else {
            localStorage.removeItem("reset");
            Swal.fire({
              icon: "error",
              title: "Token expirado, por favor ir até pagina de login!",
              showConfirmButton: true,
              confirmButtonText: "Login",
            }).then((resul) => {
              if (resul.isConfirmed) {
                navigate("/login");
              }
            });
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, location.search, navigate]);

  const handleSubmitNewPassword = async (data: Ipassword) => {
    if (Object.keys(errors).length === 0) {
      try {
        await dispatch(createNewPassword(data)).then((result) => {
          if (result.payload) {
            localStorage.removeItem("reset");
            Swal.fire({
              icon: "success",
              title: "Senha atualizada com sucesso!",
              showConfirmButton: true,
              confirmButtonText: "Login",
            }).then((resul) => {
              if (resul.isConfirmed) {
                navigate("/login");
              }
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Erro ao atualizar senha, por favor tente novamente!",
              timer: 2000,
              showConfirmButton: false,
            });
          }
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Erro ao atualizar senha, por favor tente novamente!",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    }
  };

  return (
    <div className=" bg-BrandGreenLight min-h-screen flex flex-col">
      <div className="w-full min-h-screen flex flex-col self-center md:max-w-2xl">
        <header className="flex flex-col w-full gap-6 p-6">
          <Link to={"/login"}>
            <ArrowLeft className=" w-6 h-6" />
          </Link>
          <img className=" self-center" src={logo} alt="" />
        </header>
        {loading ? (
          <div className="m-auto">
            <Loading />
          </div>
        ) : (
          <form
            action=""
            onSubmit={handleSubmit(handleSubmitNewPassword)}
            className=" w-full rounded-3xl bg-BaseGray700 py-16 px-10"
          >
            <h1 className=" text-titleM text-BaseGray100 font-nunito text-center mb-8 ">
              Redefinir senha
            </h1>
            <p className=" text-BaseGray200 text-bodyM font-nunito mb-8">
              Abaixo, você irá informar sua nova senha. Lembrece de criar uma
              senha forte com
              <strong>
                (Letras maiúsculas e minúsculas, numeros e caracteres especiais)
              </strong>
              e não a compartilhe com mais ninguem!
            </p>
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" text-titleXS font-nunito text-BaseGray200"
              >
                Nova senha
              </label>
              <input
                className="w-full mb-4 px-2 py-4 rounded-lg bg-BaseGray500 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300"
                type="password"
                placeholder="********"
                {...register("password", {
                  required: "Senha obrigatorio",
                  minLength: {
                    value: 8,
                    message: "A senha deve ser maior que 8 caracteres.",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "A senha deve conter pelo menos 8 caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial",
                  },
                })}
                onFocus={() => setTogglePasswordPattern(true)}
                onBlur={() => setTogglePasswordPattern(false)}
              />
              <PasswordPattern togglePasswordPattern={togglePasswordPattern} />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" text-titleXS font-nunito text-BaseGray200"
              >
                Confirme a nova senha
              </label>
              <input
                className="w-full mb-4 px-2 py-4 rounded-lg bg-BaseGray500 text-bodyM text-BaseGray200 font-nunito outline-none placeholder:text-BaseGray300"
                type="password"
                placeholder="********"
                {...register("confirmePassword", {
                  required: "Confirme sua senha obrigatorio!",
                  minLength: {
                    value: 8,
                    message: "Senha pdeve ser igual a digitada",
                  },
                  validate: (value) =>
                    value === getValues("password") ||
                    "Senha diferente da digitada",
                })}
              />
            </div>
            {<Error errors={errors} />}
            <button className=" active-solid-button w-full mt-8">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
}
