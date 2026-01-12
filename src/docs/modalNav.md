## 🎯 Sistema de Modal de Assinatura

O projeto inclui um sistema elegante de modal para assinatura de newsletter, composto por três componentes principais: `SubscribeModal`, `ModalTrigger` e a integração no `Nav.jsx`. Este sistema permite uma experiência de usuário fluida e acessível, com animações suaves e suporte completo a acessibilidade.

### 📋 Como Funciona o SubscribeModal

O `SubscribeModal` é o componente base do modal, responsável pela renderização e comportamento do popup. Ele utiliza `createPortal` do React para renderizar o modal no `document.body`, garantindo que ele apareça acima de todo o conteúdo.

**Características principais:**
- **Animação suave**: Slide-up com transição de 300ms para entrada e saída.
- **Acessibilidade**: Suporte a ARIA labels, foco automático no primeiro elemento focável, e fechamento com ESC.
- **Backdrop**: Overlay escuro com clique para fechar.
- **Scroll lock**: Bloqueia o scroll da página quando o modal está aberto.
- **Responsivo**: Design adaptável para mobile e desktop.

**Props do SubscribeModal:**
- `isOpen`: Boolean para controlar visibilidade.
- `onClose`: Função callback para fechar o modal.
- `children`: Conteúdo interno do modal.
- `height`: Altura do modal (padrão: "60vh").
- `ariaLabel`: Label para acessibilidade (padrão: "Assinar").

### 🔗 Como Usar o ModalTrigger

O `ModalTrigger` é um wrapper inteligente que facilita a integração do modal com qualquer elemento trigger (botão, link, etc.). Ele gerencia o estado de abertura/fechamento automaticamente.

**Vantagens:**
- **Flexibilidade**: Aceita qualquer elemento React como trigger.
- **Event handling**: Previne navegação padrão em links e adiciona eventos de clique.
- **Acessibilidade**: Adiciona atributos ARIA apropriados ao trigger.

**Props do ModalTrigger:**
- `children`: Elemento trigger (ex: `<button>Assinar</button>`).
- `modalContent`: Conteúdo a ser renderizado dentro do modal.
- `modalProps`: Props opcionais para o SubscribeModal.

### 🧭 Integração no Nav.jsx

No `Nav.jsx`, o botão "Assinar" utiliza o `ModalTrigger` para abrir o modal de assinatura. O conteúdo do modal é definido pela função `SubscribeContent`, que inclui um formulário de email com validação.

**Fluxo de integração:**
1. O botão "Assinar" no nav é envolvido pelo `ModalTrigger`.
2. Ao clicar, o `ModalTrigger` abre o `SubscribeModal` com o conteúdo de `SubscribeContent`.
3. O usuário preenche o email e submete o formulário.
4. Após submissão, o modal pode ser fechado automaticamente ou manualmente.

### 📊 Diagrama de Funcionamento

```
┌─────────────────┐    Clique     ┌─────────────────┐    Renderiza     ┌─────────────────┐
│   Botão Assinar │─────────────►│  ModalTrigger   │─────────────────►│ SubscribeModal  │
│   (Nav.jsx)     │              │                 │                  │                 │
└─────────────────┘              └─────────────────┘                  └─────────────────┘
         │                                                                       │
         │                                                                       │
         ▼                                                                       ▼
┌─────────────────┐                                                    ┌─────────────────┐
│ SubscribeContent│◄───────────────────────────────────────────────────│   Formulário    │
│ (Conteúdo)      │                                                    │   de Email      │
└─────────────────┘                                                    └─────────────────┘
```

### 💻 Exemplo de Uso

```jsx
// Em Nav.jsx
import ModalTrigger from './ModalTrigger';
import SubscribeContent from './SubscribeContent'; // Função que retorna o JSX

function Nav() {
  return (
    <nav>
      {/* Outros itens do nav */}
      <ModalTrigger modalContent={<SubscribeContent />}>
        <button className="btn-assinar">Assinar</button>
      </ModalTrigger>
    </nav>
  );
}
```

### 🎨 Personalização

- **Estilos**: O modal usa Tailwind CSS para estilização. Classes podem ser customizadas via props ou CSS adicional.
- **Conteúdo**: O `SubscribeContent` pode ser facilmente substituído por qualquer componente React.
- **Animações**: Transições podem ser ajustadas modificando as classes CSS ou a duração no componente.

Este sistema garante uma implementação robusta, acessível e reutilizável para modais em toda a aplicação.