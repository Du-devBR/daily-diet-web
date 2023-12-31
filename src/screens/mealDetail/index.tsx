import { ArrowLeft, PencilSimpleLine, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Modal } from "../../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  deleteMeal,
  fetchMealById,
} from "../../redux/actions/meals/meals-actions";
import {
  selectLoading,
  selectMeals,
} from "../../redux/reducer/meals/meals-reducer";
import { formattedDataAndHour } from "../../util/formatDate";
import Swal from "sweetalert2";
import { Loading } from "../../components/loading";

export function MealDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const meals = useSelector(selectMeals);
  const loading = useSelector(selectLoading);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchMealById(id));
    }
  }, [dispatch, id]);

  const handleDeleteMeal = async () => {
    setOpenModal(false);

    try {
      if (id) {
        await dispatch(deleteMeal(id)).then((result) => {
          const status = result.payload;
          if (status === 200) {
            Swal.fire({
              icon: "success",
              title: "Refeição excluida",
              timer: 2000,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                navigate("/home");
              }
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Erro ao excluir",
              timer: 2000,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                navigate(`/meal/${id}`);
              }
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-BaseGray500 w-full min-h-screen flex flex-col justify-center items-center md:max-w-5xl m-auto">
      <header className="flex items-start w-full text-center p-6">
        <Link to={"/home"}>
          <ArrowLeft className=" w-6 h-6" />
        </Link>
        <h1 className=" text-titleS text-BaseGray100 font-nunito m-auto">
          Nova refeição
        </h1>
      </header>
      <div className="flex flex-col gap-6 w-full calc-manege-height px-6 py-10 bg-BaseGray700 rounded-t-3xl">
        {loading ? (
          <div className="m-auto">
            <Loading />
          </div>
        ) : (
          <main className=" flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className=" text-BaseGray100 text-titleM font-nunito">
                {meals[0]?.name}
              </h2>
              <p className=" text-BaseGray200 text-bodyM font-nunito">
                {meals[0]?.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className=" text-BaseGray100 text-titleS font-nunito">
                Data e hora
              </h2>
              <span className=" text-BaseGray200 text-bodyM font-nunito">
                {formattedDataAndHour(meals[0]?.createdAt)}
              </span>
            </div>
            <div className="flex gap-2 items-center py-2 px-4 rounded-full bg-BaseGray600 mr-auto">
              <div
                className={`w-2 h-2 rounded-full ${
                  meals[0]?.isDiet ? "bg-BrandGreenDark" : " bg-BrandRedDark"
                } `}
              ></div>
              <span className="text-BaseGray100 text-bodyS font-nunito">
                {meals[0]?.isDiet ? "dentro da dieta" : "fora da dieta"}
              </span>
            </div>
          </main>
        )}
        <footer className=" flex  flex-col gap-2 mt-auto">
          <Link to={`/edit/${id}`} className=" active-solid-button w-full">
            <PencilSimpleLine className=" w-4 h-4" />
            Editar refeição
          </Link>
          <button
            className=" active-outline-button w-full"
            onClick={() => setOpenModal(true)}
          >
            <Trash className=" w-4 h-4" />
            Excluir refeição
          </button>
        </footer>
      </div>
      <Modal
        onToggleModal={openModal}
        onSetToggleModal={() => setOpenModal(false)}
        onDelete={handleDeleteMeal}
      />
    </div>
  );
}
