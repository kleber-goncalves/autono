import Intro_cmp from "../../../components/Intro_cmp"

function Intro() {
    return (
        <section className="max-w-8xl bg-white mx-auto md:px-6 lg:px-9 md:py-24 py-10 border-b flex flex-col items-center ">
            <Intro_cmp
                className="md:gap-15 "
                classNameTitle="md:text-7xl text-[26px]"
                classNameText="tracking-wide md:max-w-3xl"
                titulo={["NÓS REALIZAMOS", "GRANDES IDEIAS"]}
                texto="Faça parte dessa viagem!

"
            />
        </section>
    );
}

export default Intro