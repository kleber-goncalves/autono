import { Video } from "lucide-react";
import BackgroundVideo from "../../../components/Video_fundo";

function Hero() {
    return (
        <section className="max-w-8xl mx-auto  h-screen flex flex-col items-center  ">
            <BackgroundVideo/>
            <div className="absolute inset-0 bg-linear-to-b  from-black/5 via-transparent to-black"></div>
        </section>
    );
}

export default Hero;
