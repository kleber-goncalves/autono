import Nav from "../../components/Nav";
import Rodape from "../../components/Rodape";
import FormularioCandidatura from "./layout/FormularioCandidatura";
import Intro from "./layout/Intro";

function envioCurriculo() {
    return (
        <>
            <Nav />
            <Intro />
            <FormularioCandidatura />
            <Rodape />
        </>
    );
}

export default envioCurriculo;
