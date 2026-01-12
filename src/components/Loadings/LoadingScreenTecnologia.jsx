const LoadingScreenTecnologia = () => {
    return (
        <div className="min-h-screen bg-gray-200 pt-4">
            {/* Container principal para centralizar e simular o layout do site */}
            <div className="max-w-8xl">
                {/*  Cabeçalho (Header) Skeleton */}
                <header className="flex justify-between items-center py-4 md:px-25 px-10">
                    {/* Logo 'AUTONO' */}
                    <div className="w-34 h-5 bg-gray-400 rounded animate-pulse"></div>

                    {/* Links e Botão Assinar */}
                    <div className="flex md:hidden space-y-2 items-center flex-col">
                        <div className="w-8 h-1 bg-gray-400 rounded animate-pulse"></div>
                        <div className="w-8 h-1 bg-gray-400 rounded animate-pulse"></div>
                    </div>
                    {/* Links e Botão Assinar */}
                    <div className="hidden md:flex space-x-10 items-center">
                        {/* Links de navegação (Tecnologia, Sobre, Carreiras) */}
                        <div className="hidden md:flex space-x-10">
                            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
                            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
                            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
                        </div>

                        {/* Botão 'Assinar' */}
                        <div className="hidden sm:block w-28 h-8 bg-black opacity-100 rounded animate-pulse"></div>
                    </div>
                </header>

                {/* Linha divisória simulada (para o espaço vazio abaixo do header) */}
                <div className="h-0.5 my-4 bg-black opacity-1"></div>

                {/* Área de Conteúdo Central (Título e Subtítulo) Skeleton */}
                <div className="flex flex-col items-center justify-center pt-18  text-center">
                    {/* Título Principal: "TECNOLOGIA PERCEPTIVA ATIVADA" */}
                    <div className="w-1/2 max-w-sm h-14 bg-gray-400 rounded mb-7 animate-pulse"></div>
                    <div className="w-3/4 max-w-2xl h-2 sm:h-14 bg-gray-400 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreenTecnologia;
