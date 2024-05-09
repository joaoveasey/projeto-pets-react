import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/index";
import About from "./pages/About/about";
import Doubts from "./pages/Doubts/doubts";
import Tips from "./pages/Tips/tips"
import Login from "./pages/Login/login"
import UserPage from "./pages/UserPage/userPage";
import DogDetails from "./pages/DogDetails/dogDetails";
import DogPage from "./pages/DogPage/dogPage";
import Register from "./pages/Register/register";

function MainRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sobre" element={<About />}></Route>
            <Route path="/dicas" element={<Tips />}></Route>
            <Route path="/duvidas" element={<Doubts />}></Route>
            <Route path="/entrar" element={<Login />}></Route>
            <Route path="/usuario" element={<UserPage />}></Route>
            <Route path="/detalhes" element={<DogDetails />}></Route>
            <Route path="/cachorros" element={<DogPage />}></Route>
            <Route path="/cadastro" element={<Register />}></Route>
        </Routes>
    )
    
}

export default MainRoutes