
import logo from '../../assets/logo.png'


export function Hearder() {
  return (
    <div>
      <header className='flex justify-between mt-6 items-center'>
        <img src={logo} alt="Logotipo daily diet, possui forma de um garfo e faca na cor preta." />
        <div className=" w-10 h-10 rounded-full border-2 border-BaseGray200 overflow-hidden">
          <img src="https://avatars.githubusercontent.com/u/89052479?v=4" alt="" />
        </div>
      </header>

    </div>
  );
}
