import { ArrowUpRight } from "phosphor-react";
import { Hearder } from "../../components/hearder";
import { Link } from "react-router-dom";

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
      <div>
        <h2>Refeições</h2>
        <button className=" active-outline-button">+ Nova refeição</button>
      </div>
    </div>
  );
}
