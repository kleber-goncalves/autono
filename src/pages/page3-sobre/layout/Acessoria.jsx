import Card from "../../../components/Card";

function Acessoria() {
    return (
        <section className="max-w-8xl  bg-black border border-black mx-auto py-36 px-6 lg:px-9 flex flex-col  ">
            <div className="flex flex-col gap-y-36 px-50">
                <div className="flex flex-col  ">
                    <Card title="Autono na mídia" text="NOTÍCIAS" />
                </div>
                <div className="grid grid-cols-5 gap-40">
                    <div className="flex items-center">
                        <img src="/public/RCR-.png" alt="autono-midia" />
                    </div>
                    <div className="flex items-center">
                        <img
                            src="/public/TB_Review-01.png"
                            alt="autono-midia"
                        />
                    </div>
                    <div className="flex items-center">
                        <img src="/public/Finance.png" alt="autono-midia" />
                    </div>
                    <div className="flex items-center">
                        <img
                            src="/public/Palo_Alto_Tribunal.png"
                            alt="autono-midia"
                        />
                    </div>
                    <div className="flex items-center">
                        <img src="/public/London_post.png" alt="autono-midia" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Acessoria;
