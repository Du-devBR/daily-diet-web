import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center gap-4 items-center text-center h-screen">
      <h1 className=" text-titleG text-BaseGray100 font-nunito">404</h1>
      <h2 className=" text-xl text-BaseGray200 font-nunito">Servidor em manutenção</h2>
      <p className=" text-bodyM text-BaseGray200 font-nunito">Estamos passando por instabilidade em nossos servidores!</p>
      <Link to={"/"} className=" text-BrandRedDark text-titleXS font-nunito">Voltar para home</Link>
    </div>
  )
}
