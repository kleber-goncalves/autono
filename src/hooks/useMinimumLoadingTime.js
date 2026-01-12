import { useState, useEffect } from "react";

// Hook para garantir um tempo mínimo de carregamento
const useMinimumLoadingTime = (minDuration = 1000) => {
    const [isMinTimeElapsed, setIsMinTimeElapsed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMinTimeElapsed(true);
        }, minDuration);

        // Limpeza do timer
        return () => clearTimeout(timer);
    }, [minDuration]);

    return isMinTimeElapsed;
};

export default useMinimumLoadingTime;
