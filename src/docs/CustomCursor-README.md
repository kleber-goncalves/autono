# CustomCursor - README

## Descrição

O `CustomCursor` é um componente React que substitui o cursor nativo do navegador por um cursor personalizado animado, composto por dois elementos: um ponto interno instantâneo (snap) e um anel externo suavizado. Ele utiliza técnicas de suavização (lerp) para criar um efeito de "atraso" no anel externo, proporcionando uma experiência visual moderna e interativa. O componente detecta automaticamente elementos clicáveis para ocultar o cursor customizado e restaurar o nativo, além de gerenciar estados como saída da janela e perda de foco.

Este componente é ideal para sites criativos, portfólios ou aplicações que desejam um toque personalizado e profissional, melhorando a imersão do usuário sem comprometer a usabilidade.

---

## Dependências

-   **React**: Para renderização e gerenciamento de estado.
-   **CSS Customizado**: Arquivo `customCursor.css` localizado em `src/style/customCursor.css`, que define estilos e esconde o cursor nativo.
-   **Navegadores Modernos**: Suporte a `mix-blend-mode`, `transform3d` e `requestAnimationFrame` para animações suaves.

---

## Como Funciona

### Arquitetura Geral

O componente cria dois elementos DOM fixos:

-   **Ponto Interno (Inner)**: Um círculo pequeno que segue o mouse instantaneamente (snap), representando a posição exata do cursor.
-   **Anel Externo (Outer)**: Um círculo maior que segue o mouse com suavização (lerp), criando um efeito de "atraso" elegante. Usa `mix-blend-mode: difference` para inverter cores do fundo.

### Funcionamento Interno

1. **Rastreamento do Mouse**: Eventos `mousemove` atualizam a posição alvo (`target`) instantaneamente para o inner e gradualmente para o outer via lerp.
2. **Animação Suave**: Um loop `requestAnimationFrame` aproxima a posição do outer da posição alvo, controlado pelo parâmetro `speed`.
3. **Detecção de Hover**: Eventos `mouseover` verificam se o elemento sob o cursor é clicável (ex.: links, botões), ocultando o cursor customizado para evitar conflitos.
4. **Gerenciamento de Visibilidade**: O cursor se esconde ao sair da janela (`mouseout`) ou perder foco da aba (`blur`), reaparecendo ao retornar.
5. **Limpeza**: Ao desmontar, remove listeners e cancela animações para evitar vazamentos.

### Estados Visuais

-   **Normal**: Inner preto, outer branco com blend-mode para inversão.
-   **Hover Clicável**: Cursor customizado invisível, cursor nativo ativo.
-   **Fora da Janela**: Ambos invisíveis.
-   **Foco Perdido**: Ambos invisíveis.

---

## Como Usar

### Importação

```jsx
import CustomCursor from "./components/CustomCursor";
```

### Integração no App

Adicione o componente no nível mais alto da aplicação, como em `App.jsx`, para que funcione globalmente:

```jsx
import CustomCursor from "./components/CustomCursor";

function App() {
    return (
        <>
            <CustomCursor />
            {/* Resto da aplicação */}
        </>
    );
}
```

### Props

O componente aceita as seguintes props opcionais:

-   **`speed`** (number, padrão: 0.28): Controla a suavidade do anel externo (0.1 = muito lento, 0.5 = rápido). Valores maiores tornam o outer mais responsivo.
-   **`innerSize`** (number, padrão: 6): Diâmetro do ponto interno em pixels.
-   **`outerSize`** (number, padrão: 27): Diâmetro do anel externo em pixels.

Exemplo com customização:

```jsx
<CustomCursor speed={0.4} innerSize={8} outerSize={35} />
```

---

## Exemplos Visuais e Gráficos

Para ilustrar o comportamento, abaixo estão diagramas ASCII representando o cursor em diferentes estados. Imagine o mouse movendo-se pela tela.

### Estado Normal (Movimento Suave)

```
Tela (Viewport)
+-----------------------------+
|                             |
|          [Outer]            |  <- Anel externo suavizado (branco, blend-mode)
|        [Inner]              |  <- Ponto interno instantâneo (preto)
|                             |
+-----------------------------+

Mouse: Move → Inner segue instantaneamente; Outer segue com atraso suave.
```

**Descrição**: O inner (ponto preto) está sempre na posição exata do mouse. O outer (anel branco) se aproxima gradualmente, criando um efeito de "rastro" elegante.

### Estado Hover em Elemento Clicável

```
Tela (Viewport)
+-----------------------------+
|                             |
|        [Link/Button]        |  <- Elemento clicável detectado
|      (Cursor custom invisível) |
|                             |
+-----------------------------+

Mouse: Hover → Cursor custom some; Cursor nativo (mão) aparece.
```

**Descrição**: Ao passar sobre links ou botões, o cursor customizado se oculta (`opacity: 0`), permitindo que o cursor nativo do sistema (ex.: pointer) seja usado para feedback padrão.

### Estado Fora da Janela

```
Tela (Viewport)
+-----------------------------+
|                             |
|      (Mouse fora da tela)   |  <- Cursor custom invisível
|                             |
+-----------------------------+

Mouse: Sai → Ambos os elementos ficam invisíveis.
```

**Descrição**: Quando o mouse deixa a janela, o cursor customizado desaparece completamente para evitar distrações.

### Animação de Movimento (Sequência)

```
Frame 1: Mouse para direita
+-----------------------------+
|          [Outer] [Inner]    |  <- Inner à frente, outer atrasado
+-----------------------------+

Frame 2: Movimento contínuo
+-----------------------------+
|        [Outer]   [Inner]    |  <- Outer aproximando-se
+-----------------------------+

Frame 3: Posição final
+-----------------------------+
|          [Outer] [Inner]    |  <- Ambos alinhados
+-----------------------------+
```

**Descrição**: A sequência mostra como o lerp cria um efeito de suavização, onde o outer "persegue" o inner.

---

## Exemplo Completo de Uso

```jsx
// Em App.jsx
import React from "react";
import CustomCursor from "./components/CustomCursor";

function App() {
    return (
        <div>
            <CustomCursor speed={0.3} innerSize={5} outerSize={30} />
            {/* Seu conteúdo aqui */}
            <a href="/link">Link Exemplo</a>
            <button>Botão</button>
        </div>
    );
}

export default App;
```

---

## Benefícios

-   **Experiência Imersiva**: Cursor personalizado adiciona um toque profissional e moderno.
-   **Performance Otimizada**: Usa `requestAnimationFrame` e lerp para animações suaves sem lag.
-   **Acessibilidade**: Detecta elementos clicáveis e restaura cursor nativo quando necessário.
-   **Responsividade**: Adapta-se a dispositivos touch (oculta em mobile via CSS).
-   **Flexibilidade**: Props permitem customização fácil de tamanho e velocidade.

---

## Notas Técnicas

-   **Compatibilidade**: Funciona em navegadores com suporte a CSS `mix-blend-mode` (Chrome, Firefox, Safari modernos). Em navegadores antigos, pode não renderizar corretamente.
-   **Performance**: O loop de animação é otimizado; evite muitos cursores simultâneos.
-   **Acessibilidade**: Garante que elementos interativos mantenham feedback visual nativo.
-   **Responsividade**: CSS oculta o cursor em dispositivos touch (`@media (hover: none)`).
-   **Limitações**: Não funciona em elementos com `pointer-events: none`; cursor nativo é restaurado em hovers.
-   **Debugging**: Verifique se `customCursor.css` está importado; use DevTools para inspecionar os elementos `.custom-cursor-outer` e `.custom-cursor-inner`.

Para mais detalhes, consulte os arquivos `src/components/CustomCursor.jsx` e `src/style/customCursor.css`.
