# FormularioCandidatura - README

## Descrição

O `FormularioCandidatura` é um componente React que implementa um formulário de candidatura para vagas de emprego. Ele utiliza o hook personalizado `useForm` para gerenciar o estado, validação e submissão dos dados. O componente é projetado para coletar informações pessoais, profissionais e de contato do candidato, com validações robustas e feedback visual em tempo real. É ideal para páginas de recrutamento, permitindo uma experiência de usuário fluida e segura.

Este componente é parte do projeto Autono e demonstra uma integração prática entre hooks customizados e componentes reutilizáveis em React.

---

## Dependências

-   **React**: Para renderização e gerenciamento de estado.
-   **useForm Hook**: Hook personalizado localizado em `src/hooks/useForm.js`, responsável por validação, estado e submissão.
-   **Tailwind CSS**: Para estilização responsiva e moderna.

---

## Como Funciona

### Integração com o Hook useForm

O componente `FormularioCandidatura` importa e utiliza o hook `useForm` da seguinte forma:

```jsx
import { useForm } from "../../../hooks/useForm";
```

O hook é chamado com três parâmetros principais:

1. **initialValues**: Define os valores iniciais de cada campo do formulário.
2. **validateSchema**: Especifica as regras de validação para cada campo.
3. **onSubmit**: Função assíncrona executada após validação bem-sucedida.

```jsx
const { values, errors, loading, handleChange, handleSubmit } = useForm(
    {
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        vaga: "",
        cvUrl: "",
        linkedinUrl: "",
        mensagem: "",
    },
    schema,
    enviarParaAPI
);
```

-   **values**: Estado atual dos campos.
-   **errors**: Objeto com mensagens de erro por campo.
-   **loading**: Indica se a submissão está em andamento.
-   **handleChange**: Função para atualizar valores (usada em `onChange` dos inputs).
-   **handleSubmit**: Função para submeter o formulário (usada em `onSubmit` do form).

### Estrutura do Componente

O componente é dividido em seções principais:

#### 1. **Componente FormField (Reutilizável)**

Um componente auxiliar para renderizar campos de input com label, validação e estilização consistente.

-   **Props**:

    -   `label`: Texto do rótulo.
    -   `name`: Nome do campo (deve corresponder a `initialValues`).
    -   `type`: Tipo do input (padrão: "text").
    -   `placeholder`: Placeholder do input.
    -   `values`: Estado dos valores (do hook).
    -   `errors`: Estado dos erros (do hook).
    -   `handleChange`: Função de mudança (do hook).

-   **Funcionalidades**:
    -   Estilização condicional baseada em erros (borda vermelha para inválido).
    -   Exibição de mensagens de erro abaixo do campo.

#### 2. **Campos do Formulário**

-   **Nome**: Campo obrigatório, validado como "name".
-   **Sobrenome**: Campo obrigatório, validado como "surname".
-   **Email**: Campo obrigatório, validado como "email".
-   **Telefone**: Campo obrigatório, validado como "phone".
-   **URL do CV**: Campo obrigatório, validado como "url".
-   **LinkedIn**: Campo opcional, validado como "url".
-   **Vaga**: Select obrigatório com opções pré-definidas.
-   **Mensagem**: Textarea opcional para carta de apresentação.

#### 3. **Validação e Submissão**

-   **Schema de Validação**:

    ```jsx
    const schema = {
        nome: { required: true, type: "name" },
        sobrenome: { required: true, type: "surname" },
        email: { required: true, type: "email" },
        telefone: { required: true, type: "phone" },
        vaga: { required: true },
        cvUrl: { required: true, type: "url" },
        linkedinUrl: { type: "url" },
    };
    ```

    -   Campos obrigatórios são marcados com `required: true`.
    -   Tipos como "name", "email", etc., acionam validações específicas no hook.

-   **Função de Submissão**:
    ```jsx
    const enviarParaAPI = async (dados) => {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulação
        console.log("Payload enviado:", dados);
        alert("Candidatura enviada com sucesso!");
    };
    ```
    -   Simula envio para API (substitua por chamada real, ex.: `await fetch('/api/candidaturas', { method: 'POST', body: JSON.stringify(dados) })`).

#### 4. **Estado de Loading e Feedback**

-   O botão de submit é desabilitado durante `loading`.
-   Exibe um spinner animado e texto "Processando..." enquanto envia.
-   Mensagens de erro aparecem em vermelho abaixo dos campos inválidos.

### Estilização

-   Utiliza Tailwind CSS para responsividade e design moderno.
-   Campos inválidos recebem borda vermelha e fundo rosado.
-   Hover effects para melhor UX.
-   Botão com animação de escala ao clicar.

---

## Como Usar

1. **Importe o Componente**:

    ```jsx
    import FormularioCandidatura from "./path/to/FormularioCandidatura";
    ```

2. **Renderize em uma Página**:

    ```jsx
    function PaginaCandidatura() {
        return (
            <div>
                <FormularioCandidatura />
            </div>
        );
    }
    ```

3. **Personalize**:
    - Ajuste `initialValues` e `schema` para adicionar/remover campos.
    - Modifique `enviarParaAPI` para integrar com sua API.
    - Customize estilos via classes Tailwind.

---

## Exemplo de Uso Completo

```jsx
import FormularioCandidatura from "./FormularioCandidatura";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <FormularioCandidatura />
        </div>
    );
}
```

---

## Benefícios

-   **Reutilizabilidade**: Componente `FormField` pode ser usado em outros formulários.
-   **Validação Automática**: O hook `useForm` cuida de toda a lógica de validação.
-   **UX Melhorada**: Feedback visual imediato e estados de loading.
-   **Escalabilidade**: Fácil de adicionar novos campos ou validações.
-   **Integração Simples**: Apenas importe e use; o hook gerencia o resto.

---

## Notas Técnicas

-   O componente usa `useState` internamente via `useForm`, mas não adiciona estados extras.
-   Para campos customizados (ex.: select), integre manualmente com `handleChange`.
-   Teste em navegadores modernos para compatibilidade com Tailwind e React hooks.

Para mais detalhes, consulte os arquivos `src/pages/pageCV/layout/FormularioCandidatura.jsx` e `src/hooks/useForm.js`.
