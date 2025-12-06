import Nav from "../../components/Nav";
import Rodape from "../../components/Rodape";
import Intro from "./layout/intro";
import Localy from "./layout/Localy";
import Sec_carreira from "./layout/sec_carreira";

function Carreiras() {
    return (
        <>
            <Nav />
            <Intro />
            <Localy />
            <Sec_carreira />
            <Rodape/>
        </>
    )
}

export default Carreiras