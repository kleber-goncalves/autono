# Link Glow

## Descrição
Estilização `.link-glow` que cria uma **linha fina animada** nascendo do **centro** do link e crescendo para as laterais com um **glow (brilho)**. Usa `::after`, `currentColor` e variáveis CSS para delay progressivo.

---

## ✅ O que este estilo faz
- ✨ Linha nasce do **centro** do link e cresce pra os dois lados.
- 🌟 Glow suave ao longo da linha (box-shadow).
- 🎨 Cor da linha segue a cor do texto (`currentColor`).
- ⏱️ Suporta **delay progressivo** por item com `--delay`.
- ⚡ Leve, performático e sem JS para o efeito visual.

---

## 🔧 CSS principal
```css
.link-glow {
    position: relative;
    display: inline-block;
}

/* Linha base */
.link-glow::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background-color: currentColor;
    border-radius: 999px;

    /* Glow */
    box-shadow:
        0 0 6px currentColor,
        0 0 12px currentColor;

    transition:
        width 0.25s ease-out,
        box-shadow 0.25s ease-out;

    transition-delay: var(--delay, 0ms);
}

/* Hover */
.link-glow:hover::after {
    width: 100%;
}
```

## 🧠 Por que isso funciona (explicação técnica)
- `::after` cria um elemento real que tem largura/altura/posição → o navegador consegue animá-lo.
- `position: relative` no link serve de referência para o `absolute` do `::after`.
- `left: 50%` + `transform: translateX(-50%)` centra o pseudo-elemento no meio do link.
- `width: 0%` → `width: 100%` no hover cria o crescimento.
- `currentColor` faz com que a linha siga a cor do texto (sem lógica extra).
- `var(--delay, 0ms)` permite definir um delay diferente por link, útil para cascata progressiva.

---

## 🔁 Como implementar — HTML simples
```html
<nav>
  <a href="/tecnologia" class="link-glow" style="--delay: 0ms">Tecnologia</a>
  <a href="/sobre"      class="link-glow" style="--delay: 80ms">Sobre</a>
  <a href="/carreiras"  class="link-glow" style="--delay: 160ms">Carreiras</a>
</nav>
```

## ⚛️ Como implementar — React (JSX) com map (dinâmico)
```jsx
const menu = ["Tecnologia", "Sobre", "Carreiras"];

function Nav() {
  return (
    <nav>
      {menu.map((label, i) => (
        <a
          key={label}
          href={`/${label.toLowerCase()}`}
          className="link-glow"
          style={{ "--delay": `${i * 80}ms` }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
```

## 🧩 Versão Tailwind (utilizando utilitários)
Se você usa Tailwind e prefere não escrever CSS separado, dá pra usar utilitários e pseudo-classes:

```jsx
<a
  href="/tecnologia"
  className="relative inline-block after:absolute after:left-1/2 after:translate-x-[-50%] after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-current after:shadow-[0_0_6px_currentColor,0_0_12px_currentColor] after:transition-[width,box-shadow] after:duration-250 hover:after:w-full"
  style={{ "--delay": "80ms" /* use JS var para aplicar se quiser */ }}
>
  Tecnologia
</a>
```

**Nota:** Tailwind não aplica `transition-delay` via `after:` sem plugin; para delay continue usando `style={{ "--delay": "80ms" }}` e tenha um pequeno CSS para `transition-delay: var(--delay)` no `::after`.

---

## ♿ Acessibilidade & Boas práticas
- **Focus:** Garanta que a interação por teclado veja o mesmo feedback visual. Exemplo:
  ```css
  .link-glow:focus-visible::after {
    width: 100%;
  }
  ```
- **prefers-reduced-motion:** Respeite usuários que pedem transições reduzidas:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .link-glow::after { transition: none; }
  }
  ```
- **Contraste:** `currentColor` segue a cor do texto, então verifique contraste do texto em cada fundo (fundo escuro → texto claro).
- **Touch targets:** Mantenha padding suficiente no link para fácil toque em mobile.

---

## 🎛️ Personalizações rápidas
- **Espessura da linha:** `height: 2px` → ajuste para `1px` / `3px`.
- **Distância do texto:** `bottom: -6px` → aumente/reduza.
- **Força do glow:** Ajuste `box-shadow` valores (`6px` / `12px` → `4px` / `18px`).
- **Duração:** `transition: width 0.25s` → altere para `0.18s` (mais rápido) ou `0.35s` (mais suave).
- **Delay por item:** `--delay: ${index * 80}ms` (ajuste o `80ms`).

---

## ⚠️ Fallbacks & Compatibilidade
`currentColor`, pseudo-elementos e transitions são bem suportados em navegadores modernos.

Se precisar suportar navegadores muito antigos, considere remover glow e manter apenas a borda simples.

---

## 🧪 Exemplo completo (HTML + CSS)
```html
<!-- index.html -->
<link rel="stylesheet" href="styles.css">
<nav>
  <a href="/" class="link-glow" style="--delay: 0ms">Home</a>
  <a href="/prod" class="link-glow" style="--delay: 80ms">Produtos</a>
  <a href="/contato" class="link-glow" style="--delay: 160ms">Contato</a>
</nav>
```

```css
/* styles.css */
.link-glow { position: relative; display: inline-block; }
.link-glow::after {
  content:""; position:absolute; left:50%; bottom:-6px; transform:translateX(-50%);
  width:0%; height:2px; background:currentColor; border-radius:999px;
  box-shadow: 0 0 6px currentColor, 0 0 12px currentColor;
  transition: width .25s ease-out, box-shadow .25s ease-out;
  transition-delay: var(--delay, 0ms);
}
.link-glow:hover::after, .link-glow:focus-visible::after { width:100%; }
@media (prefers-reduced-motion: reduce) {
  .link-glow::after { transition: none; }
}
```

---

## ✅ Dica final (produto nível SaaS)
Use `currentColor` e `--delay` — isso torna o componente reutilizável e context-aware (funciona automaticamente em navs que mudam de cor).

Prefira `::after` em vez de `text-decoration` para animações: é mais controlável e performático.

Teste com teclado e leitores de tela; mantenha `:focus-visible` para acessibilidade.