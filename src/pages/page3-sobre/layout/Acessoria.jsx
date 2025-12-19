import Card from "../../../components/Card";
import ProjectImage from "../../../components/ProjectImage";
import { Fade } from "react-awesome-reveal";


function Acessoria() {
    return (
        <section className="max-w-8xl  bg-black border border-black mx-auto py-36 px-6 lg:px-9 flex flex-col  ">
            <div className="flex flex-col gap-y-36 px-50">
                <div className="flex flex-col  ">
                    <Card title="Autono na mídia" text="NOTÍCIAS" />
                </div>
                <div className="grid grid-cols-5 gap-40">
                    <Fade cascade triggerOnce duration={1300} delay={0}>
                        <div className="flex items-center">
                            <ProjectImage id="RCR" />
                        </div>
                    </Fade>
                    <Fade cascade triggerOnce duration={1300} delay={200}>
                        <div className="flex items-center">
                            <ProjectImage id="TBReview" />
                        </div>
                    </Fade>
                    <Fade cascade triggerOnce duration={1300} delay={500}>
                        <div className="flex items-center">
                            <ProjectImage id="Finance" />
                        </div>
                    </Fade>
                    <Fade cascade triggerOnce duration={1300} delay={800}>
                        <div className="flex items-center">
                            <ProjectImage id="PaloAltoTribunal" />
                        </div>
                    </Fade>
                    <Fade cascade triggerOnce duration={1300} delay={1200}>
                        <div className="flex items-center">
                            <ProjectImage id="Londonpost" />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Acessoria;
