import { ArrowUpRight, Plus } from "phosphor-react";
import { Hearder } from "../../components/hearder";
import { Link, useNavigate } from "react-router-dom";
import { Meal } from "../../components/meal";
import { useEffect} from "react";
import { formattedDate } from "../../util/formatDate";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading, selectMeals } from "../../redux/reducer/meals/meals-reducer";
import { fetchAllMeals } from "../../redux/actions/meals/meals-actions";
import { AppDispatch } from "../../redux/store";
import { fetchMetrics } from "../../redux/actions/metrics/metrics-actions";
import { selectMetrics } from "../../redux/reducer/metrics/metrics-reducer";
import { groupMealsByDate } from "../../util/groupedMelsByDate";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export interface IMeal {
  createdAt: string;
  description: string
  id: string
  isDiet: boolean
  name: string
  userId?: string
}

export function Home() {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const meals = useSelector(selectMeals)
  const metrics = useSelector(selectMetrics)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect( () => {
    dispatch(fetchAllMeals())
    dispatch(fetchMetrics())
  },[dispatch])

  if(error) {
    navigate("/notFound")
  }

  const groupCreatedat = groupMealsByDate(meals)

  return (
    <div className="px-6 pb-6">
      <Hearder />
      <nav className='flex justify-between w-full bg-BrandGreenLight p-5 rounded-lg mt-9'>
        <div className='flex flex-col items-center m-auto'>
          <strong className=' font-nunito text-BaseGray100 text-titleG'>{`${metrics.percentMealsWithinDiet} %`}</strong>
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
            loading ?  <Skeleton className="flex gap-3 items-center py-4 px-3 w-full border border-BaseGray500 rounded-md" count={10} />:
            Object.keys(groupCreatedat).map(date => (
              <div className=" mt-8" key={date}>
                <h2 className=" text-titleS text-BaseGray100 font-nunito mb-2">{formattedDate(date)}</h2>
                {
                  groupCreatedat[date].map((meal: IMeal) => (
                    <Meal
                      key={meal.id}
                      id={meal.id}
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
