import { IMAGES } from "../../../data/imagesSupaBase";

function Decorativo() {
    return (
        <section className="bg-white overflow-hidden">
            {/* Desktop: Com Parallax */}
            <div
                className="hidden lg:block w-full h-screen bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: `url(${IMAGES.FUNDOS.FUNDO_DESTAQUES})`,
                }}
            ></div>

            {/* Mobile: Imagem Normal */}
            <img
                loading="lazy"
                src={IMAGES.FUNDOS.FUNDO_DESTAQUES_MOBILE}
                alt="fundo destaque mobile"
                className="lg:hidden object-cover w-full"
            />
        </section>
    );
}

export default Decorativo;
