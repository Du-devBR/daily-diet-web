import { Route, Routes } from "react-router-dom";
import { Home } from "../screens/home";
import { Checkin } from "../screens/checkin";
import { Statistics } from "../screens/statistics";
import { EditMeal } from "../screens/editMeal";
import { Feedback } from "../screens/feedback";
import { MealDetail } from "../screens/mealDetail";
import { NotFound } from "../screens/404/notFound";
import { CreateMeal } from "../screens/createMeal";


export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/checkin" element={<Checkin />}/>
      <Route path="/statistics" element={<Statistics />}/>
      <Route path="/create" element={<CreateMeal />}/>
      <Route path="/edit/:id" element={<EditMeal />}/>
      <Route path="/feedback/:status" element={<Feedback />}/>
      <Route path="/meal/:id" element={<MealDetail />} />
      <Route path="/notFound" element={<NotFound />} />
    </Routes>
  )
}
