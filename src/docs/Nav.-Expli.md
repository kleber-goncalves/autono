## 🧭 Guia Completo do Componente Nav.jsx para Iniciantes

O `Nav.jsx` é um componente de navegação profissional que se adapta ao scroll da página e ao tamanho da tela. Vamos explicar **cada função e cada linha de código** de forma simples e detalhada!

### 📚 Antes de Começar: O Que É State e Ref?

Antes de entrar no Nav.jsx, você precisa entender dois conceitos fundamentais no React:

- **State (`useState`)**: É como a "memória" do componente. Quando algo muda, o React redesenha a tela automaticamente.
- **Ref (`useRef`)**: É uma forma de "apontar" para um elemento HTML real, sem causar redesenho.

### 🎯 Fluxo Visual Geral do Nav.jsx

```
┌─────────────────────────────────────────────────────────────┐
│                    NAV.JSX FLUXO GERAL                      │
└─────────────────────────────────────────────────────────────┘

    ↓ USUÁRIO ABRE A PÁGINA

┌─────────────────────────────────────────────────────────────┐
│  1. DETECTAR SCROLL (useScrollDirection)                    │
│     └─ O usuário rolou para baixo ou para cima?             │
└─────────────────────────────────────────────────────────────┘

    ↓

┌─────────────────────────────────────────────────────────────┐
│  2. DETECTAR COR DE FUNDO (checkUnderNav)                   │
│     └─ O nav está sobre um fundo escuro ou claro?           │
└─────────────────────────────────────────────────────────────┘

    ↓

┌─────────────────────────────────────────────────────────────┐
│  3. AJUSTAR ESTILOS E LAYOUT                                │
│     └─ Mudar cores, tamanho e posição do nav                │
└─────────────────────────────────────────────────────────────┘

    ↓

┌─────────────────────────────────────────────────────────────┐
│  4. RENDERIZAR NA TELA                                      │
│     └─ Desktop (menu visível) ou Mobile (menu sanfona)      │
└─────────────────────────────────────────────────────────────┘
```

---

### 1️⃣ Função `SubscribeContent()` - Conteúdo do Modal

```javascript
function SubscribeContent() {
    const validateSchema = {
        email: {
            required: true,
            type: "email",
        },
    };
```

**O que faz?**
Esta função cria o conteúdo que aparece dentro do modal "Assinar Newsletter". Ela define as regras de validação do formulário.

**Explicação linha por linha:**
- `validateSchema`: Define as "regras" que o email deve seguir:
  - `required: true` → O usuário PRECISA preencher o campo
  - `type: "email"` → O texto digitado DEVE ser um email válido

```javascript
const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Payload enviado:", values);
    alert("Candidatura enviada com sucesso!");
};
```

**O que faz?**
Define o que acontece quando o usuário clica em "Enviar".

- `async`: Significa que essa função vai "esperar" por algo
- `await new Promise(...)`: Simula um atraso de 2 segundos (como se estivesse enviando para um servidor)
- `console.log(...)`: Mostra os dados no console do navegador
- `alert(...)`: Mostra uma mensagem de sucesso ao usuário

**Resumo:** Quando você clica em "Enviar", ele espera 2 segundos e mostra "Sucesso!".

---

### 2️⃣ Função `useScrollDirection()` - Detecta Direção do Scroll

```javascript
function useScrollDirection() {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("up");
```

**O que faz?**
Detecta se o usuário está rolando para cima ou para baixo.

**Variáveis (Estado):**
- `lastScrollY`: "Lembra" da posição anterior do scroll
- `scrollDirection`: Armazena se está "up" (para cima) ou "down" (para baixo)

```javascript
useEffect(() => {
    const update = () => {
        const y = window.scrollY;  // Posição atual de scroll
        const dir = y > lastScrollY && y > 600 ? "down" : "up";
        // Se scrollou mais para baixo E passou de 600px, é "down"
        if (dir !== scrollDirection) setScrollDirection(dir);
        setLastScrollY(y > 0 ? y : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    // Executa "update" a cada scroll
    return () => window.removeEventListener("scroll", update);
    // Remove o listener quando componente é removido
}, [lastScrollY, scrollDirection]);
```

**Fluxo de Funcionamento:**

```
┌─────────────────┐
│ Usuário rola ↓  │
└────────┬────────┘
         ↓
    update() é chamado
         ↓
    ┌────────────────────────────────┐
    │ if (posição > 600px E          │
    │     maior que antes)           │
    │   → "down" (esconda o nav)      │
    │ else                           │
    │   → "up" (mostre o nav)        │
    └────────────────────────────────┘
```

---

### 3️⃣ Componente Principal `Nav()` - A Navegação

```javascript
function Nav() {
    const navRef = useRef(null);
    const scrollDirection = useScrollDirection();
```

**O que são essas linhas?**

- `navRef`: Uma referência para o elemento `<nav>` da página. Usaremos para "olhar" qual é a cor do fundo embaixo do nav.
- `scrollDirection`: Obtém o resultado da função anterior (está subindo ou descendo?)

#### **Estados do Nav**

```javascript
const [isScrolled, setIsScrolled] = useState(false);
const [isNavOverDark, setIsNavOverDark] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeLink, setActiveLink] = useState("");
```

| Variável | Significado |
|----------|------------|
| `isScrolled` | O usuário já rolou a página além de 80px? |
| `isNavOverDark` | O nav está sobre um fundo escuro (precisa de texto branco)? |
| `isMenuOpen` | O menu mobile (sanfona) está aberto? |
| `activeLink` | Qual é o link que está ativo agora? ("/tecnologia", "/sobre", etc) |

---

#### **useEffect 1: Detectar Página Atual**

```javascript
useEffect(() => {
    const path = window.location.pathname;  // Pega a URL atual
    setActiveLink(path);                    // Armazena qual página é
}, []);  // Roda uma vez, ao carregar
```

**O que faz?**
Quando a página carrega, descobre qual é a página atual (ex: "/tecnologia") e marca o link correspondente como ativo.

**Analogia:** Como um mapa que mostra "você está aqui" 📍

---

#### **useEffect 2: Bloquear Scroll no Mobile**

```javascript
useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
}, [isMenuOpen]);
```

**O que faz?**
Quando o usuário abre o menu mobile, a página não pode ser rolada (para evitar confusão).

```
Menu Fechado          Menu Aberto
✓ Pode rolar          ✗ Não pode rolar
```

---

#### **useEffect 3: Detectar Quanto Rolou**

```javascript
useEffect(() => {
    const handleScrollColor = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScrollColor, { passive: true });
    // ... mais código
}, []);
```

**O que faz?**
Verifica a cada scroll se o usuário passou de 80px. Se passou, muda o tamanho/estilo do nav.

```
Antes de 80px              Depois de 80px
┌──────────────────┐      ┌──────────────┐
│ Nav Grande       │      │ Nav Menor    │
│ (modo hero)      │  →   │ (modo scroll)│
└──────────────────┘      └──────────────┘
```

---

#### **useEffect 4: Detectar Cor do Fundo (O Mais Complexo)**

```javascript
useEffect(() => {
    if (!navRef.current) return;
    let raf = null;

    const parseRgb = (rgbStr) => {
        // Converte "rgb(255, 255, 255)" para [255, 255, 255]
    };

    const brightness = (r, g, b) => (299 * r + 587 * g + 114 * b) / 1000;
    // Calcula o "brilho" de uma cor
```

**O que faz?**
Este é o "coração" do Nav! Detecta a cor do fundo embaixo do nav e muda o texto de branco para preto (ou vice-versa).

**Visualmente:**

```
┌─────────────────────────┐
│       NAV AQUI          │ ← ref={navRef}
├─────────────────────────┤
│  Fundo Escuro           │ ← A função "olha" aqui
│                         │
└─────────────────────────┘

Se brilho < 130 → Fundo escuro → Use texto BRANCO
Se brilho > 130 → Fundo claro  → Use texto PRETO
```

**Função `checkUnderNav()`:**

```javascript
const checkUnderNav = () => {
    const rect = navRef.current.getBoundingClientRect();
    // Pega as coordenadas do nav na tela
    
    const x = Math.round(rect.left + rect.width / 2);
    const y = Math.round(Math.min(window.innerHeight - 1, rect.bottom + 2));
    // Aponta para o meio embaixo do nav
    
    const el = document.elementFromPoint(x, y);
    // Descobre qual elemento está embaixo do nav naquele ponto
    
    // Então "sobe" para achar a cor do background
    const section = findSectionAncestor(el) || el;
    
    // Verifica a cor
    if (section.dataset && section.dataset.bg) {
        setIsNavOverDark(section.dataset.bg.toLowerCase() === "dark");
    }
};
```

**Diagrama do processo:**

```
NAV (position: fixed)
│
├─ Ponto de detecção
│   ↓
├─ Elemento embaixo (ex: <section data-bg="dark">)
│   ↓
├─ Lê a cor do elemento
│   ↓
├─ Calcula brilho
│   ↓
└─ Se escuro: use texto branco
  Se claro: use texto preto
```

---

### 4️⃣ Variáveis CSS Dinâmicas

```javascript
const visibilityClass = scrollDirection === "down" ? "-translate-y-18" : "translate-y-0 nav-up";
```

**O que significa?**
- Se rolar para **baixo**: `"-translate-y-18"` → Nav sai de cima (some)
- Se rolar para **cima**: `"translate-y-0 nav-up"` → Nav volta (aparece)

```
Rolar para baixo (down)      Rolar para cima (up)
        ↓                             ↑
    ┌─────────┐                  ┌─────────┐
    │   NAV   │                  │   NAV   │
    └─────────┘                  └─────────┘
       Sai da tela              Volta na tela
```

---

#### **Classe de Cor de Fundo**

```javascript
const bgColorClassII = isMenuOpen
    ? isNavOverDark
        ? "bg-black border-white/20"
        : "bg-white border-black/10"
    : isNavOverDark
    ? "bg-white/20 border border-white/60 backdrop-blur-sm"
    : "bg-black/20 border border-black/60 backdrop-blur-sm";
```

**Traduzindo:**

```
┌──────────────────────────────────────────┐
│        Menu Aberto?                      │
├──────────────────────────────────────────┤
│ SIM                                      │
│  ├─ Fundo escuro? → bg-black             │
│  └─ Fundo claro?  → bg-white             │
│                                          │
│ NÃO (Menu fechado)                       │
│  ├─ Fundo escuro? → bg-white/20 + blur   │
│  └─ Fundo claro?  → bg-black/20 + blur   │
└──────────────────────────────────────────┘
```

---

#### **Lógica dos Links Ativos**

```javascript
const getLinkClasses = (path) => {
    const isActive = activeLink === path;
    if (isActive) {
        return isNavOverDark
            ? "text-white font-medium nav-active"
            : "text-black font-medium nav-active";
    }
    return isNavOverDark
        ? "text-gray-300 hover:text-white hover:font-medium"
        : "text-gray-700 hover:text-black hover:font-medium";
};
```

**O que faz?**
Verifica se um link é o atual. Se for, deixa mais destacado (bold e com glow).

```
┌──────────────────┐      ┌──────────────┐
│ Link Ativo       │      │ Link Normal  │
├──────────────────┤      ├──────────────┤
│ Texto branco     │      │ Texto cinza  │
│ Bold             │      │ Normal       │
│ Com glow ✨      │      │ Sem glow     │
└──────────────────┘      └──────────────┘
```

---

### 5️⃣ Renderização (O Que Aparece na Tela)

#### **O Elemento `<nav>`**

```javascript
<nav
    ref={navRef}
    className={`fixed top-0 left-0 right-0 z-20 transform ${visibilityClass} ${animtion} ${bgColorClassII} ${bgColorClass}`}
>
```

**Atributos:**
- `ref={navRef}`: Conecta com a ref que criamos (para detectar cor)
- `fixed`: Fica fixo no topo enquanto rola
- `z-20`: Fica acima de quase tudo na página

---

#### **Logo (AUTONO)**

```javascript
<a href="/" className={`font-bold tracking-[0.4rem] text-sm md:text-xl ${textColorClass}`}>
    AUTONO
</a>
```

**O que é?**
Link principal que volta para a home. O tamanho muda em telas pequenas/grandes.

---

#### **Botão do Menu Mobile (Hamburger ☰)**

```javascript
<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
    {/* Duas linhas que giram */}
</button>
```

**O que faz?**
Aparece apenas em mobile (`md:hidden`). Ao clicar, abre/fecha o menu.

```
Fechado          Clique          Aberto
   ☰              →              ✕
 (Menu)                        (Fechar)
```

---

#### **Links de Desktop**

```javascript
<div className={`hidden md:flex gap-8 items-center ${textColorClass}`}>
    <a href="/tecnologia" onClick={() => setActiveLink("/tecnologia")}>
        Tecnologia
    </a>
    {/* ... mais links ... */}
</div>
```

**O que faz?**
Mostra os links de navegação apenas em desktop (`hidden md:flex`).

---

#### **Botão Assinar**

```javascript
<ModalTrigger modalContent={<SubscribeContent />}>
    <a href="/assinar" className={`px-7 py-[3px] rounded-md border ...`}>
        Assinar
    </a>
</ModalTrigger>
```

**O que faz?**
O `ModalTrigger` envolve o botão. Ao clicar, abre o modal com o `SubscribeContent`.

---

#### **Menu Mobile (Overlay Sanfona)**

```javascript
<div className={`fixed inset-0 h-screen w-screen transition-all duration-500 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
    {/* Links grandes para mobile */}
</div>
```

**O que faz?**
Cobre toda a tela quando aberto em mobile. Desaparece suavemente quando fechado.

```
Fechado:                Aberto:
┌───────────┐          ┌───────────┐
│   Página  │          │ [Menu]    │
│           │    →     │ Tecnologia│
│           │          │ Sobre     │
└───────────┘          │ Carreiras │
                       │ Assinar   │
                       └───────────┘
```

---

## 📊 Resumo Visual Completo

```
╔═══════════════════════════════════════════════════════════════╗
║                     NAV.JSX RESUMIDO                         ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  1. SubscribeContent()                                        ║
║     └─ Formulário do modal                                   ║
║                                                               ║
║  2. useScrollDirection()                                      ║
║     └─ Detecta: rola para cima ou para baixo?               ║
║                                                               ║
║  3. Nav() - Estados                                          ║
║     ├─ isScrolled: passou 80px?                             ║
║     ├─ isNavOverDark: fundo escuro?                         ║
║     ├─ isMenuOpen: menu mobile aberto?                      ║
║     └─ activeLink: qual página agora?                       ║
║                                                               ║
║  4. useEffects (4 ao todo)                                   ║
║     ├─ Detectar página atual                                ║
║     ├─ Bloquear scroll no mobile                            ║
║     ├─ Detectar quanto rolou                                ║
║     └─ Detectar cor do fundo (checkUnderNav)               ║
║                                                               ║
║  5. Classes Dinâmicas                                        ║
║     ├─ Visibilidade (mostrar/esconder)                      ║
║     ├─ Cores (adaptar ao fundo)                            ║
║     ├─ Tamanho (grande/pequeno)                            ║
║     └─ Links ativos (destacar link atual)                  ║
║                                                               ║
║  6. Renderização                                             ║
║     ├─ Desktop: menu visível                               ║
║     └─ Mobile: menu sanfona (ModalTrigger)                 ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 💡 Dicas para Iniciantes

1. **Quando o Nav muda?** A cada scroll, a cada clique, e quando redimensiona a tela
2. **Por que tem tantos `useEffect`?** Cada um faz uma coisa diferente (responsabilidade única)
3. **O que é `will-change`?** Diz ao navegador: "prepare-se, esta propriedade vai mudar muito"
4. **Tailwind vs CSS normal?** Aqui usamos Tailwind (classes prontas) + CSS customizado (App.css)
5. **Mobile first?** Não! Aqui é "desktop first" com `md:hidden` (mostra em mobile, esconde em desktop)

---
