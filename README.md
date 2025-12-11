# Autono — Scroll suave e indicador de progresso

Resumo rápido

-   Este README documenta o componente Scroll-bar.jsx (indicador de progresso) e sua integração com `autono.jsx`, além da combinação de Lenis (rolagem suave), GSAP e ScrollTrigger.
-   Objetivo: mostrar como funciona, como usar e como ajustar os parâmetros para obter uma rolagem "mais suave que manteiga" sem quebrar o comportamento de ScrollTrigger.

Arquitetura e responsabilidades

-   autono.jsx
    -   Inicializa Lenis (motor de rolagem suave).
    -   Conecta Lenis ao GSAP/ScrollTrigger com `lenis.on('scroll', ScrollTrigger.update)` e integra o RAF do Lenis ao ticker do GSAP.
    -   Monta a aplicação e passa `lenisRef` ao componente `ScrollProgressBar`.
-   src/components/Scroll-bar.jsx
    -   Componente visual que desenha uma barra fixa no topo e atualiza sua largura com base no progresso de rolagem.
    -   Aceita prop opcional `lenisRef`: se fornecida, usa a instância Lenis para calcular progresso; caso contrário, usa rolagem nativa como fallback.
-   src/utils/useGsapEfeitoZoomScroll.js (hook)
    -   Hook auxiliar que cria ScrollTrigger/gsap para efeitos de pin/zoom em seções específicas.

Como funciona (fluxo)

1. autono.jsx cria e configura Lenis durante o carregamento da página.
2. Lenis passa eventos de scroll para ScrollTrigger (via `lenis.on('scroll', ScrollTrigger.update)`).
3. GSAP sincroniza animações e ScrollTrigger com o RAF customizado do Lenis (usando `gsap.ticker.add` -> `lenis.raf`).
4. Scroll-bar.jsx pode receber `lenisRef` para ler a posição de rolagem diretamente da instância Lenis; caso contrário, calcula o progresso com window.scrollY.

Como usar (exemplo mínimo)

1. Em autono.jsx (já presente no projeto):
    - Inicialize Lenis e armazene em uma ref (ex: `lenisRef.current = new Lenis(...)`).
    - Faça `lenis.on('scroll', ScrollTrigger.update)` e `gsap.ticker.add((t) => lenis.raf(t * 1000))`.
    - Renderize `<ScrollProgressBar lenisRef={lenisRef} />`.
2. Em um componente local:
    - Para animações baseadas em rolagem, use ScrollTrigger normalmente. Se Lenis estiver ativo, assegure que ScrollTrigger está sendo atualizado pelo evento do Lenis (conforme acima).
3. Para efeitos de "pin" e zoom (useGsapContainerAnimation):
    - Passe uma ref do contêiner para o hook: `useGsapContainerAnimation(containerRef, ".stat-area", 2000)`.

Props e detalhes do ScrollProgressBar

-   lenisRef (opcional): ref ou instância Lenis. Se fornecida, o componente tentará ler `lenisRef.current.scroll` (ou `lenisRef.scroll`) para calcular progresso.
-   Comportamento de fallback: usa window.scrollY quando Lenis não existe.
-   Performance: o componente usa um loop com requestAnimationFrame para detectar mudanças de scroll eficientemente e evitar listeners excessivos.

Ajustes finos e recomendações

-   Ajuste `duration` do Lenis para controlar a suavidade (valores maiores = suavidade mais prolongada). Ex.: 0.8–1.6.
-   Ajuste `easing` para o feeling desejado. A função usada no projeto é um bom ponto de partida.
-   Se o scroll travar ou parar:
    -   Verifique se Lenis foi inicializado apenas uma vez.
    -   Assegure que não haja CSS conflitando (ex.: `overflow: hidden` indevido em html/body) ou `position: fixed` timando áreas inteiras.
    -   Garanta que ScrollTrigger.update seja chamado a cada evento de scroll do Lenis.
-   Para compatibilidade com link anchors e navegadores:
    -   Evite `scroll-behavior: smooth` no CSS quando Lenis estiver ativo, para prevenir conflitos.

Problemas comuns e soluções rápidas

-   Página não rola / travou:
    -   Verificar se Lenis está ativo porém não está chamando `raf` corretamente. Confirme `gsap.ticker.add((t) => lenis.raf(t * 1000))`.
    -   Checar se algum elemento cobriu toda a viewport com `pointer-events` ou `position` indevida.
-   Progress bar não atualiza:
    -   Confirme se `lenisRef` foi passado ao componente.
    -   Caso use container com `overflow` próprio, a medição pode precisar ser adaptada.

Boas práticas

-   Inicializar Lenis somente quando `document.readyState === "complete"` ou dentro de um useEffect que roda no cliente.
-   Registrar plugins GSAP (ScrollTrigger) apenas no cliente (window disponível).
-   Remover listeners / limpar ctx do gsap quando componentes desmontam para evitar leaks.

Exemplo rápido de integração (pseudocódigo)
/_ Em autono.jsx: _/

-   const lenisRef = useRef(null);
-   start Lenis e set lenisRef.current
-   lenis.on('scroll', ScrollTrigger.update)
-   gsap.ticker.add((t)=> lenis.raf(t\*1000))
-   <ScrollProgressBar lenisRef={lenisRef} />

Licença e responsáveis

-   Doc criada para uso interno do projeto Autono. Ajuste permissões conforme política do repositório.

Contatos e manutenção

-   Mantenha este README atualizado sempre que alterar a inicialização do Lenis, as opções do GSAP/ScrollTrigger ou a API de Scroll-bar.jsx.
