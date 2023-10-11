import { ArrowLeft, PencilSimpleLine, Trash } from "phosphor-react";
import { Link } from "react-router-dom";

export function MealDetail() {
  return (
    <div className=" bg-BaseGray500">
      <header className='flex items-start w-full text-center p-6'>
        <Link to={"/"}><ArrowLeft className=' w-6 h-6'/></Link>
        <h1 className=' text-titleS text-BaseGray100 font-nunito m-auto'>Nova refeição</h1>
      </header>
      <div className="flex flex-col gap-6 w-full calc-manege-height px-6 py-10 bg-BaseGray700 rounded-t-3xl">
        <main className=" flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className=" text-BaseGray100 text-titleM font-nunito">Saduiche</h2>
            <p className=" text-BaseGray200 text-bodyM font-nunito">Sanduíche de pão integral com atum e salada de alface e tomate</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className=" text-BaseGray100 text-titleS font-nunito">Data e hora</h2>
            <span className=" text-BaseGray200 text-bodyM font-nunito">12/08/2022 às 16:00</span>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 rounded-full bg-BaseGray600 mr-auto">
            <div className=' w-2 h-2 rounded-full bg-BrandGreenDark '></div>
            <span className="text-BaseGray100 text-bodyS font-nunito">dentro da dieta</span>
          </div>
        </main>
        <footer className=" flex  flex-col gap-2 mt-auto">
          <Link to={"/edit"}
            className=" active-solid-button w-full"
              >
                <PencilSimpleLine className=" w-4 h-4" />
                Editar refeição
          </Link>
          <button
            className=" active-outline-button w-full"
              >
                <Trash className=" w-4 h-4" />
                Excluir refeição
          </button>
        </footer>
      </div>
    </div>
  );
}
