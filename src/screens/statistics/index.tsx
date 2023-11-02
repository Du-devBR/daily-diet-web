import { ArrowLeft } from "phosphor-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectError,
  selectLoading,
  selectMetrics,
} from "../../redux/reducer/metrics/metrics-reducer";
import { fetchMetrics } from "../../redux/actions/metrics/metrics-actions";
import { AppDispatch } from "../../redux/store";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface IMetrics {
  totalResgitered: number;
  withinDiet: number;
  offDiet: number;
  percentMealsWithinDiet: number;
  maxSequence: number;
}

export function Statistics() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const metrics = useSelector(selectMetrics);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  if (error) {
    navigate("/notfound");
  }

  return (
    <div
      className={`${
        metrics.percentMealsWithinDiet >= 50
          ? "bg-BrandGreenLight "
          : "bg-BrandRedLight"
      } md:max-w-5xl m-auto`}
    >
      <header className=" p-6 ">
        <Link to={"/"} className=" bg-none border-none self-start">
          <ArrowLeft className=" text-BrandGreenDark w-6 h-6" />
        </Link>
        {loading ? (
          <Skeleton containerClassName="flex-1" height={59} />
        ) : (
          <div className="flex flex-col items-center m-auto ">
            <strong className=" font-nunito text-BaseGray100 text-titleG">
              {metrics.percentMealsWithinDiet} %
            </strong>
            <span className=" font-nunito text-BaseGray200 text-bodyS">
              das refeições dentro da dieta
            </span>
          </div>
        )}
      </header>
      <main className="px-6 w-full text-center rounded-t-3xl bg-BaseGray700 calc-main-height ">
        <h2 className=" font-nunito pt-8 text-titleXS text-BaseGray100">
          Estatísticas gerais
        </h2>
        <div className="flex flex-col gap-3 mt-6">
          {loading ? (
            <Skeleton containerClassName="flex-1" height={86} />
          ) : (
            <div className=" flex flex-col items-center rounded-lg bg-BaseGray600 p-4">
              <strong className=" font-nunito text-BaseGray100 text-titleM">
                {metrics.maxSequence}
              </strong>
              <span className=" font-nunito text-BaseGray200 text-bodyS">
                melhor sequência de pratos dentro da dieta
              </span>
            </div>
          )}
          {loading ? (
            <Skeleton containerClassName="flex-1" height={86} />
          ) : (
            <div className=" flex flex-col items-center rounded-lg bg-BaseGray600 p-4">
              <strong className=" font-nunito text-BaseGray100 text-titleM">
                {metrics.totalResgitered}
              </strong>
              <span className=" font-nunito text-BaseGray200 text-bodyS">
                refeições registradas
              </span>
            </div>
          )}
          <div className="flex gap-3 w-full">
            {loading ? (
              <Skeleton containerClassName="flex-1" height={86} />
            ) : (
              <div className=" w-full flex flex-col items-center rounded-lg bg-BrandGreenLight p-4">
                <strong className=" font-nunito text-BaseGray100 text-titleM">
                  {metrics.withinDiet}
                </strong>
                <span className=" font-nunito text-BaseGray200 text-bodyS">
                  refeições dentro da dieta
                </span>
              </div>
            )}
            {loading ? (
              <Skeleton containerClassName="flex-1" height={86} />
            ) : (
              <div className=" w-full flex flex-col items-center rounded-lg bg-BrandRedLight p-4">
                <strong className=" font-nunito text-BaseGray100 text-titleM">
                  {metrics.offDiet}
                </strong>
                <span className=" font-nunito text-BaseGray200 text-bodyS">
                  refeições fora da dieta
                </span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
