# useEfeito-simples_scrollTigger-gsap - README

## Descrição

O `useEfeitoGsap` é um hook personalizado do React que simplifica a criação de animações baseadas em scroll usando a biblioteca GSAP (GreenSock Animation Platform) e seu plugin ScrollTrigger. Ele permite animar elementos de forma fluida enquanto o usuário rola a página, com suporte a efeitos como fade-in, movimento horizontal e pinning. O hook é projetado para ser reutilizável, performático e fácil de integrar em componentes React, isolando animações para limpeza automática ao desmontar componentes.

Este hook é ideal para criar experiências interativas em sites, como animações de entrada de seções, efeitos parallax ou transições suaves durante a rolagem.

---

## Dependências

-   **React**: Para hooks e gerenciamento de ciclo de vida.
-   **GSAP**: Biblioteca de animação (instale via `npm install gsap`).
-   **ScrollTrigger**: Plugin do GSAP para animações baseadas em scroll (incluído em GSAP 3+).

Certifique-se de registrar o ScrollTrigger globalmente no seu projeto, se ainda não estiver:

```javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

---

## Como Usar

### Importação

```jsx
import useEfeitoGsap from "./hooks/Efeitos/useEfeito-simples_scrollTigger";
```

### Chamada no Componente

1. **Crie uma ref para o elemento**:

    ```jsx
    import { useRef } from "react";

    const MyComponent = () => {
        const elementRef = useRef(null);
        // ...
    };
    ```

2. **Chame o hook**:

    ```jsx
    useEfeitoGsap(elementRef, {
        // Configurações opcionais
    });
    ```

3. **Aplique a ref no elemento JSX**:
    ```jsx
    return <div ref={elementRef}>Conteúdo a ser animado</div>;
    ```

---

## Parâmetros

O hook aceita dois parâmetros:

### 1. `refElement` (Obrigatório)

-   **Tipo**: `React.MutableRefObject` (ref criada com `useRef`).
-   **Descrição**: Referência ao elemento DOM que será animado. Deve ser passada como `ref` no JSX.

### 2. `config` (Opcional)

-   **Tipo**: `Object` com configurações da animação.
-   **Descrição**: Objeto com opções para personalizar a animação e o ScrollTrigger. Todas as propriedades são opcionais e têm valores padrão.

#### Propriedades de `config`:

-   **`autoAlphaInitial`** (number, padrão: 0): Opacidade inicial do elemento (0 = invisível, 1 = visível). Usa `autoAlpha` do GSAP para melhor performance.
-   **`xInitial`** (number, padrão: 0): Posição inicial no eixo X (em pixels). Valores positivos movem para a direita, negativos para a esquerda.
-   **`duration`** (number, padrão: 1.5): Duração da animação em segundos.
-   **`start`** (string, padrão: "top 100%"): Ponto de início do ScrollTrigger (ex.: "top 80%" significa quando o topo do elemento atinge 80% da viewport).
-   **`end`** (string, padrão: "top 0.7%"): Ponto de término do ScrollTrigger.
-   **`scrub`** (number, padrão: 0): Intensidade do link entre animação e rolagem (0 = sem scrub, valores maiores = mais suave). Use 1-2 para efeitos fluidos.
-   **`pin`** (boolean, padrão: false): Se `true`, "prende" o elemento no lugar durante a animação.

---

## Exemplos Visuais e Gráficos

Para ilustrar como as animações funcionam, abaixo estão diagramas ASCII e descrições visuais de efeitos comuns. Imagine a viewport (tela) rolando verticalmente, e o elemento animado dentro dela.

### Exemplo 1: Fade-in com Slide da Direita (Configuração Básica)

**Configuração**:

```jsx
useEfeitoGsap(elementRef, {
    autoAlphaInitial: 0,
    xInitial: 120,
    duration: 1.5,
    start: "top 90%",
    end: "top 10%",
    scrub: 1,
});
```

**Diagrama Visual**:

```
Viewport (Tela)
+-----------------------------+
|                             |  <- Topo da viewport
|          [Elemento]         |  <- Elemento entra em 90% da tela
|    (invisível, deslocado)   |
|                             |
|          [Elemento]         |  <- Animação: fade-in + slide para esquerda
|      (visível, posição 0)   |
|                             |
+-----------------------------+  <- Fundo da viewport

Rolagem: ↑ (para cima) → Elemento some; ↓ (para baixo) → Elemento aparece.
```

**Descrição**: O elemento começa invisível e deslocado 120px à direita. Ao rolar para baixo, ele fade-in e desliza suavemente para a posição original, sincronizado com a rolagem.

### Exemplo 2: Pinning com Movimento Horizontal

**Configuração**:

```jsx
useEfeitoGsap(elementRef, {
    autoAlphaInitial: 1,
    xInitial: -50,
    duration: 2,
    start: "top center",
    end: "bottom center",
    scrub: 2,
    pin: true,
});
```

**Diagrama Visual**:

```
Viewport (Tela)
+-----------------------------+
|          [Elemento]         |  <- Elemento "preso" no centro
|    (pinned, movendo X)      |  <- Move da esquerda (-50px) para direita (0px)
|                             |
|          [Elemento]         |  <- Continua preso até "bottom center"
|      (posição final)        |
+-----------------------------+

Rolagem: Elemento fica fixo no centro da tela enquanto rola, movendo horizontalmente.
```

**Descrição**: O elemento é "preso" (pinned) no centro da viewport durante a rolagem, movendo-se da esquerda para a direita. Ideal para seções destacadas.

### Exemplo 3: Animação Rápida sem Scrub

**Configuração**:

```jsx
useEfeitoGsap(elementRef, {
    autoAlphaInitial: 0,
    xInitial: 0,
    duration: 0.5,
    start: "top 80%",
    end: "top 20%",
    scrub: 0, // Sem scrub: animação instantânea
});
```

**Diagrama Visual**:

```
Viewport (Tela)
+-----------------------------+
|                             |
|          [Elemento]         |  <- Entra em 80%: animação rápida
|    (fade-in instantâneo)    |
|                             |
|          [Elemento]         |  <- Permanece visível
|      (sem scrub)            |
+-----------------------------+

Rolagem: Animação dispara uma vez, sem sincronia contínua com a rolagem.
```

**Descrição**: Animação de fade-in rápida e única ao atingir 80% da viewport, sem ligação com a rolagem contínua.

### Comparação de Configurações

| Configuração          | Efeito Visual                            | Quando Usar                              |
| --------------------- | ---------------------------------------- | ---------------------------------------- |
| `scrub: 0`            | Animação instantânea ao atingir `start`. | Para entradas rápidas, como pop-ups.     |
| `scrub: 1-2`          | Animação suave sincronizada com rolagem. | Para transições fluidas em storytelling. |
| `pin: true`           | Elemento fixo na tela durante rolagem.   | Para destacar seções importantes.        |
| `xInitial: 120`       | Slide da direita para esquerda.          | Para entradas laterais dinâmicas.        |
| `autoAlphaInitial: 0` | Fade-in do invisível.                    | Para revelações suaves.                  |

---

## Exemplo de Uso Completo

```jsx
import { useRef } from "react";
import useEfeitoGsap from "./hooks/Efeitos/useEfeito-simples_scrollTigger";

const MyComponent = () => {
    const elementRef = useRef(null);

    // Animação: elemento começa invisível e deslocado 120px à direita, fade-in e slide para esquerda
    useEfeitoGsap(elementRef, {
        autoAlphaInitial: 0,
        xInitial: 120,
        duration: 2,
        start: "top 90%",
        end: "top 10%",
        scrub: 1,
        pin: false,
    });

    return (
        <div ref={elementRef} className="my-element">
            <h1>Conteúdo Animado</h1>
            <p>Este elemento será animado ao rolar.</p>
        </div>
    );
};

export default MyComponent;
```

### Exemplo Avançado com Pinning

```jsx
useEfeitoGsap(elementRef, {
    autoAlphaInitial: 1,
    xInitial: -50,
    duration: 1,
    start: "top center",
    end: "bottom center",
    scrub: 2,
    pin: true, // Prende o elemento durante a rolagem
});
```

---

## Como Funciona Internamente

1. **Registro do Plugin**: O hook registra o ScrollTrigger automaticamente.
2. **Contexto GSAP**: Usa `gsap.context()` para isolar animações, permitindo limpeza automática.
3. **Animação**: Aplica `gsap.fromTo()` com ScrollTrigger para sincronizar com a rolagem.
4. **Limpeza**: Reverte todas as animações ao desmontar o componente, evitando vazamentos de memória.

O hook monitora mudanças nas dependências (`refElement` e `config`) e recria a animação conforme necessário.

---

## Benefícios

-   **Reutilizável**: Aplique em qualquer componente com uma ref.
-   **Performático**: Usa `autoAlpha` e contexto GSAP para otimização.
-   **Flexível**: Configurações extensíveis para diversos efeitos.
-   **Limpeza Automática**: Não requer intervenção manual para remover animações.
-   **Integração Simples**: Apenas importe e chame no componente.

---

## Notas Técnicas

-   **Compatibilidade**: Funciona em navegadores modernos que suportam GSAP e ScrollTrigger.
-   **Performance**: Evite animações excessivas em elementos grandes; use `scrub` com moderação.
-   **Debugging**: Descomente `//markers: true` no código do hook para visualizar marcadores do ScrollTrigger.
-   **Limitações**: Anima apenas propriedades suportadas pelo GSAP (x, autoAlpha, etc.). Para efeitos complexos, combine com outros hooks GSAP.
-   **Responsividade**: Teste em diferentes dispositivos; ajuste `start` e `end` para telas móveis.

Para mais detalhes, consulte o código fonte em `src/hooks/Efeitos/useEfeito-simples_scrollTigger.jsx` e a documentação do GSAP/ScrollTrigger.
