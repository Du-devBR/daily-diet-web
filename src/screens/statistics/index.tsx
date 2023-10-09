import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";

export function Statistics() {
  return (
    <div className="bg-BrandGreenLight ">
      <header className=" p-6">
        <Link to={"/"} className=' bg-none border-none self-start'>
          <ArrowLeft className=' text-BrandGreenDark w-6 h-6' />
        </Link>
        <div className='flex flex-col items-center m-auto'>
          <strong className=' font-nunito text-BaseGray100 text-titleG'>90,86%</strong>
          <span className=' font-nunito text-BaseGray200 text-bodyS'>das refeições dentro da dieta</span>
        </div>
      </header>
      <main className="px-6 w-full text-center rounded-t-3xl bg-BaseGray700 calc-main-height ">
        <h2 className=" font-nunito pt-8 text-titleXS text-BaseGray100">Estatísticas gerais</h2>
        <div className="flex flex-col gap-3 mt-6">
          <div className=" flex flex-col items-center rounded-lg bg-BaseGray600 p-4">
            <strong className=' font-nunito text-BaseGray100 text-titleM'>22</strong>
            <span className=' font-nunito text-BaseGray200 text-bodyS'>melhor sequência de pratos dentro da dieta</span>
          </div>
          <div className=" flex flex-col items-center rounded-lg bg-BaseGray600 p-4">
            <strong className=' font-nunito text-BaseGray100 text-titleM'>109</strong>
            <span className=' font-nunito text-BaseGray200 text-bodyS'>refeições registradas</span>
          </div>
          <div className="flex gap-3">
            <div className=" flex flex-col items-center rounded-lg bg-BrandGreenLight p-4">
              <strong className=' font-nunito text-BaseGray100 text-titleM'>99</strong>
              <span className=' font-nunito text-BaseGray200 text-bodyS'>refeições dentro da dieta</span>
            </div>
            <div className=" flex flex-col items-center rounded-lg bg-BrandRedLight p-4">
              <strong className=' font-nunito text-BaseGray100 text-titleM'>10</strong>
              <span className=' font-nunito text-BaseGray200 text-bodyS'>refeições fora da dieta</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
