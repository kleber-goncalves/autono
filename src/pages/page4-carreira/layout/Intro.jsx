import Intro_cmp from "../../../components/Intro_cmp"

function Intro() {
    return (
        <section className="max-w-8xl mx-auto px-6 lg:px-9 py-24 border-b flex flex-col items-center ">
            <Intro_cmp
                className="gap-15"
                classNameTitle="text-7xl"
                classNameText="tracking-wide max-w-3xl"
                titulo="NÓS REALIZAMOS GRANDES IDEIAS
"
                texto="Faça parte dessa viagem!

"
            />
        </section>
    );
}

export default Intro