// src/components/SubscribeModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/**
 * Props:
 *  - isOpen: boolean
 *  - onClose: () => void
 *  - children: ReactNode (conteúdo do modal)
 *  - height: string (ex: "30vh" ou "30%")
 *  - ariaLabel: string
 */
export default function SubscribeModal({
    isOpen,
    onClose,
    children,
    className = "h-[60vh]",
    ariaLabel = "Assinar",
}) {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const lastActiveRef = useRef(null);
    const panelRef = useRef(null);

    useEffect(() => {
        let raf1 = null;
        let raf2 = null;
        let timeoutId = null;

        if (isOpen) {
            lastActiveRef.current = document.activeElement;

            // NÃO chamar setMounted síncrono aqui — adiamos para o próximo frame
            raf1 = requestAnimationFrame(() => {
                setMounted(true);
                // depois que montou, no próximo frame ativamos a visibilidade para animar
                raf2 = requestAnimationFrame(() => setVisible(true));
            });

            // lock scroll
            document.body.style.overflow = "hidden";
        } else if (mounted) {
            // iniciar animação de saída
            setVisible(false);

            // esperar a duração da transição antes de desmontar
            timeoutId = setTimeout(() => {
                setMounted(false);
                document.body.style.overflow = "";
                if (lastActiveRef.current && lastActiveRef.current.focus) {
                    lastActiveRef.current.focus();
                }
            }, 300); // tem que bater com a duration da transição
        }

        return () => {
            if (raf1) cancelAnimationFrame(raf1);
            if (raf2) cancelAnimationFrame(raf2);
            if (timeoutId) clearTimeout(timeoutId);
            // garante que scroll seja restaurado em qualquer cleanup
            document.body.style.overflow = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, mounted]);

    // fechar com ESC
    useEffect(() => {
        if (!mounted) return;
        const onKey = (e) => {
            if (e.key === "Escape") onClose?.();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [mounted, onClose]);

    // foco no primeiro elemento focável
    useEffect(() => {
        if (visible && panelRef.current) {
            const focusable = panelRef.current.querySelector(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusable && focusable.focus) focusable.focus();
        }
    }, [visible]);

    if (!mounted) return null;

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-40  transition-opacity duration-300 ${
                    visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
                aria-hidden={!visible}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Painel do modal (slide up) */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel}
                className={`fixed left-0 bottom-0 z-50 w-full  transform transition-transform duration-300 ease-out ${
                    visible ? "translate-y-0" : "translate-y-full"
                } ${className}`}
            >
                <div
                    ref={panelRef}
                    className="flex flex-col md:grid md:grid-cols-2 mx-auto max-w-full h-full md:px-10 xl:px-50 md:py-16 py-4 bg-black rounded-t-2xl shadow-xl relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Conteúdo do modal */}
                    <div className="p-6 h-full flex flex-col justify-around md:justify-between">
                        {children}
                    </div>

                    <div className="hidden lg:p-6 w-full md:flex justify-end">
                        {/* Botão fechar redondo */}
                        <button
                            onClick={onClose}
                            className=" w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shadow-sm focus:outline-none"
                            aria-label="Fechar modal"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
}
