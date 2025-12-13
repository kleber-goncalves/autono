import React from "react";
// O hook useMinimumLoadingTime deve ser mantido, pois ele gerencia o atraso de tempo.
import useMinimumLoadingTime from "../hooks/useMinimumLoadingTime";

// Este componente recebe a página (children) e a tela de carregamento (fallback)
const MinimumLoadingWrapper = ({ children, fallback, minDuration = 1000 }) => {
    // Hook para verificar se o tempo mínimo de atraso expirou
    const isMinTimeElapsed = useMinimumLoadingTime(minDuration);

    // O componente children SÓ É PASSADO para este wrapper pelo React quando
    // o bundle do React.lazy() foi carregado.
    // Portanto, basta checar se o tempo mínimo expirou.

    // Se o tempo mínimo expirou, renderize o componente real (children).
    if (isMinTimeElapsed) {
        return children;
    }

    // Caso contrário, renderize o fallback (a tela de loading customizada)
    return fallback;
};

export default MinimumLoadingWrapper;
