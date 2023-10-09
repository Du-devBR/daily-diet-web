import { ArrowUpRight, Plus } from "phosphor-react";
import { Hearder } from "../../components/hearder";
import { Link } from "react-router-dom";
import { Meal } from "../../components/meal";

export function Home() {
  return (
    <div className="px-6">
      <Hearder />
      <nav className='flex justify-between w-full bg-BrandGreenLight p-5 rounded-lg mt-9'>
        <div className='flex flex-col items-center m-auto'>
          <strong className=' font-nunito text-BaseGray100 text-titleG'>90,86%</strong>
          <span className=' font-nunito text-BaseGray200 text-bodyS'>das refeições dentro da dieta</span>
        </div>
        <Link to={"/statistics"} className=' bg-none border-none self-start'>
          <ArrowUpRight className=' text-BrandGreenDark w-6 h-6' />
        </Link>
      </nav>
      <main className=" mt-10 w-full">
        <div className="w-full">
          <h2 className=" text-bodyM text-BaseGray100 font-nunito">Refeições</h2>
          <Link to={"/create"}
            className=" active-solid-button w-full mt-2">
              <Plus className=" w-4 h-4"/> Nova refeição
          </Link>
        </div>
        <section className=" mt-8">
          <h3 className=" text-titleS text-BaseGray100 font-nunito mb-2">12.08.12</h3>
          <Meal />
        </section>
      </main>
    </div>
  );
}
