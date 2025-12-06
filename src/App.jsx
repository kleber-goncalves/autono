import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Autono from "./pages/page1/autono";
import Tecnologia from "./pages/page2-tec/Tecnologia";
import Sobre from "./pages/page3-sobre/Sobre";
import Carreiras from "./pages/page4-carreira/Carreiras";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Autono />} />
                <Route path="/tecnologia" element={<Tecnologia />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/carreiras" element={<Carreiras/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
