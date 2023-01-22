import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import OurFoodPage from "../pages/OurFoodPage";
import AllPage from "../pages/AllPage";
import BurritosPage from "../pages/BurritosPage";
import FamilyPage from "../pages/FamilyPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import OrderNowPage from "../pages/OrderNowPage";
import ChickenPage from "../pages/ChickenPage";
export default function AllRoutes(){



    return <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/allPage" element={<AllPage/>}></Route>
        <Route path="/burritosPage" element={<BurritosPage/>}></Route>
        <Route path="/familyPage" element={<FamilyPage/>}></Route>
        <Route path="/ourfoodpage" element={<OurFoodPage />}></Route>
        <Route path="/chickenPage" element={<ChickenPage/>}></Route>
        <Route path="/loginPage" element={<LoginPage/>}></Route>
        <Route path="/registerPage" element={<RegisterPage/>}></Route>
        <Route path="/orderNowPage" element={<OrderNowPage/>}></Route>
    </Routes>
}