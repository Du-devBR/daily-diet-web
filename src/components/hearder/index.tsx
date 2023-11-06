import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Hearder() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  function handleLogoutUser() {
    try {
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <header className="flex justify-between mt-6 items-center relative">
        <img
          src={logo}
          alt="Logotipo daily diet, possui forma de um garfo e faca na cor preta."
        />
        <div
          className=" w-10 h-10 rounded-full border-2 border-BaseGray200 overflow-hidden cursor-pointer z-10"
          onClick={() => setToggle(!toggle)}
        >
          <img
            className="m-auto w-full h-full"
            src={avatar}
            alt="icone avatar usuario"
          />
        </div>
        <div
          className={`absolute right-0 bottom-0 top-12 rounded-lg  duration-300 ${
            toggle ? " visible opacity-100 " : " opacity-0"
          }`}
        >
          <button className=" active-solid-button" onClick={handleLogoutUser}>
            Sair
          </button>
        </div>
      </header>
    </div>
  );
}
