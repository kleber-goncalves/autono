import Nav from "../../components/Nav";
import Intro from "../page3-sobre/layout/Intro";
import Abordagem from "./layout/Abordagem";
import Acessoria from "./layout/Acessoria";
import Decorativo from "./layout/Decorativo";
import Linha_temp from "./layout/Linha_tmp";
import Rodape from './../../components/Rodape';

function Sobre() {
    return (
        <>
            <Nav />
            <Intro />
            <Abordagem />
            <Linha_temp />
            <Decorativo />
            <Acessoria />
            <Rodape/>
        </>
    )
}

export default Sobre