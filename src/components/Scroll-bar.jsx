// Scroll-bar.jsx
import React, { useEffect, useState } from "react";

function ScrollProgressBar({ lenisRef = null }) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const calcAndSet = (scrollTop) => {
            const pageHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress =
                pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

            setScrollProgress(Math.min(100, Math.max(0, progress)));
        };

        // handler nativo para fallback
        const onNativeScroll = () =>
            calcAndSet(window.scrollY || window.pageYOffset || 0);

        let lenisHandler = null;
        const lenisInstance = lenisRef && (lenisRef.current || lenisRef);

        if (lenisInstance && typeof lenisInstance.on === "function") {
            lenisHandler = (e) => {
                const scrollTop =
                    e?.scroll ?? e?.scrollY ?? window.scrollY ?? 0;

                calcAndSet(scrollTop);
            };

            try {
                lenisInstance.on("scroll", lenisHandler);
            } catch {
                // ignore
            }
        }

        // 🔥 LOOP INTELIGENTE — SEM AVISOS
        let lastScroll = -1;

        const loop = () => {
            const lenis = lenisRef && (lenisRef.current || lenisRef);

            const current =
                lenis?.scroll ?? window.scrollY ?? window.pageYOffset ?? 0;

            if (current !== lastScroll) {
                lastScroll = current;
                calcAndSet(current);
            }

            requestAnimationFrame(loop);
        };

        requestAnimationFrame(loop);

        return () => {
            const lenis = lenisRef && (lenisRef.current || lenisRef);

            if (lenis && lenis.off && lenisHandler) {
                try {
                    lenis.off("scroll", lenisHandler);
                } catch {
                    // ignore
                }
            } else {
                window.removeEventListener("scroll", onNativeScroll);
            }
        };
    }, [lenisRef]);

    return (
        <div
            aria-hidden="true"
            className="fixed top-0 left-0 w-full h-2 bg-gray-200 pointer-events-none z-[9999]"
        >
            <div
                className="h-full rounded-sm shadow-sm transition-all duration-150 ease-linear pointer-events-none"
                style={{
                    transform: "translateZ(0)",
                    width: `${scrollProgress}%`,
                    background: "linear-gradient(90deg, #ffffff, #000000)",
                }}
            />
        </div>
    );
}

export default ScrollProgressBar;
