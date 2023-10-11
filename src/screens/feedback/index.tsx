import { Link, useParams } from "react-router-dom";
import illustrationTrue from '../../assets/IllustrationTrue.png'
import illustrationFalse from '../../assets/IllustrationFalse.png'

export function Feedback() {
  const {status} = useParams()
  return (
   <div className=" w-full text-center min-h-screen flex py-8">
     <main className=" w-full px-8 flex flex-col items-center m-auto">
      <div className="flex flex-col gap-2">
        <h2 className={`text-titleM font-nunito ${status === "true" ? "text-BrandGreenDark" : "text-BrandRedDark"}`}>
          {status === "true" ? 'Continue assim!' : 'Que pena!'}
        </h2>
        <p className=" text-bodyM text-BaseGray100 font-nunito text-center">
          {status === "true" ?
            <>Você <strong>continua dentro</strong> da dieta. Muito bem!</> :
            <>Você <strong>saiu da dieta</strong> dessa vez, mas continue se esforçando e não desista!</>
          }
        </p>
      </div>
      <div>
        <img className={`mt-10 mb-8 ${status === "true" ? "animate-bounce" : "animate-pulse"}`} src={status === 'true' ? illustrationTrue : illustrationFalse} alt="" />
      </div>
      <Link to={"/"}
        className=" active-solid-button "
        >
          Ir para a página inicial
      </Link>
    </main>
   </div>
  );
}
