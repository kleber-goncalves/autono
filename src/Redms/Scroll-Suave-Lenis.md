# 🎯 Sistema de Scroll Suave com Lenis + GSAP + ScrollTrigger

Documentação completa sobre como o sistema de scroll suave funciona na aplicação **Autono**, explicando a integração entre **Lenis**, **GSAP** e **ScrollTrigger** para criar uma experiência de rolagem premium.

---

## 📖 Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura do Sistema](#arquitetura-do-sistema)
3. [Como Funciona](#como-funciona-teste)
4. [Cada Biblioteca Explicada](#cada-biblioteca-explicada)
5. [Fluxo de Sincronização](#fluxo-de-sincronização)
6. [Configurações Principais](#configurações-principais)
7. [Solução de Problemas](#solução-de-problemas)

---

## 🎬 Visão Geral

O arquivo `autono.jsx` é responsável por **orquestrar** todo o sistema de scroll suave da aplicação. Ele:

1. ✅ Cria uma instância do **Lenis** para scroll suave
2. ✅ Conecta o Lenis ao **ScrollTrigger** do GSAP
3. ✅ Sincroniza tudo com o **ticker do GSAP**
4. ✅ Renderiza todos os componentes da página (Hero, Sobre, Servicos, etc)

**Resultado**: Scroll suave como manteiga + animações ScrollTrigger precisas

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────────────────────────────────────────┐
│           autono.jsx (Orquestrador)                 │
│                                                     │
│  ┌──────────────┐  ┌──────────────┐                │
│  │   Lenis      │  │    GSAP      │                │
│  │  (Scroll)    │  │ (Animações)  │                │
│  └──────────────┘  └──────────────┘                │
│         │                  │                        │
│         └──────────────────┘                        │
│              ScrollTrigger                          │
│         (Liga scroll às animações)                  │
│                                                     │
└─────────────────────────────────────────────────────┘
            │
            ├─→ Nav
            ├─→ Hero
            ├─→ Sobre
            ├─→ Servicos (com animações ScrollTrigger)
            ├─→ Sobreii
            ├─→ Infografico
            ├─→ Parceiros
            ├─→ Carreira
            └─→ Rodape
```

---

## ⚙️ Como Funciona teste

### O Fluxo Completo

```
1. Componente monta (useEffect executa)
   ↓
2. Lenis é inicializado com configurações
   ↓
3. Lenis é conectado ao ScrollTrigger
   ↓
4. Lenis é adicionado ao ticker do GSAP
   ↓
5. Quando o usuário faz scroll:
   - Lenis intercepta o scroll
   - Calcula a posição suavizada
   - Atualiza o ScrollTrigger
   - ScrollTrigger ativa animações relevantes
   ↓
6. Ao desmontar: Tudo é limpo e destruído
```

### Visualizando o Processo

```
SCROLL DO USUÁRIO
      ↓
   LENIS (suavização)
      ↓
ScrollTrigger.update() (calcula posições)
      ↓
Componentes animados reagem
```

---

## 📚 Cada Biblioteca Explicada

### 🎵 **Lenis** - O Scroll Suave

Lenis é uma biblioteca que **intercepta o scroll nativo** do navegador e o substitui por uma animação suavizada.

#### Como funciona:
```javascript
const lenis = new Lenis({
    duration: 1.2,  // Duração da suavização em segundos
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva suave
    smoothWheel: true,  // Suaviza scroll com mouse wheel
});
```

#### O que acontece quando você faz scroll:

```
Você move o mouse wheel
      ↓
Lenis captura o evento
      ↓
Lenis calcula posição suavizada (interpolação)
      ↓
Página rola suavemente (não instantaneamente)
      ↓
Cada quadro (~60fps) atualiza a posição
```

**Exemplo Visual:**
```
Scroll Nativo:        Scroll Lenis:
Posição 0  ────→ 100  Posição 0  ─→ 25 → 50 → 75 → 100
(Instantâneo)         (Suave, frameado)
```

---

### 🎬 **GSAP** - Animações Poderosas

GSAP é uma biblioteca de animação que oferece um **ticker** (loop de animação) que roda 60+ vezes por segundo.

#### O que é o ticker?

O ticker é como um **heartbeat** da aplicação - a cada frame, ele executa funções registradas.

```javascript
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);  // Atualiza Lenis a cada frame
});
```

**Fluxo:**
```
Frame 1: Lenis recebe time=0
Frame 2: Lenis recebe time=0.016 (60fps ≈ 16ms por frame)
Frame 3: Lenis recebe time=0.032
...
```

---

### 🔗 **ScrollTrigger** - Liga Scroll a Animações

ScrollTrigger é um **plugin do GSAP** que cria animações baseadas na posição de scroll.

#### Como funciona:

```javascript
gsap.fromTo(
    boxRef.current,
    { opacity: 0, x: 150 },
    {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: boxRef.current,
            start: "top 100%",    // Inicia quando o elemento entra
            end: "top 0.7%",      // Termina quando sai
            scrub: 1.5,           // Vincula à rolagem (1.5s de suavização)
        },
    }
);
```

**O que acontece:**
```
Você faz scroll
      ↓
ScrollTrigger detecta posição do elemento
      ↓
Se elemento está na viewport:
    Anima o elemento conforme a posição de scroll
      ↓
Elemento desaparece do viewport:
    Animação para
```

---

## 🔌 Fluxo de Sincronização

### A Conexão Crítica: Lenis ↔ ScrollTrigger

```javascript
lenis.on('scroll', ScrollTrigger.update);
```

**O que isso faz:**

```
Lenis move a página
      ↓
Lenis dispara evento 'scroll'
      ↓
ScrollTrigger.update() é chamado
      ↓
ScrollTrigger recalcula:
    - Posição de cada trigger
    - Progresso de cada animação
    - Quais elementos estão na viewport
      ↓
Componentes com ScrollTrigger reagem
```

### O Ticker do GSAP

```javascript
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
```

**Cronograma (~60fps):**
```
Time  0ms  → Lenis calcula posição frame 1
Time 16ms  → Lenis calcula posição frame 2
Time 32ms  → Lenis calcula posição frame 3
Time 48ms  → Lenis calcula posição frame 4
Time 64ms  → Lenis calcula posição frame 5
...
```

A cada frame, Lenis:
1. Calcula a nova posição suavizada
2. Atualiza o DOM (scroll visual)
3. Dispara `scroll` event
4. ScrollTrigger atualiza animações

---

## 🎯 Configurações Principais

### Velocidade do Scroll (`duration`)

```javascript
// Mais rápido (menos manteiga)
duration: 0.5,

// Padrão (bom equilíbrio)
duration: 1.2,

// Mais lento (mais suave, mais "manteiga")
duration: 2.5,
```

**Efeito Visual:**
```
duration: 0.5  → Sente-se rápido e responsivo
duration: 1.2  → Sente-se suave e premium
duration: 2.5  → Sente-se lento e luxuoso
```

### Easing (Curva de Suavização)

```javascript
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
```

Isso é uma **curva de easing exponencial** que:
- Começa rápido
- Desacelera no final
- Cria sensação de "elasticidade"

**Visualização:**
```
Posição
   ↑
100│     ╱────
   │   ╱
 50│ ╱
   │╱
   0└──────→ Tempo
   
Começa com aceleração,
depois desacelera suavemente
```

### Smooth Wheel

```javascript
smoothWheel: true,  // Mouse wheel rola suavemente
smoothWheel: false, // Mouse wheel rola normal (não recomendado)
```

---

## 🐛 Solução de Problemas

### Problema: Scroll não é suave

**Solução:**
```javascript
// Verifique se Lenis está inicializado
console.log(lenisRef.current); // Deve ser um objeto Lenis

// Verifique se o ticker está rodando
gsap.ticker.fps();  // Deve retornar ~60
```

### Problema: Animações ScrollTrigger não funcionam

**Solução 1:** Registre o plugin
```javascript
gsap.registerPlugin(ScrollTrigger);
```

**Solução 2:** Verifique se Lenis está conectado
```javascript
lenis.on('scroll', ScrollTrigger.update);
```

**Solução 3:** Verifique o `scrub`
```javascript
// Muito suavizado (demora para reagir)
scrub: 3,

// Bom equilíbrio
scrub: 1.5,

// Sem suavização (reativo)
scrub: false,
```

### Problema: Performance lenta

**Causa:** Muitas animações ScrollTrigger ativas

**Solução:**
```javascript
// Reduza a quantidade de ScrollTriggers
// Combine animações similares
// Use willChange no CSS
```

---

## 📊 Performance e Otimizações

### Tamanho das Dependências

```
Lenis:        ~20KB (gzip)
GSAP:         ~60KB (gzip)
ScrollTrigger:~30KB (gzip)
─────────────────────────
Total:       ~110KB
```

### Otimizações Já Implementadas

```javascript
gsap.ticker.lagSmoothing(0);
// Desativa lag smoothing para sincronização perfeita
// Garante que Lenis e ScrollTrigger estejam 100% sincronizados
```

### Cleanup (Limpeza ao Desmontar)

```javascript
return () => {
    gsap.ticker.remove((time) => lenis.raf(time * 1000));
    lenis.destroy();
};
```

Isso garante que:
- Listeners são removidos
- Memória é liberada
- Sem vazamentos de memória

---

## 🎨 Exemplos Práticos

### Exemplo Scroll Suave 

```javascript
// Dentro de autono.jsx
useEffect(() => {
        // Inicializa o Lenis
        const lenis = new Lenis({
            duration: 1.2, // Quanto maior, mais "manteiga"
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing padrão suave
            smoothWheel: true,
        });

        // Conecta o Lenis ao GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Adiciona o Lenis ao ticker do GSAP para sincronia perfeita
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Desativa o lag smoothing do GSAP para evitar conflitos visuais
        gsap.ticker.lagSmoothing(0);

        // Limpeza ao desmontar
        return () => {
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
            lenis.destroy();
        };
    }, []);
```

### Exemplo 1: Animar elemento ao scroll

```javascript
// Dentro de Servico.jsx
useEffect(() => {
    gsap.fromTo(
        boxRef.current,
        { opacity: 0, x: 150 },
        {
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: boxRef.current,
                start: "top 100%",  // Quando entra na viewport
                end: "top 0.7%",    // Quando sai da viewport
                scrub: 1.5,         // Vinculado ao scroll
            },
        }
    );
}, []);
```

### Exemplo 2: Paralaxe (efeito de profundidade)

```javascript
gsap.fromTo(
    element,
    { y: 0 },
    {
        y: -100,  // Move para cima conforme scroll
        scrollTrigger: {
            trigger: element,
            scrub: 1,
        },
    }
);
```

### Exemplo 3: Contador que anima ao aparecer

```javascript
gsap.fromTo(
    ".counter",
    { innerHTML: 0 },
    {
        innerHTML: 1000,
        scrollTrigger: {
            trigger: ".counter",
            start: "top 80%",
        },
    }
);
```

---

## 🚀 Como Usar Esta Configuração

### 1. Certifique-se que as dependências estão instaladas

```bash
npm install lenis gsap
```

### 2. Importe em `autono.jsx`

```javascript
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
```

### 3. Use em componentes filhos

```javascript
// Em Servico.jsx, Infografico.jsx, etc
useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(element, {...}, {
        scrollTrigger: { ... }
    });
}, []);
```

---

## 📚 Referências

- [Lenis Docs](https://lenis.studiofreight.com/)
- [GSAP Docs](https://gsap.com/)
- [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

---

## 💡 Dicas Pro

✅ Use `scrub: 1.5` para que animações sigam o scroll suavemente  
✅ Use `duration: 1.2` no Lenis para sensação premium  
✅ Sempre limpe com `return () => { ... }` em useEffect  
✅ Combine múltiplas animações em um único `gsap.timeline()`  
✅ Use `willChange: transform` em CSS para otimizar performance  

---

**Desenvolvido com Lenis, JavaScript, React, GSAP e ScrollTrigger**
