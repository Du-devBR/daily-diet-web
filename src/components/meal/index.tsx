import { Link } from "react-router-dom";
import { formattedHour } from "../../util/formatDate";


interface IMelsProps {
  name: string
  hour: string
  isDiet: boolean
}

export function Meal({name, hour, isDiet}:IMelsProps) {
  return (
    <Link to={"/meal"} className="flex gap-3 items-center py-4 px-3 w-full border border-BaseGray500 rounded-md">
      <span className=" text-bodyXS text-BaseGray100 font-nunito border-r border-BaseGray400 pr-3">{formattedHour(hour)}</span>
      <p className="text-bodyM text-BaseGray200 font-nunito">{name}</p>
      <div className= {`w-3.5 h-3.5 rounded-full ml-auto ${isDiet ? " bg-BrandGreenMid" : "bg-BrandRedMid"}`}></div>
    </Link>
  );
}
