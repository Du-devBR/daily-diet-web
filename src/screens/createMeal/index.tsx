import {ArrowLeft} from 'phosphor-react'
import { useState } from 'react';
export function CreateMeal() {

  const [isDiet, setIsDiet] = useState<boolean | null>(null)

  //Aqui podemos definir um active no fomulario de seleção e ja podemos capturar o valor do iddiet para adiciona no submit
  const handleActive = (valor: boolean) =>{
    setIsDiet(valor)
    console.log(valor);

  }
  return (
    <div className=" bg-BaseGray500">
      <header className='flex items-start w-full text-center p-6'>
        <ArrowLeft className=' w-6 h-6'/>
        <h1 className=' text-titleS text-BaseGray100 font-nunito m-auto'>Nova refeição</h1>
      </header>
      <form className=' flex flex-col gap-6 w-full calc-manege-height px-6 py-10 bg-BaseGray700 rounded-t-3xl'>
        <div className='flex flex-col gap-1 w-full'>
          <label className=' text-titleXS text-BaseGray200 font-nunito' htmlFor="">Nome</label>
          <input className=' w-full p-3.5 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito' type="text" />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label className=' text-titleXS text-BaseGray200 font-nunito' htmlFor="">Descrição</label>
          <input className=' w-full p-3.5 h-28 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito' type="text" />
        </div>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-1 w-full'>
            <label className=' text-titleXS text-BaseGray200 font-nunito' htmlFor="">Data</label>
            <input className=' w-full p-3.5 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito' type="text" />
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label className=' text-titleXS text-BaseGray200 font-nunito' htmlFor="">Hora</label>
            <input className=' w-full p-3.5 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito' type="text" />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <label htmlFor="">Esta dentro da dieta?</label>
          <div className='flex gap-6 w-full'>
            <button
              type='button' onClick={() => handleActive(true)}
              className={`mt-auto w-full button-select-green ${isDiet === true ? 'active' : ''}`}>
                <div className=' w-2 h-2 rounded-full bg-BrandGreenDark'></div>Sim
            </button>
            <button
              type='button' onClick={() => handleActive(false)}
              className={`mt-auto w-full button-select-red ${isDiet === false ? 'active' : ''}`}>
                <div className=' w-2 h-2 rounded-full bg-BrandRedDark'></div>Não
            </button>
          </div>
        </div>
        <button type='button'className='active-solid-button mt-auto w-full'>Cadastrar refeição</button>
      </form>
    </div>
  );
}
