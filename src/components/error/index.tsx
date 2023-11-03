interface ErrorProps {
  errors: {
    email?: { message?: string }; // Adicione "?"
    password?: { message?: string }; // Adicione "?"
  };
}

export function Error({ errors }: ErrorProps) {
  return (
    <div className="flex flex-col self-start mb-4">
      <span className=" text-bodyS text-BrandRedDark font-nunito">
        {errors.email && errors.email.message}
      </span>
      <span className="text-bodyS text-BrandRedDark font-nunito">
        {errors.password && errors.password.message}
      </span>
    </div>
  );
}
