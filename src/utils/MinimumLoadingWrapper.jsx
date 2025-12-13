import React, { useEffect } from "react"; // O hook useMinimumLoadingTime deve ser mantido, pois ele gerencia o atraso de tempo.
import useMinimumLoadingTime from "../hooks/useMinimumLoadingTime";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // importe

// Este componente recebe a página (children) e a tela de carregamento (fallback)
const MinimumLoadingWrapper = ({ children, fallback, minDuration = 1000 }) => {
    // Hook para verificar se o tempo mínimo de atraso expirou
    const isMinTimeElapsed = useMinimumLoadingTime(minDuration);

  useEffect(() => {
      if (isMinTimeElapsed) {
          // dá uma leve folga para o DOM se estabilizar e então refresh
          // (um setTimeout rápido evita edge-cases com layouts que mudam)
          const t = setTimeout(() => {
              if (
                  ScrollTrigger &&
                  typeof ScrollTrigger.refresh === "function"
              ) {
                  ScrollTrigger.refresh();
              }
          }, 50);
          return () => clearTimeout(t);
      }
  }, [isMinTimeElapsed]);

  if (isMinTimeElapsed) return children;
  return fallback;
};

export default MinimumLoadingWrapper;
