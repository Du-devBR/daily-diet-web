
import {ArrowLeft} from 'phosphor-react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formattedDate } from '../../util/formatDate';
interface IMeal {
  name: string,
  description: string,
  data?: string,
  hour?: string
  isDiet: boolean | null,
  createdAt: Date
}

export function CreateMeal() {
  const [isDiet, setIsDiet] = useState<boolean | null>(null)

  const [formMeal, setFormMeal] = useState<IMeal>({
    name: '',
    description: '',
    data: '',
    hour: '',
    createdAt: new Date(),
    isDiet: isDiet
  })

  const handleRegisterNewMeal = (event: React.FormEvent) =>{
    event.preventDefault()
    const { data, hour } = formMeal;
    if(data && hour){
      setFormMeal({
        ...formMeal,
        createdAt: formattedDate(data, hour)
      })

      console.log(formMeal);
    }

  }

  //Aqui podemos definir um active no fomulario de seleção e ja podemos capturar o valor do iddiet para adiciona no submit
  const handleActive = (valor: boolean) =>{
    setIsDiet(valor)
    setFormMeal({
      ...formMeal,
      isDiet: valor,
    })

  }
  return (
    <div className=" bg-BaseGray500">
      <header className='flex items-start w-full text-center p-6'>
        <Link to={"/"}><ArrowLeft className=' w-6 h-6'/></Link>
        <h1 className=' text-titleS text-BaseGray100 font-nunito m-auto'>Nova refeição</h1>
      </header>
      <form
        onSubmit={handleRegisterNewMeal}
        className=' flex flex-col gap-6 w-full calc-manege-height px-6 py-10 bg-BaseGray700 rounded-t-3xl'>
        <div className='flex flex-col gap-1 w-full'>
          <label className=' text-titleXS text-BaseGray200 font-nunito' htmlFor="">Nome</label>
          <input
            className=' w-full p-3.5 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito' type="text"
            value={formMeal.name}
            onChange={(event) => setFormMeal({...formMeal, name: event.target.value})}
          />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label className=' text-titleXS text-BaseGray200 font-nunito' htmlFor="">Descrição</label>
          <input
            className=' w-full p-3.5 h-28 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito' type="text"
            value={formMeal.description}
            onChange={(event) => setFormMeal({...formMeal, description: event.target.value})}
          />
        </div>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-1 w-full'>
            <label className=' text-titleXS text-BaseGray200 font-nunito' htmlFor="">Data</label>
            <input
              value={formMeal.data}
              className=' w-full p-3.5 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito' type="date"
              onChange={(event) => setFormMeal({...formMeal, data: event.target.value})}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label className=' text-titleXS text-BaseGray200 font-nunito' htmlFor="">Hora</label>
            <input
              value={formMeal.hour}
              className=' w-full p-3.5 border border-BaseGray500 rounded-md text-bodyM text-BaseGray100 font-nunito' type="time"
              onChange={(event) => setFormMeal({...formMeal, hour: event.target.value})}
            />
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
        <button type='submit'className='active-solid-button mt-auto w-full'>Cadastrar refeição</button>
      </form>
    </div>
  );
}
