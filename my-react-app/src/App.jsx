import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { userAuthentication } from './hooks/userAuthentication';

import Home from "./pages/Home/home"
import About from "./pages/About/about";
import Doubt from "./pages/Doubt/doubt";
import Tips from "./pages/Tips/tips";
import Login from "./pages/Login/login";
import UserPage from "./pages/UserPage/userPage";
import DogDetails from "./pages/DogDetails/dogDetails";
import DogPage from "./pages/DogPage/dogPage";
import Register from "./pages/Register/register";
import RecoverPassword from "./pages/RecoverPassword/recoverPassword";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import ReactGA from 'react-ga4';

function App(){

    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }, [location]);

    const [ user, setUser ] = useState(undefined)
    const { auth } = userAuthentication()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [auth])
    return(    
        <AuthProvider value={{ user }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/sobre" element={<About />}></Route>
                    <Route path="/dicas" element={<Tips />}></Route>
                    <Route path="/duvidas" element={<Doubt />}></Route>
                    <Route path="/entrar" element={<Login />}></Route>
                    <Route path="/usuario" element={<UserPage />}></Route>
                    <Route path="/detalhes/:name" element={<DogDetails />}></Route>
                    <Route path="/cachorros" element={<DogPage />}></Route>
                    <Route path="/cadastro" element={<Register />}></Route>
                    <Route path="/recuperarSenha" element={<RecoverPassword />}></Route>
                </Routes>
                <Footer />
        </AuthProvider>
    )
}

export default App