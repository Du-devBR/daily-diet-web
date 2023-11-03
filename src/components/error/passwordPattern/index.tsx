interface PasswordPatternProps {
  togglePasswordPattern: boolean;
}

export function PasswordPattern({
  togglePasswordPattern,
}: PasswordPatternProps) {
  return (
    <div
      className={` ${
        togglePasswordPattern ? "flex" : "hidden"
      } flex-col w-full bg-BrandRedLight rounded-lg p-2 mb-4 gap-1`}
    >
      <strong className=" text-titleXS text-BaseGray200 font-nunito">
        Sua senha precisa ter:{" "}
      </strong>
      <span className=" text-bodyS text-BaseGray300 font-nunito">
        Minimo de 8 caracteres
      </span>
      <span className=" text-bodyS text-BaseGray300 font-nunito">
        Minimo de 1 caractere especial '*/_@'
      </span>
      <span className=" text-bodyS text-BaseGray300 font-nunito">
        Minimo de 1 numemo
      </span>
      <span className=" text-bodyS text-BaseGray300 font-nunito">
        Letras maiusculas e minusculas
      </span>
    </div>
  );
}
