import { ArrowLeft } from "phosphor-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formattedDateForSend, sliceToDate } from "../../util/formatDate";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectMeals,
} from "../../redux/reducer/meals/meals-reducer";
import { AppDispatch } from "../../redux/store";
import {
  fetchMealById,
  updateMeal,
} from "../../redux/actions/meals/meals-actions";
import Swal from "sweetalert2";
import { Loading } from "../../components/loading";
interface IMeal {
  id: string;
  name: string;
  description: string;
  data?: string;
  hour?: string;
  isDiet: boolean | null;
  createdAt: Date;
}

export function EditMeal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const meals = useSelector(selectMeals);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [isDiet, setIsDiet] = useState<boolean | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<IMeal>();

  function checkStateIsDiet() {
    if (isDiet === null) {
      setError("isDiet", {
        message: "Selecione sim ou não",
      });
    }
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchMealById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (meals) {
      const createdAtString = meals[0]?.createdAt;
      if (createdAtString) {
        setValue("name", meals[0]?.name);
        setValue("description", meals[0]?.description);
        setIsDiet(meals[0]?.isDiet ? true : false);
        setValue("data", sliceToDate(createdAtString).date);
        setValue("hour", sliceToDate(createdAtString).hour);
      }
    }
  }, [meals, id, setValue]);

  const handleRegisterNewMeal: SubmitHandler<IMeal> = async (dados) => {
    const { data, hour } = dados;

    if (Object.keys(errors).length === 0) {
      if (data && hour && isDiet !== null) {
        const form = {
          ...dados,
          createdAt: formattedDateForSend(data, hour),
          isDiet: isDiet,
        };
        try {
          if (id) {
            await dispatch(updateMeal({ id: id, meal: form })).then(
              (result) => {
                const status = result.payload;
                if (status === 200) {
                  reset();
                  setIsDiet(null);
                  Swal.fire({
                    icon: "success",
                    title: "Atualizado com sucesso!",
                    timer: 2000,
                    showConfirmButton: false,
                  }).then((resul) => {
                    if (resul.dismiss === Swal.DismissReason.timer) {
                      navigate(`/meal/${id}`);
                    }
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Erro ao atualizar",
                    timer: 2000,
                    showConfirmButton: false,
                  }).then((resul) => {
                    if (resul.dismiss === Swal.DismissReason.timer) {
                      navigate(`/meal/${id}`);
                    }
                  });
                }
              }
            );
          }
        } catch (error) {
          error;
        }
      }
      if (isDiet === null) {
        setError("isDiet", {
          message: "Selecione sim ou não",
        });
      }
    }
  };

  if (error) {
    navigate("/");
  }

  return (
    <div className=" bg-BaseGray500 md:max-w-5xl m-auto">
      <header className="flex items-start w-full text-center p-6">
        <Link to={`/meal/${id}`}>
          <ArrowLeft className=" w-6 h-6" />
        </Link>
        <h1 className=" text-titleS text-BaseGray100 font-nunito m-auto">
          Editar refeição
        </h1>
      </header>
      <form
        onSubmit={handleSubmit(handleRegisterNewMeal)}
        className=" flex flex-col gap-6 w-full calc-manege-height px-6 py-10 bg-BaseGray700 rounded-t-3xl"
      >
        {loading ? (
          <div className="m-auto">
            <Loading />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-1 w-full">
              <label
                className=" text-titleXS text-BaseGray200 font-nunito"
                htmlFor=""
              >
                Nome
              </label>
              <input
                className={`w-full p-3.5 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito outline-none ${
                  errors.name ? " bg-BrandRedLight border-BrandRedDark" : ""
                }`}
                type="text"
                placeholder={errors.name ? errors.name.message : "Refeição"}
                {...register("name", {
                  required: "Nome deve ser maior que 2 letras",
                  minLength: 2,
                })}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                className=" text-titleXS text-BaseGray200 font-nunito"
                htmlFor=""
              >
                Descrição
              </label>
              <textarea
                className={`w-full p-3.5 h-28 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito outline-none ${
                  errors.description
                    ? " bg-BrandRedLight border-BrandRedDark"
                    : ""
                }`}
                placeholder={
                  errors.description
                    ? errors.description.message
                    : "Descreva sua refeição"
                }
                {...register("description", {
                  required: "Preencha uma descrição",
                  minLength: 1,
                })}
              />
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-1 w-full">
                <label
                  className=" text-titleXS text-BaseGray200 font-nunito"
                  htmlFor=""
                >
                  Data
                </label>
                <input
                  className={`w-full p-3.5 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito outline-none ${
                    errors.data ? " bg-BrandRedLight border-BrandRedDark" : ""
                  }`}
                  type="date"
                  placeholder={errors.data && errors.data.message}
                  {...register("data", { required: "Data invalida" })}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  className=" text-titleXS text-BaseGray200 font-nunito"
                  htmlFor=""
                >
                  Hora
                </label>
                <input
                  className={`w-full p-3.5 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito outline-none ${
                    errors.hour ? " bg-BrandRedLight border-BrandRedDark" : ""
                  }`}
                  type="time"
                  placeholder={errors.hour && errors.hour.message}
                  {...register("hour", { required: "Hora invalida" })}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                className=" text-BaseGray200 text-titleXS font-nunito"
                htmlFor=""
              >
                Esta dentro da dieta?
              </label>
              <div className="flex gap-6 w-full mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsDiet(true), clearErrors("isDiet");
                  }}
                  className={`mt-auto w-full button-select-green ${
                    isDiet === true ? "active" : ""
                  } ${errors.isDiet ? "animate-pulse bg-BrandGreenLight" : ""}`}
                >
                  <div className=" w-2 h-2 rounded-full bg-BrandGreenDark"></div>
                  Sim
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsDiet(false), clearErrors("isDiet");
                  }}
                  className={`mt-auto w-full button-select-red ${
                    isDiet === false ? "active" : ""
                  } ${errors.isDiet ? "animate-pulse bg-BrandRedLight" : ""}`}
                >
                  <div className=" w-2 h-2 rounded-full bg-BrandRedDark disabled:bg-red-500"></div>
                  Não
                </button>
              </div>
              {errors.isDiet && (
                <p className=" text-bodyS text-BrandRedDark font-nunito mt-4">
                  {errors.isDiet.message}
                </p>
              )}
            </div>
            <button
              onClick={() => checkStateIsDiet()}
              type="submit"
              className="active-solid-button mt-auto w-full"
            >
              Salvar alterações
            </button>
          </>
        )}
      </form>
    </div>
  );
}
