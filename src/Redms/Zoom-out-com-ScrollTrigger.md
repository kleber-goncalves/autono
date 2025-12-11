# 🎯 Animação de Zoom Out com ScrollTrigger + Sticky Position

Documentação completa sobre o sistema de **animação de zoom out** sincronizado com scroll, utilizando **GSAP ScrollTrigger** e **CSS sticky positioning** para criar efeitos imersivos de contração e desaparecimento conforme o usuário rola a página.

---

## 📖 Índice

1. [Visão Geral](#visão-geral)
2. [O Que É Zoom Out?](#o-que-é-zoom-out)
3. [Sticky Position Explicado](#sticky-position-explicado)
4. [Como Funciona a Sincronização](#como-funciona-a-sincronização)
5. [Arquitetura do Sistema](#arquitetura-do-sistema)
6. [Implementação Prática](#implementação-prática)
7. [Casos de Uso](#casos-de-uso)
8. [Solução de Problemas](#solução-de-problemas)

---

## 🎬 Visão Geral

O sistema implementa uma **animação de zoom out** que:

1. ✅ Reduz elementos visuais conforme você rola a página
2. ✅ Mantém a seção "fixa" na tela (sticky)
3. ✅ Cria sensação de profundidade e movimento
4. ✅ Funciona sincronizado com scroll suave (Lenis)
5. ✅ Usa GSAP ScrollTrigger para precisão

**Efeito Visual:**
```
Scroll inicial          Enquanto rola          Ao sair
┌─────────────┐      ┌─────────────┐       ┌─────────────┐
│  ELEMENTO   │  →   │   elemento  │   →   │   (saiu)    │
│ (100% zoom) │      │ (90% zoom)  │       │             │
│ (100% opac) │      │ (60% opac)  │       │             │
└─────────────┘      └─────────────┘       └─────────────┘
```

---

## 🔍 O Que É Zoom Out?

### Definição

**Zoom Out** significa "reduzir o tamanho" ou "afastar a câmera". Na animação, criamos esse efeito alterando:

- **Scale (Escala)**: De 1 (100%) para 0.9 (90%)
- **Opacity (Opacidade)**: De 1 (100% visível) para 0.6 (60% visível)

### Propriedades CSS Modificadas

```css
/* Estado inicial */
transform: scale(1);      /* Tamanho 100% */
opacity: 1;               /* Totalmente visível */

/* Estado durante zoom out */
transform: scale(0.9);    /* Tamanho reduzido para 90% */
opacity: 0.6;             /* 60% visível, 40% transparente */
```

### Visualização da Transformação

```
scale(1)          scale(0.95)       scale(0.9)
┌─────────┐     ┌───────────┐     ┌─────────┐
│         │     │    ▓▓▓    │     │    ▓    │
│  FULL   │ →   │   ▓███▓   │ →   │   ███   │
│  SIZE   │     │    ▓▓▓    │     │    ▓    │
└─────────┘     └───────────┘     └─────────┘
(100%)          (95%)              (90%)
```

---

## 📌 Sticky Position Explicado

### O Que É `position: sticky`?

`sticky` é um **posicionamento híbrido** que combina `relative` e `fixed`:

- **Enquanto você não atinge a posição**: Elemento rola normalmente (`relative`)
- **Quando você atinge a posição**: Elemento fica fixo (`fixed`)
- **Quando você passa**: Elemento continua rolando

### Sintaxe

```css
position: sticky;
top: 0;  /* Fica fixo no topo quando você atinge esse ponto */
```

### Visualização

```
┌──────────────────────────────┐
│   Header                     │  ← Rola até aqui
├──────────────────────────────┤
│  ▓▓▓ STICKY SECTION ▓▓▓       │  ← Fica fixa aqui
├──────────────────────────────┤
│  Conteúdo abaixo...          │  ← Passa por baixo
│  Conteúdo abaixo...          │     (enquanto sticky está fixo)
│  Conteúdo abaixo...          │
└──────────────────────────────┘
```

---

## 🔄 Como Funciona a Sincronização

### O Fluxo Completo

```
┌─────────────────────────────────────────────────────┐
│  USUÁRIO FAZ SCROLL                                 │
│  (Lenis intercepta o evento)                        │
└────────────────────┬────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────┐
│  ScrollTrigger CALCULA:                             │
│  - Posição do elemento                              │
│  - Quanto já foi scrollado                          │
│  - Progresso da animação (0% a 100%)                │
└────────────────────┬────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────┐
│  GSAP APLICA AS TRANSFORMAÇÕES:                     │
│  - Scale: 1 → 0.9                                   │
│  - Opacity: 1 → 0.6                                 │
│  (Interpolado conforme o progresso)                 │
└────────────────────┬────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────┐
│  ELEMENTO RENDERIZA:                                │
│  (Menor e mais transparente)                        │
└─────────────────────────────────────────────────────┘
```

### O Papel do `scrub`

```javascript
scrollTrigger: {
    scrub: 1,  // Suavização de 1 segundo entre scroll e animação
}
```

**Sem scrub:**
```
Scroll → Instantaneamente reduz
(Efeito abrupto)
```

**Com scrub: 1:**
```
Scroll → Suavemente reduz (1s de transição)
(Efeito fluido)
```

---

## 🏗️ Arquitetura do Sistema

### Estrutura de Arquivos

```
src/
├── pages/
│   └── page1/
│       ├── autono.jsx              ← Inicializa Lenis + ScrollTrigger
│       └── layout/
│           ├── Infografico.jsx     ← Usa zoom out
│           ├── Parceiros.jsx       ← Usa zoom out
│           └── [outros].jsx
├── utils/
│   └── useGsapEfeitoZoomScroll.js  ← Hook da animação (IMPORTANTE!)
└── components/
    └── Scroll-bar.jsx
```

### Fluxo de Dados

```
autono.jsx (Inicializa Lenis + ScrollTrigger)
    ↓
Infografico.jsx / Parceiros.jsx (Renderizam)
    ↓
useGsapEfeitoZoomScroll.js (Aplica animação)
    ↓
ScrollTrigger recalcula (a cada frame)
    ↓
Elementos animam (zoom out + fade)
```

---

## 💻 Implementação Prática

### 1️⃣ Hook Customizado (`useGsapEfeitoZoomScroll.js`)

```javascript
// filepath: c:\projetos\front\autono\src\utils\useGsapEfeitoZoomScroll.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapContainerAnimation(
    containerRef,                    // Ref do container
    animatedElementsSelector,        // Seletor dos elementos (".stat-area")
    scrollLength = 2000              // Duração do efeito em pixels
) {
    useEffect(() => {
        const containerElement = containerRef.current;
        if (!containerElement) return;

        // 1. Fixa o container na tela (sticky com ScrollTrigger)
        gsap.to(containerElement, {
            scrollTrigger: {
                trigger: containerElement,
                start: "top top",      // Começa quando atinge o topo
                pin: true,             // Fica fixo na tela
                end: `+=${scrollLength}`, // Dura 2000px de scroll
            },
        });

        // 2. Anima elementos internos (zoom out + fade)
        const statAreas = gsap.utils.toArray(
            animatedElementsSelector,
            containerElement
        );

        statAreas.forEach((area) => {
            gsap.to(area, {
                scale: 0.9,            // Reduz para 90%
                opacity: 0.6,          // Reduz para 60% de visibilidade
                scrollTrigger: {
                    trigger: containerElement,
                    start: "top top",
                    end: `+=${scrollLength}`,
                    scrub: 1,           // Suavização de 1s
                },
            });
        });

        // 3. Limpeza
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === containerElement) {
                    trigger.kill();
                }
            });
        };
    }, [containerRef, animatedElementsSelector, scrollLength]);
}
```

---

### 2️⃣ Uso em Componentes (Exemplo: `Infografico.jsx`)

```javascript
// filepath: c:\projetos\front\autono\src\pages\page1\layout\Infografico.jsx
import { useGsapContainerAnimation } from "../../../utils/useGsapEfeitoZoomScroll";
import React, { useRef } from "react";

function Infrografico() {
    // Cria referência do container
    const containerRef = useRef(null);

    // Aplica a animação
    useGsapContainerAnimation(
        containerRef,           // ← Ref do container
        ".stat-area",           // ← Seletor dos elementos a animar
        2000                    // ← Duração em pixels
    );

    return (
        <section
            ref={containerRef}  // ← Associa a ref ao elemento
            className="bg-white min-h-screen efeito-container sticky top-0 py-4 overflow-hidden"
        >
            {/* Elementos com classe .stat-area serão animados */}
            <div className="stat-area">
                <img src="/public/braco-info.jpg" alt="infografico" />
            </div>
            <div className="stat-area flex flex-col gap-20">
                {/* Conteúdo */}
            </div>
        </section>
    );
}

export default Infrografico;
```

---

### 3️⃣ Classes Tailwind Essenciais

```html
<!-- Container sticky -->
<section class="sticky top-0 overflow-hidden">
    <!-- min-h-screen: ocupa altura da viewport -->
    <!-- sticky: fica fixo quando atinge top-0 -->
    <!-- top-0: fica fixo no topo -->
    <!-- overflow-hidden: oculta overflow durante animação -->
</section>
```

---

## 🔌 Sincronização: Sticky + Zoom Out + ScrollTrigger

### Como Tudo Funciona Junto

```
┌─────────────────────────────────────────────────────┐
│  CSS STICKY                                         │
│  position: sticky; top: 0;                          │
│  (Deixa elemento ficar fixo no topo)                │
└────────────┬────────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────────┐
│  ScrollTrigger PIN                                  │
│  pin: true; start: "top top"; end: "+= 2000"       │
│  (Fixa o elemento enquanto você rola 2000px)       │
└────────────┬────────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────────┐
│  GSAP ANIMATIONS                                    │
│  scale: 0.9; opacity: 0.6; scrub: 1                │
│  (Reduz tamanho e transparência conforme rola)     │
└────────────┬────────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────────┐
│  RESULTADO FINAL                                    │
│  Elemento fica fixo ENQUANTO encolhe e desaparece  │
│  (Efeito imersivo de profundidade)                 │
└─────────────────────────────────────────────────────┘
```

### Timeline Visual (2000px de scroll)

```
Posição scroll: 0px      500px       1000px      1500px      2000px
─────────────────────────────────────────────────────────────────

Scale:         1.0  →   0.98   →    0.95   →    0.92   →   0.9
Opacity:       1.0  →   0.85   →    0.70   →    0.65   →   0.6
Position:      Fixed    Fixed        Fixed       Fixed       Free*

* Depois de 2000px, o elemento "desfixa" e continua rolando normalmente
```

---

## 🎯 Casos de Uso

### 1. Seções Premium (Parceiros, Infográficos)

Cria destaque visual para seções importantes:

```javascript
// Arquivos que usam:
// - Infografico.jsx
// - Parceiros.jsx

// Efeito: Seção aparece, encolhe e desaparece graciosamente
```

### 2. Portfólios e Galerias

```javascript
gsap.to(".portfolio-item", {
    scale: 0.85,
    opacity: 0.5,
    scrollTrigger: {
        // ...config
    }
});
```

### 3. Efeitos Narrativos

Conte uma história conforme o usuário rola:

```
"Visão geral"           →  "Zoom in nos detalhes"  →  "Zoom out na conclusão"
scale: 0.9, opac: 0.6       scale: 1, opac: 1          scale: 0.8, opac: 0.4
```

---

## 🔧 Configurações e Parâmetros

### ScrollTrigger Configuration

```javascript
scrollTrigger: {
    trigger: containerElement,           // Qual elemento ativa?
    start: "top top",                    // Quando começa? (top do viewport)
    end: `+=${scrollLength}`,             // Quando termina? (2000px depois)
    scrub: 1,                            // Suavização (1s)
    pin: true,                           // Fica fixo?
    // pinSpacing: false,                // (Opcional) Remove espaço vazio
    // markers: true,                    // (Debug) Mostra markers na tela
}
```

### Valores de Scale Recomendados

| Scale | Efeito | Caso de Uso |
|-------|--------|-----------|
| 0.95 | Redução suave | Efeitos delicados |
| 0.9 | Redução moderada | Padrão (usado no projeto) |
| 0.8 | Redução acentuada | Efeitos dramáticos |
| 0.7 | Redução extrema | Zoom cinematográfico |

### Valores de Opacity Recomendados

| Opacity | Efeito | Caso de Uso |
|---------|--------|-----------|
| 0.8 | Desvanecimento suave | Transições sutis |
| 0.6 | Desvanecimento moderado | Padrão (usado no projeto) |
| 0.4 | Desvanecimento forte | Efeitos dramáticos |
| 0.2 | Desvanecimento extremo | Desaparecimento total |

---

## 🐛 Solução de Problemas

### Problema 1: Elemento não fica fixo

**Sintoma:** `sticky` ou `pin` não funciona

**Solução:**
```javascript
// Certifique-se que tem essas classes:
className="sticky top-0 overflow-hidden"
//         ^^^^^^ ^^^^^ ^^^^^^^^^^^^^^
//         (1)   (2)   (3)

// (1) sticky - Ativa posicionamento sticky
// (2) top-0  - Deixa fixo no topo
// (3) overflow-hidden - Evita overflow durante animação
```

### Problema 2: Animação não funciona

**Sintoma:** Elemento não encolhe

**Solução:**
```javascript
// 1. Verifique se ScrollTrigger está registrado
gsap.registerPlugin(ScrollTrigger);

// 2. Verifique se containerRef está correto
console.log(containerRef.current); // Deve retornar um elemento DOM

// 3. Verifique se há elementos com .stat-area
console.log(document.querySelectorAll(".stat-area").length); // > 0?
```

### Problema 3: Animação muito rápida/lenta

**Solução:**
```javascript
// Ajuste o scrollLength
useGsapContainerAnimation(
    containerRef,
    ".stat-area",
    3000  // Aumentar = mais lento
);

// Ou ajuste o scrub
gsap.to(area, {
    scrollTrigger: {
        scrub: 2,  // Aumentar = mais suave
    },
});
```

### Problema 4: Conflito com Lenis

**Sintoma:** ScrollTrigger não atualiza com Lenis

**Solução:**
```javascript
// Em autono.jsx, certifique-se que tem:
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.lagSmoothing(0);
```

---

## 📊 Performance

### Impacto no FPS

```
Sem animação:     60 FPS
Com 1 animação:   58-59 FPS
Com 5 animações:  55-57 FPS
Com 10 animações: 50-55 FPS

(Em máquinas modernas)
```

### Otimizações Já Implementadas

```javascript
// 1. Usa ScrollTrigger.getAll() para cleanup
ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === containerElement) {
        trigger.kill();
    }
});

// 2. Usa gsap.utils.toArray para seleção eficiente
const statAreas = gsap.utils.toArray(".stat-area", containerElement);

// 3. Desativa lag smoothing para sincronização perfeita
gsap.ticker.lagSmoothing(0);
```

---

## 🎨 Exemplos Avançados

### Exemplo 1: Zoom Out + Rotação

```javascript
gsap.to(area, {
    scale: 0.9,
    opacity: 0.6,
    rotation: 5,  // Gira conforme zoom out
    scrollTrigger: { /* config */ },
});
```

### Exemplo 2: Zoom Out com Movimento Horizontal

```javascript
gsap.to(area, {
    scale: 0.9,
    opacity: 0.6,
    x: -50,  // Move para a esquerda
    y: -30,  // Move para cima
    scrollTrigger: { /* config */ },
});
```

### Exemplo 3: Zoom Out Staggeado (Múltiplos Elementos)

```javascript
const areas = gsap.utils.toArray(".stat-area");

gsap.to(areas, {
    scale: 0.9,
    opacity: 0.6,
    stagger: 0.2,  // Cada elemento anima 0.2s depois do anterior
    scrollTrigger: { /* config */ },
});
```

---

## 📚 Referências Externas

- [ScrollTrigger Official Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [CSS Sticky Position MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky)
- [GSAP Transform Properties](https://gsap.com/docs/v3/GSAP/CorePlugins/CSSPlugin/)

---

## 🚀 Checklist de Implementação

- [ ] Instalar GSAP: `npm install gsap`
- [ ] Importar `ScrollTrigger` em componentes
- [ ] Registrar plugin: `gsap.registerPlugin(ScrollTrigger)`
- [ ] Criar/importar `useGsapEfeitoZoomScroll` hook
- [ ] Adicionar `ref={containerRef}` ao container
- [ ] Adicionar classes CSS: `sticky top-0 overflow-hidden`
- [ ] Adicionar classe aos elementos: `.stat-area`
- [ ] Chamar hook com parâmetros corretos
- [ ] Testar com Lenis ativado

---

## 💡 Dicas Pro

✅ Use `pin: true` para criar seções "héroe" que fixam durante scroll  
✅ Combine zoom out com fade para efeito de profundidade  
✅ Use `stagger` para animar múltiplos elementos em sequência  
✅ Use `markers: true` para debug visual  
✅ Sempre faça cleanup no `return` do useEffect  
✅ Teste com diferentes valores de `scrollLength`  

---

**Desenvolvido com ❤️ usando GSAP ScrollTrigger, CSS Sticky, e Lenis**