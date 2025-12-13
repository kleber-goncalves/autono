
const LoadingScreen = () => {
    return (
        // Simula o fundo da página (ou o espaço ocupado pelo fundo)
        <div className="min-h-screen    bg-gray-200 p-4">
            {/* Container principal para centralizar e simular o layout do site */}
            <div className="max-w-8xl mx-auto">
                {/* 1. 🖼️ Cabeçalho (Header) Skeleton */}
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

                {/* 2. 📝 Área de Conteúdo Central (Título e Subtítulo) Skeleton */}
                <div className="flex flex-col items-center justify-center pt-7 pb-16 text-center">
                    <div className="w-1/2 max-w-xl h-17 bg-gray-400 rounded mb-10 animate-pulse"></div>

                    {/* Título Principal: "O FUTURO DA MOBILIDADE CHEGOU" */}
                    <div className="w-3/4 max-w-4xl h-2 sm:h-17 bg-gray-400 rounded mb-10 animate-pulse"></div>
                    <div className="w-3/4 max-w-2xl h-2 sm:h-7 bg-gray-300 rounded  animate-pulse"></div>

                    {/* Subtítulo: "Prove uma direção autônoma mais segura com Autono." */}
                </div>

                <div class="flex pt-50 justify-center items-center ">
                    <div className="spinner">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
