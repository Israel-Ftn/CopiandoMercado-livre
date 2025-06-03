import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "../Copia-Face/src/components/Cabecario/Header"
import Footer from './src/components/footer/Footer';
import Homes from './src/Paginas/Home/Homes';
function AppRoutes() {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Homes/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default AppRoutes;