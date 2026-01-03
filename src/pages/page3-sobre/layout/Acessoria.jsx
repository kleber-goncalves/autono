import Card from "../../../components/Card";
import ProjectImage from "../../../components/ProjectImage";
import { Fade } from "react-awesome-reveal";


function Acessoria() {
    return (
        <section className="max-w-8xl bg-black border border-black mx-auto py-20 md:py-36 px-6 md:px-0 lg:px-0 xl:px-0 flex flex-col  ">
            <div className="flex flex-col  gap-y-20 md:gap-y-36 px-0 md:px-10 lg:px-12 xl:px-40 2xl:px-50 ">
                <div className="flex flex-col  ">
                    <Card
                        classNameTitle="max-w-sm text-lg "
                        classNameText="text-[11px]"
                        title="Autono na mídia"
                        text="NOTÍCIAS"
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20 md:gap-0 md:gap-y-23 lg:gap-0 2xl:gap-40 items-center">
                    <Fade cascade triggerOnce duration={1300} delay={0}>
                        <div className="w-full flex justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-center items-center">
                            <ProjectImage
                                id="RCR"
                                loading="lazy"
                                className="w-full max-w-[110px]  sm:max-w-[140px]  md:max-w-30 lg:max-w-[130px] xl:w-[700px] h-auto object-contain"
                            />
                        </div>
                    </Fade>
                    <Fade cascade triggerOnce duration={1300} delay={200}>
                        <div className="w-full flex justify-center  lg:justify-start xl:justify-start items-center">
                            <ProjectImage
                                id="TBReview"
                                loading="lazy"
                                className="w-full max-w-[110px]  sm:max-w-[140px] md:max-w-30 lg:max-w-[130px] xl:w-[700px] h-auto object-contain"
                            />
                        </div>
                    </Fade>
                    <Fade cascade triggerOnce duration={1300} delay={500}>
                        <div className="w-full flex justify-center md:justify-end lg:justify-center  xl:justify-start items-center">
                            <ProjectImage
                                id="Finance"
                                loading="lazy"
                                className="w-full max-w-[110px]  sm:max-w-[140px] md:max-w-30 lg:max-w-[130px] xl:w-[700px] h-auto object-contain"
                            />
                        </div>
                    </Fade>
                    <Fade cascade triggerOnce duration={1300} delay={800}>
                        <div className="w-full flex justify-center md:justify-start lg:justify-end xl:justify-start items-center">
                            <ProjectImage
                                id="PaloAltoTribunal"
                                loading="lazy"
                                className="w-full max-w-[110px]  sm:max-w-[140px] md:max-w-30 lg:max-w-[130px] xl:w-[700px] h-auto object-contain"
                            />
                        </div>
                    </Fade>
                    <Fade cascade triggerOnce duration={1300} delay={1200}>
                        <div className="w-full flex justify-center lg:justify-end xl:justify-start items-center">
                            <ProjectImage
                                id="Londonpost"
                                loading="lazy"
                                className="w-full  max-w-[110px] sm:max-w-[140px] md:max-w-30 lg:max-w-[130px] xl:w-[700px] h-auto object-contain"
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Acessoria;
