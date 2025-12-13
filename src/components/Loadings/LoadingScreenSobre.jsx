const LoadingScreenSobre = () => {
    return (
        <div className="min-h-screen    bg-gray-200 pt-4">
            {/* Container principal para centralizar e simular o layout do site */}
            <div className="max-w-8xl">
                {/* Cabeçalho (Header) Skeleton */}
                <header className="flex justify-between items-center py-4 px-25">
                    {/* Logo 'AUTONO' */}
                    <div className="w-34 h-5 bg-gray-400 rounded animate-pulse"></div>

                    {/* Links e Botão Assinar */}
                    <div className="flex space-x-10 items-center">
                        {/* Links de navegação (Tecnologia, Sobre, Carreiras) */}
                        <div className="hidden sm:flex space-x-10">
                            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
                            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
                            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
                        </div>

                        {/* Botão 'Assinar' */}
                        <div className="w-28 h-8 bg-black opacity-100 rounded animate-pulse"></div>
                    </div>
                </header>

                {/* Linha divisória simulada (para o espaço vazio abaixo do header) */}
                <div className="h-0.5 my-4 bg-black opacity-1"></div>

                {/* Área de Conteúdo Central (Título e Subtítulo) Skeleton */}
                <div className="flex flex-col items-center pt-22  text-center">
                    {/* Título Principal: "NOSSA HISTÓRIA" */}
                    <div className="w-4/2 max-w-2xl h-18 bg-gray-400 rounded mb-26 animate-pulse"></div>

                    {/* Subtítulo" */}
                    <div className="w-4/2 max-w-3xl p-42 sm:h-14 bg-gray-400 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreenSobre;
