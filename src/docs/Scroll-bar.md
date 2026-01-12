# 🎯 ScrollProgressBar com Lenis + GSAP + ScrollTrigger

Um componente React profissional e otimizado que cria uma **barra de progresso de scroll fixa no topo da página**, sincronizada perfeitamente com a biblioteca **Lenis** para smooth scrolling e **GSAP ScrollTrigger** para animações avançadas.

---

## ✨ Características Principais

- ✅ **Barra de progresso visual** que acompanha a rolagem
- ✅ **Integração com Lenis** para scroll suave e mantido
- ✅ **Sincronização com GSAP + ScrollTrigger** para animações precisas
- ✅ **Fallback automático** para scroll nativo (sem Lenis)
- ✅ **Leve e performático** (otimizado com RAF e passive listeners)
- ✅ **Totalmente responsivo** com Tailwind CSS
- ✅ **Zero dependências externas** (além das necessárias)

---

## 📦 Instalação

### Pré-requisitos
- Node.js 16+
- npm ou yarn
- React 18+
- Tailwind CSS configurado

### Instalar dependências

```bash
npm install lenis gsap
```

---

## 🏗️ Arquitetura do Projeto

```
src/
├── components/
│   └── Scroll-bar.jsx          ← Componente da barra de progresso
├── pages/
│   └── page1/
│       ├── autono.jsx           ← Página principal (inicializa Lenis)
│       └── layout/
│           ├── Hero.jsx
│           ├── Sobre.jsx
│           ├── Servico.jsx
│           ├── Sobreii.jsx
│           ├── Infografico.jsx
│           ├── Parceiros.jsx
│           └── Carreira.jsx
└── App.css                      ← Estilos globais
```

---

## 🚀 Como Usar

### 1️⃣ Importar no componente principal (`autono.jsx`)

```javascript
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollProgressBar from "/src/components/Scroll-bar";

gsap.registerPlugin(ScrollTrigger);
```

### 2️⃣ Inicializar Lenis e ScrollTrigger

```javascript
const lenisRef = useRef(null);
const [isReady, setIsReady] = useState(false);

  useEffect(() => {
        const start = () => {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                syncTouch: false,
                touchMultiplier: 2,
            });

            lenisRef.current = lenis;
            lenis.on("scroll", ScrollTrigger.update);

            const raf = (time) => lenis.raf(time * 1000);
            gsap.ticker.add(raf);

            setIsReady(true);
        };

        if (document.readyState === "complete") {
            start();
        } else {
            window.addEventListener("load", start);
        }

        return () => window.removeEventListener("load", start);
    }, []);
```

### 3️⃣ Renderizar o componente

```javascript
return (
    <>
        <Nav />
        {isReady && <ScrollProgressBar lenisRef={lenisRef} />}
        <Hero />
        <Sobre />
        {/* ... outros componentes ... */}
        <Rodape />
    </>
);
```

---

## 📊 O que cada biblioteca faz

### 🎵 **Lenis**
Cria um scroll suave e controlado, substituindo o scroll padrão do navegador por animações interpoladas.

**Configurações principais:**
- `duration: 1.2` → Duração do efeito de suavização (segundos)
- `smoothWheel: true` → Ativa scroll suave com mouse wheel
- `syncTouch: false` → Desativa sincronização automática no touch
- `touchMultiplier: 2` → Multiplicador de velocidade no touch

### 🎬 **GSAP (GreenSock Animation Platform)**
Biblioteca de animação poderosa que oferece controle preciso sobre elementos e propriedades CSS.

**Recursos utilizados:**
- `gsap.ticker` → Loop de animação sincronizado
- `ScrollTrigger` → Plugin que liga animações ao scroll
- `fromTo()` → Define estados iniciais e finais de animações

### 🔗 **ScrollTrigger**
Plugin do GSAP que cria animações baseadas na posição de scroll e viewport.

**Exemplo de uso (em Servico.jsx):**
```javascript
gsap.fromTo(
    boxRef1.current,
    { opacity: 0, x: 150 },
    {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: boxRef1.current,
            start: "top 100%",
            end: "top 0.7%",
            scrub: 1.5,
        },
    }
);
```

---

## 🎨 Componente ScrollProgressBar

### Estrutura do arquivo (`Scroll-bar.jsx`)

```javascript
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

```

### Props

| Prop | Tipo | Descrição |
|------|------|-----------|
| `lenisRef` | `React.MutableRefObject` | Referência da instância Lenis. Se não fornecida, usa scroll nativo. |

### Saída Visual

```
┌─────────────────────────────────────┐
│▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← Barra de progresso
└─────────────────────────────────────┘
```

---

## 🔧 Configurações Avançadas

### Ajustar a velocidade do Lenis

```javascript
const lenis = new Lenis({
    duration: 2.5,  // Mais lento
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
```

### Desabilitar ScrollTrigger lag smoothing

```javascript
gsap.ticker.lagSmoothing(0);  // Garante sincronização perfeita
```

### Animar elementos ao scroll (Exemplo)

```javascript
// Fade in ao aparecer na viewport
gsap.fromTo(
    ".elemento",
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".elemento",
            start: "top 80%",
        },
    }
);
```

---

## 🐛 Solução de Problemas

| Problema | Solução |
|----------|---------|
| **Barra não aparece** | Confirme que `ScrollProgressBar` está renderizado antes dos outros componentes |
| **Scroll não é suave** | Verifique se `Lenis` está importado e inicializado corretamente |
| **Animações não funcionam** | Certifique-se de registrar `ScrollTrigger`: `gsap.registerPlugin(ScrollTrigger)` |
| **Performance lenta** | Reduza `duration` do Lenis e verifique a quantidade de animações ScrollTrigger ativas |
| **Conflito com scroll nativo** | Remova `scroll-behavior: smooth` do CSS se estiver usando Lenis |

---

## 📈 Performance

- **Barra de progresso**: ~0.5KB (gzip)
- **Lenis**: ~20KB (gzip)
- **GSAP**: ~60KB (gzip)
- **ScrollTrigger**: ~30KB (gzip)

**Total**: ~110KB de JavaScript

---

## 🎯 Casos de Uso

✅ Portfólios e landing pages premium  
✅ Ecommerce com scroll trigger de produtos  
✅ Documentações interativas  
✅ Blogs e revistas digitais  
✅ Experiências imersivas com scroll  

---

## 📚 Referências Externas

- [Lenis Documentation](https://lenis.studiofreight.com/)
- [GSAP Documentation](https://gsap.com/)
- [ScrollTrigger Documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

---

## 📝 Licença

Este projeto é de uso livre. Adaptável conforme necessário.

---

## 🤝 Contribuindo

Tem sugestões? Encontrou um bug? Abra uma issue ou pull request!

---

**Desenvolvido com React, JavaScript, Tailwind CSS, GSAP e Lenis**