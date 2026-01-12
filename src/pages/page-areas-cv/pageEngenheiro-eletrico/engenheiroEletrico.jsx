import Nav from "../../../components/Nav";
import Descricao from "./layout/Descricao";
import Intro from "./layout/Intro";
import Requisitos from "./layout/Requisitos";
import Rodape from "../../../components/Rodape";

function engenheiroEletrico() {
    return (
        <>
            <Nav/>
            <Intro />
            <Descricao />
            <Requisitos />
            <Rodape />
        </>
    );
}

export default engenheiroEletrico;