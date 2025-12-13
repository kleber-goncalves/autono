import { useState, useEffect } from "react"; // 1. Importar Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Importes das páginas
import Autono from "./pages/page1/autono";
import Tecnologia from "./pages/page2-tec/Tecnologia";
import Sobre from "./pages/page3-sobre/Sobre";
import Carreiras from "./pages/page4-carreira/Carreiras";

// Importar o componente de Load
import LoadingScreen from "./components/LoadingScreen";
function App() {
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    // Função que finaliza o load
const handleComplete = () => {
    // Garante que o load fique na tela por pelo menos 1.5 segundos
    setTimeout(() => {
        setIsLoading(false);
    }, 8500);
};

    // Verifica se a página já está carregada (cache ou load rápido)
    if (document.readyState === "complete") {
        handleComplete();
    } else {
        // Se não, espera o evento 'load' (imagens, scripts, css baixados)
        window.addEventListener("load", handleComplete);
    }

    // Limpeza do evento
    return () => {
        window.removeEventListener("load", handleComplete);
    };
}, []);

    return (
        <>
            {/* Se estiver carregando, mostra APENAS a tela de load */}
            {isLoading ? (
                <LoadingScreen />
            ) : (
                // Se carregou, mostra o Router com animação de entrada (opcional)
                <div className="animate-fade-in">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Autono />} />
                            <Route
                                path="/tecnologia"
                                element={<Tecnologia />}
                            />
                            <Route path="/sobre" element={<Sobre />} />
                            <Route path="/carreiras" element={<Carreiras />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            )}
        </>
    );
}

export default App;
