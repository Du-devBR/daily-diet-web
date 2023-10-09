export function Meal() {
  return (
    <div className="flex gap-3 items-center py-4 px-3 w-full border border-BaseGray500 rounded-md">
      <span className=" text-bodyXS text-BaseGray100 font-nunito border-r border-BaseGray400 pr-3">20:00</span>
      <p className="text-bodyM text-BaseGray200 font-nunito">X-tudo</p>
      <div className=" w-3.5 h-3.5 rounded-full bg-BrandRedMid ml-auto"></div>
    </div>
  );
}
