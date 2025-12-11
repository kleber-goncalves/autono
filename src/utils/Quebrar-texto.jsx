
// Componente que prepara a estrutura de máscara
export const TitleMask = ({ children, className }) => {
    // Se recebermos uma string simples, transformamos em array para garantir consistência
    // Se você quiser quebrar linhas manualmente, passe um array: ["Linha 1", "Linha 2"]
    const lines = Array.isArray(children) ? children : [children];

    return (
        <div className={`flex flex-col items-center ${className}`}>
            {lines.map((line, index) => (
                // 1. A MÁSCARA (PAI): Corta tudo que sai dela
                <div key={index} className="overflow-hidden">
                    {/* 2. O CONTEÚDO (FILHO): É o que vamos animar */}
                    <div className="line-inner block will-change-transform">
                        {line}
                    </div>
                </div>
            ))}
        </div>
    );
};
