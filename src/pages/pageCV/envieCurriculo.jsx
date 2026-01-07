import Nav from "../../components/Nav";


import Rodape from "../../components/Rodape";
import FormularioCandidatura from "./layout/FormularioCandidatura";
import FormularioV2 from "./layout/FormularioV2";
import Intro from "./layout/Intro";

function envioCurriculo() {
    return (
        <>
            <Nav />
            <Intro />
            <FormularioCandidatura />
            <FormularioV2/>
            <Rodape />
        </>
    );
}

export default envioCurriculo;
