import { ArrowUpRight, Plus } from "phosphor-react";
import { Hearder } from "../../components/hearder";
import { Link } from "react-router-dom";
import { Meal } from "../../components/meal";
import { useEffect, useState } from "react";
import axios from "axios";
import { groupMealsByDate } from "../../util/groupedMelsByDate";
import { formattedDate } from "../../util/formatDate";

interface IPercentDiet {
  percentMealsWithinDiet: number
}
export interface IMeal {
  createdAt: string;
  description: string
  id: string
  isDiet: boolean
  name: string
  userId: string
}


export function Home() {

  const [percentDiet, setPercentDiet] = useState<IPercentDiet>({
    percentMealsWithinDiet: 0
  })

  const [meals, setMeals] = useState([])

  useEffect( () => {
    const dados = async () => {
      try {
        const response = await axios.get("http://localhost:3333/user/7a7995cd-4278-4fd3-8411-84384269b872/metrics")
        setPercentDiet(response.data.metrics)

      } catch (error) {
        console.error("erro");

      }
    }
    dados()
  },[])

  useEffect( () => {
    const dados = async () => {
      try {
        const response = await axios.get("http://localhost:3333/user/7a7995cd-4278-4fd3-8411-84384269b872/meal")
        setMeals(response.data.meals)

      } catch (error) {
        console.error("erro");

      }
    }
    dados()
  },[])

  const groupedMeals = groupMealsByDate(meals);

  return (
    <div className="px-6 pb-6">
      <Hearder />
      <nav className='flex justify-between w-full bg-BrandGreenLight p-5 rounded-lg mt-9'>
        <div className='flex flex-col items-center m-auto'>
          <strong className=' font-nunito text-BaseGray100 text-titleG'>{percentDiet.percentMealsWithinDiet}</strong>
          <span className=' font-nunito text-BaseGray200 text-bodyS'>das refeições dentro da dieta</span>
        </div>
        <Link to={"/statistics"} className=' bg-none border-none self-start'>
          <ArrowUpRight className=' text-BrandGreenDark w-6 h-6 hover:scale-125 duration-500' />
        </Link>
      </nav>
      <main className=" mt-10 w-full">
        <div className="w-full">
          <h2 className=" text-bodyM text-BaseGray100 font-nunito">Refeições</h2>
          <Link to={"/create"}
            className=" active-solid-button w-full mt-2">
              <Plus className=" w-4 h-4"/> Nova refeição
          </Link>
        </div>
        <section className=" mt-8">
          {
            Object.keys(groupedMeals).map(date => (
              <div className=" mt-8" key={date}>
                <h2 className=" text-titleS text-BaseGray100 font-nunito mb-2">{formattedDate(date)}</h2>
                {
                  groupedMeals[date].map((meal: IMeal) => (
                    <Meal
                      key={meal.id}
                      name={meal.name}
                      hour={meal.createdAt}
                      isDiet={meal.isDiet}
                    />
                  ))
                }
              </div>
            ))
          }

        </section>
      </main>
    </div>
  );
}
