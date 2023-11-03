interface ErrorProps {
  errors: {
    name?: { message?: string };
    lastname?: { message?: string };
    email?: { message?: string };
    password?: { message?: string };
    confirmPassword?: { message?: string };
  };
}

export function Error({ errors }: ErrorProps) {
  return (
    <div className="flex flex-col self-start mb-4">
      <span className=" text-bodyS text-BrandRedDark font-nunito">
        {errors.name && errors.name.message}
      </span>
      <span className=" text-bodyS text-BrandRedDark font-nunito">
        {errors.lastname && errors.lastname.message}
      </span>
      <span className=" text-bodyS text-BrandRedDark font-nunito">
        {errors.email && errors.email.message}
      </span>
      <span className="text-bodyS text-BrandRedDark font-nunito">
        {errors.password && errors.password.message}
      </span>
      <span className="text-bodyS text-BrandRedDark font-nunito">
        {errors.confirmPassword && errors.confirmPassword.message}
      </span>
    </div>
  );
}
