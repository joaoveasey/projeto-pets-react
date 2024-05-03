import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from "./routes"
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Navbar />
        <MainRoutes />
        <Footer />
    </BrowserRouter>
)
