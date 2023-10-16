import { Route, Routes } from "react-router-dom";
import { Home } from "../screens/home";
import { Checkin } from "../screens/checkin";
import { Statistics } from "../screens/statistics";
import { CreateMeal } from "../screens/createMeal";
import { EditMeal } from "../screens/editMeal";
import { Feedback } from "../screens/feedback";
import { MealDetail } from "../screens/mealDetail";


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
    </Routes>
  )
}
