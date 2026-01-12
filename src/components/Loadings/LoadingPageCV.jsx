
/**
 * Componente de carregamento para a página de currículo.
 * Exibe um layout de carregamento com um header, um título principal e um subtítulo.
 * O header contém um logo 'AUTONO' e links de navegação.
 * O título principal exibe o texto 'O FUTURO DA MOBILIDADE CHEGOU'.
 * O subtítulo exibe o texto 'SOMOS UMA EMPRESA DE TECNOLOGIA DE PONTA A PONTA'.
 * Todas as seções do componente são animadas com o efeito de pulsar.
 * 
 * @returns {JSX.Element} O componente de carregamento da página de currículo.
 */

const LoadingPageCV = () => {
    return (
        <div className="min-h-screen bg-gray-200 p-4">
            {/* Container principal para centralizar e simular o layout do site */}
            <div className="max-w-8xl mx-auto">
                {/* Cabeçalho (Header) Skeleton */}
                <header className="flex justify-between items-center py-4 md:px-25">
                    {/* Logo 'AUTONO' */}
                    <div className="md:w-34 w-22 h-5 bg-gray-400 rounded animate-pulse"></div>

                    <div className="flex md:hidden space-y-2 items-center flex-col">
                        <div className="w-8 h-1 bg-gray-400 rounded animate-pulse"></div>
                        <div className="w-8 h-1 bg-gray-400 rounded animate-pulse"></div>
                    </div>
                    {/* Links e Botão Assinar */}
                    <div className="hidden sm:flex space-x-10 items-center">
                        {/* Links de navegação (Tecnologia, Sobre, Carreiras) */}
                        <div className="hidden sm:flex space-x-10">
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
                <div className="flex flex-col items-center justify-center pt-7 pb-16 text-center">
                    {/* Título Principal: "O FUTURO DA MOBILIDADE CHEGOU" */}
                    <div className="md:w-1/1 md:max-w-xl w-3/4 md:h-17 h-6 bg-gray-400 rounded mb-3 md:mb-10 animate-pulse"></div>
                    <div className="hidden md:block w-1/4 max-w-xs h-2 sm:h-17 bg-gray-400 rounded mb-6 animate-pulse"></div>

                    {/* Subtítulo" */}
                    {/* Área de Conteúdo Central (Título e Subtítulo) Skeleton */}
                    <div className="flex flex-col items-center justify-center md:pt-2  pt-12 text-center">
                        {/* Título Principal: "NOSSA HISTÓRIA" */}
                        {/* Subtítulo" */}
                        <div className="md:w-5/2 sm:max-w-3xl  px-36 py-30   bg-gray-400 rounded animate-pulse"></div>
                        <div className="flex flex-col md:flex-row w-full gap-7 md:gap-54  md:pt-10  pt-10">
                            <div className="md:w-1/2  px-12 py-12   bg-gray-400 rounded animate-pulse"></div>
                            <div className="md:w-1/2  px-20 py-12   bg-gray-400 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );          
};

export default LoadingPageCV;
