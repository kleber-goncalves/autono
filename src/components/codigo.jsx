function ola() {
    return (
        <div className="flex max-w-8xl mx-auto z-10 flex-row items-center justify-center gap-8 mt-55 hover:bg-white/30  hover:scale-y-95 hover:scale-x-95 transition duration-300  bg-white/20 rounded-2xl py-1 shadow-xl shadow-white/10 border border-white/60 backdrop-blur-md  ">
            <div>
                <p className="text-xl font-semibold text-black pl-5 ">
                    Scroll down
                </p>
            </div>

            <div className="flex flex-col items-center w-75">
                <div className="w-full border bg-black  "></div>
            </div>

            <div className="flex flex-col items-center  rounded-full border-3 border-black bg-gray-400 w-8 h-12">
                <div className="w-1 h-2 bg-black my-1 rounded-full animate-custom-bounce "></div>
            </div>

            <div className="flex flex-col items-center w-75">
                <div className="w-full border bg-black  "></div>
            </div>

            <div>
                <p className="text-xl font-semibold text-black pr-5 ">
                    Conheça Autono
                </p>
            </div>
        </div>
    );
}

export default ola;
