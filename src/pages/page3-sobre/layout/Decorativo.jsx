import ProjectImage from "../../../components/ProjectImage";

function Decorativo() {
    return (
        <section className="md:h-screen max-w-8xl bg-white overflow-hidden md:bg-[url('/src/assets/fundo-destaques.jpg')] md:bg-fixed  md:bg-cover md:bg-center">
            <ProjectImage
                id="fundo-destaques-Mobile"
                className="md:hidden object-cover w-full"
            />
        </section>
    );
}

export default Decorativo;
