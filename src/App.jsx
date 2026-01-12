import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomCursor from "/src/components/CustomCursor";
import { supabase } from "./services/supabaseClient.js";

// Importar o wrapper
import MinimumLoadingWrapper from "./utils/MinimumLoadingWrapper";

// Imports dos skeletons customizados
import LoadingScreenAutono from "./components/Loadings/LoadingScreenAutono";
import LoadingScreenTecnologia from "./components/Loadings/LoadingScreenTecnologia";
import LoadingScreenSobre from "./components/Loadings/LoadingScreenSobre";
import LoadingScreenCarreiras from "./components/Loadings/LoadingScreenCarreiras";
import LoadingPageCV from "./components/Loadings/LoadingPageCV";

// Importes das páginas
// React.lazy() para fazer o Code Splitting dos componentes da página
const Autono = React.lazy(() => import("./pages/page1/autono"));
const Tecnologia = React.lazy(() => import("./pages/page2-tec/Tecnologia"));
const Sobre = React.lazy(() => import("./pages/page3-sobre/Sobre"));
const Carreiras = React.lazy(() => import("./pages/page4-carreira/Carreiras"));
const EngenheiroEletrico = React.lazy(() =>
    import(
        "./pages/page-areas-cv/pageEngenheiro-eletrico/engenheiroEletrico.jsx"
    )
);
const Cientistadedados = React.lazy(() =>
    import("./pages/page-areas-cv/pageCientista-dados/cientistaDados.jsx")
);
const PesquisadorIA = React.lazy(() =>
    import("./pages/page-areas-cv/pagePesqIA/pesquisador-IA.jsx")
);
const EngenheiroDeepLearning = React.lazy(() =>
    import(
        "./pages/page-areas-cv/pageEngenheiro-Deep-Learning/engenheiro-Deep-Learning.jsx"
    )
);
const EnvioCurriculo = React.lazy(() =>
    import("./pages/pageCV/envieCurriculo.jsx")
);

function App() {
    useEffect(() => {
        async function testConnection() {
            const { data, error } = await supabase.storage.listBuckets();
            if (error) {
                console.log("Erro ao conectar:", error.message);
            } else {
                console.log("Conectado com sucesso! Seus buckets:", data);
            }
        }
        testConnection();
    }, []);

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
                    <Route
                        path="/engenheiro-eletrico"
                        element={
                            <MinimumLoadingWrapper
                                fallback={<LoadingPageCV />}
                                minDuration={900}
                            >
                                <EngenheiroEletrico />
                            </MinimumLoadingWrapper>
                        }
                    />
                    <Route
                        path="/cientista-de-dados"
                        element={
                            <MinimumLoadingWrapper
                                fallback={<LoadingPageCV />}
                                minDuration={900}
                            >
                                <Cientistadedados />
                            </MinimumLoadingWrapper>
                        }
                    />
                    <Route
                        path="/pesquisidor-de-IA"
                        element={
                            <MinimumLoadingWrapper
                                fallback={<LoadingPageCV />}
                                minDuration={900}
                            >
                                <PesquisadorIA />
                            </MinimumLoadingWrapper>
                        }
                    />
                    <Route
                        path="/engenheiro-Deep-Learning"
                        element={
                            <MinimumLoadingWrapper
                                fallback={<LoadingPageCV />}
                                minDuration={900}
                            >
                                <EngenheiroDeepLearning />
                            </MinimumLoadingWrapper>
                        }
                    />
                    <Route
                        path="/junte-se-a-nos"
                        element={
                            <MinimumLoadingWrapper
                                fallback={<LoadingScreenCarreiras />}
                                minDuration={900}
                            >
                                <EnvioCurriculo />
                            </MinimumLoadingWrapper>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
