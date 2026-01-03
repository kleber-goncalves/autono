import ProjectImage from "../../../components/ProjectImage";

function Decorativo() {
    return (
        <section className="lg:h-screen max-w-8xl bg-white overflow-hidden lg:bg-[url('/src/assets/fundo-destaques.jpg')] lg:bg-fixed  lg:bg-cover lg:bg-center">
            <ProjectImage
                id="fundo-destaques-Mobile"
                className="lg:hidden object-cover w-full"
            />
        </section>
    );
}

export default Decorativo;
