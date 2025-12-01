import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Autono from "./pages/page1/autono";
import Tecnologia from "./pages/page2-tec/Tecnologia";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Autono />} />
                <Route path="/tecnologia" element={<Tecnologia/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
