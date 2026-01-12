import Nav from "../../../components/Nav";
import Intro from "./layout/Intro";
import Descricao from "./layout/Descricao";
import Requisitos from "./layout/Requisitos";
import Rodape from "../../../components/Rodape";

function engenheiroEletrico() {
    return (
        <>
            <Nav />
            <Intro/>
            <Descricao />
            <Requisitos/>
            <Rodape />
        </>
    );
}

export default engenheiroEletrico;
