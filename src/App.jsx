import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomCursor from "/src/components/CustomCursor";

// Importar o novo wrapper
import MinimumLoadingWrapper from "./utils/MinimumLoadingWrapper";

// Imports dos skeletons customizados
import LoadingScreenAutono from "./components/Loadings/LoadingScreenAutono"; // Seu original renomeado
import LoadingScreenTecnologia from "./components/Loadings/LoadingScreenTecnologia";
import LoadingScreenSobre from "./components/Loadings/LoadingScreenSobre";
import LoadingScreenCarreiras from "./components/Loadings/LoadingScreenCarreiras";

// Importes das páginas
// Usar React.lazy() para fazer o Code Splitting dos componentes da página
const Autono = React.lazy(() => import("./pages/page1/autono"));
const Tecnologia = React.lazy(() => import("./pages/page2-tec/Tecnologia"));
const Sobre = React.lazy(() => import("./pages/page3-sobre/Sobre"));
const Carreiras = React.lazy(() => import("./pages/page4-carreira/Carreiras"));

// Importar o componente de Load

function App() {
    return (
        <>
            <BrowserRouter>
                <CustomCursor />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MinimumLoadingWrapper
                                fallback={<LoadingScreenAutono />}
                                minDuration={900} //
                            >
                                <Autono />
                            </MinimumLoadingWrapper>
                        }
                    />
                    <Route
                        path="/tecnologia"
                        element={
                            <MinimumLoadingWrapper
                                fallback={<LoadingScreenTecnologia />}
                                minDuration={900}
                            >
                                <Tecnologia />
                            </MinimumLoadingWrapper>
                        }
                    />
                    <Route
                        path="/sobre"
                        element={
                            <MinimumLoadingWrapper
                                fallback={<LoadingScreenSobre />}
                                minDuration={900}
                            >
                                <Sobre />
                            </MinimumLoadingWrapper>
                        }
                    />
                    <Route
                        path="/carreiras"
                        element={
                            <MinimumLoadingWrapper
                                fallback={<LoadingScreenCarreiras />}
                                minDuration={900}
                            >
                                <Carreiras />
                            </MinimumLoadingWrapper>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
