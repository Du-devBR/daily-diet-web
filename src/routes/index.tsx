import { Route, Routes } from "react-router-dom";
import { Home } from "../screens/home";
import { Login } from "../screens/login";
import { Statistics } from "../screens/statistics";
import { EditMeal } from "../screens/editMeal";
import { Feedback } from "../screens/feedback";
import { MealDetail } from "../screens/mealDetail";
import { NotFound } from "../screens/404/notFound";
import { CreateMeal } from "../screens/createMeal";
import { Register } from "../screens/register";


export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/statistics" element={<Statistics />}/>
      <Route path="/create" element={<CreateMeal />}/>
      <Route path="/edit/:id" element={<EditMeal />}/>
      <Route path="/feedback/:status" element={<Feedback />}/>
      <Route path="/meal/:id" element={<MealDetail />} />
      <Route path="/notFound" element={<NotFound />} />
    </Routes>
  )
}
