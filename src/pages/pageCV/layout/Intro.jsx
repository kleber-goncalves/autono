import Intro_cmp from "../../../components/Intro_cmp";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto bg-white px-6 lg:px-9 md:py-24 py-10 flex flex-col items-center ">
            <Intro_cmp
                className="gap-15 md:py-0"
                classNameTitle="md:text-7xl text-[26px]"
                classNameText="tracking-wide md:max-w-3xl"
                titulo="JUNTE-SE A NÓS"
            />
        </section>
    );
}

export default Intro;
