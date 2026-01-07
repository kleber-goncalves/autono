# useForm Hook - README

## Descrição

O `useForm` é um hook personalizado do React projetado para simplificar o gerenciamento de formulários, validação de dados e submissão. Ele fornece uma API unificada para lidar com estados de formulário, erros de validação e estados de carregamento, tornando o desenvolvimento de formulários mais eficiente e menos propenso a erros. O hook suporta validações integradas para tipos comuns como nome, e-mail, telefone e URL, além de permitir regras customizadas.

Este hook é ideal para aplicações React que necessitam de formulários robustos, como cadastros de usuários, formulários de contato ou qualquer cenário onde validação e submissão de dados sejam essenciais.

---

## Pré-requisitos

-   React (versão 16.8 ou superior, para suporte a hooks)
-   Conhecimento básico de React hooks e manipulação de estado

---

## Como Usar

O hook `useForm` requer três parâmetros principais:

### ✅ 1️⃣ initialValues (estado inicial)

Define a estrutura inicial do formulário. Cada campo do input deve corresponder a uma chave neste objeto.

```javascript
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
};
```

**Regra importante:** O atributo `name` do input deve ser idêntico à chave no `initialValues`.

### ✅ 2️⃣ validateSchema (regras de validação)

Especifica as regras de validação para cada campo. Suporta tipos pré-definidos e validações customizadas.

```javascript
const validateSchema = {
    firstName: {
        required: true,
        type: "name",
    },
    lastName: {
        required: true,
        type: "surname",
    },
    email: {
        required: true,
        type: "email",
    },
    phone: {
        required: true,
        type: "phone",
    },
    website: {
        required: false,
        type: "url",
    },
};
```

**Tipos suportados:**

-   `"name"`: Valida nomes (letras, acentos, espaços, mínimo 2 caracteres)
-   `"surname"`: Valida sobrenomes (mesmas regras de nome)
-   `"email"`: Valida endereços de e-mail
-   `"phone"`: Valida telefones brasileiros (ex: (11) 98765-4321 ou +55 11 98765-4321)
-   `"url"`: Valida URLs (ex: https://...)

Para validações customizadas, use a propriedade `validate` como uma função:

```javascript
validateSchema = {
    customField: {
        required: true,
        validate: (value, allValues) => {
            if (value.length < 5)
                return "Campo deve ter pelo menos 5 caracteres";
            return null; // Sem erro
        },
    },
};
```

### ✅ 3️⃣ onSubmit (ação de submissão)

Função assíncrona que é chamada após a validação bem-sucedida. Recebe os valores do formulário como parâmetro.

```javascript
const onSubmit = async (values) => {
    console.log("Dados enviados:", values);
    // Exemplo: await api.post("/users", values);
};
```

O hook só chama `onSubmit` se não houver erros de validação.

---

## Retorno do Hook

O `useForm` retorna um objeto com as seguintes propriedades:

-   `values`: Estado atual dos valores do formulário
-   `errors`: Objeto com mensagens de erro por campo
-   `loading`: Booleano indicando se a submissão está em andamento
-   `handleChange`: Função para atualizar valores (use no `onChange` dos inputs)
-   `handleSubmit`: Função para submeter o formulário (use no `onSubmit` do form)

---

## Exemplo Completo de Formulário

```jsx
import { useForm } from "./hooks/useForm";

export default function Formulario() {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        website: "",
    };

    const validateSchema = {
        firstName: { required: true, type: "name" },
        lastName: { required: true, type: "surname" },
        email: { required: true, type: "email" },
        phone: { required: true, type: "phone" },
        website: { required: false, type: "url" },
    };

    const onSubmit = async (values) => {
        console.log("Dados enviados:", values);
        // await api.post("/users", values);
    };

    const { values, errors, loading, handleChange, handleSubmit } = useForm(
        initialValues,
        validateSchema,
        onSubmit
    );

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="firstName"
                placeholder="Nome"
                value={values.firstName}
                onChange={handleChange}
            />
            {errors.firstName && <span>{errors.firstName}</span>}

            <input
                name="lastName"
                placeholder="Sobrenome"
                value={values.lastName}
                onChange={handleChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}

            <input
                name="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}

            <input
                name="phone"
                placeholder="Telefone"
                value={values.phone}
                onChange={handleChange}
            />
            {errors.phone && <span>{errors.phone}</span>}

            <input
                name="website"
                placeholder="Website"
                value={values.website}
                onChange={handleChange}
            />
            {errors.website && <span>{errors.website}</span>}

            <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
            </button>
        </form>
    );
}
```

---

## Mapa Mental Rápido

### useForm(...)

```javascript
useForm(
    initialValues, // Estrutura dos dados
    validateSchema, // Regras de validação
    onSubmit // Ação final
);
```

### Input

```javascript
<input
    name={key} // Deve corresponder a initialValues.key
    value={values[key]} // Vincula ao estado
    onChange={handleChange} // Atualiza o estado
/>
```

---

## Por Que Isso É Poderoso?

-   **Zero repetição de código:** Centraliza lógica de validação e estado.
-   **Validação centralizada:** Fácil de manter e escalar.
-   **Ideal para React + APIs:** Integra-se perfeitamente com chamadas assíncronas.
-   **Base sólida para Clean Code:** Promove arquitetura limpa e reutilizável.
-   **Flexibilidade:** Suporte a validações customizadas e tipos pré-definidos.

---

## Dicas de Uso

-   Sempre defina `name` nos inputs correspondendo às chaves de `initialValues`.
-   Use `errors[field]` para exibir mensagens de erro condicionalmente.
-   Desabilite o botão de submit durante `loading` para evitar submissões múltiplas.
-   Para formulários complexos, considere dividir em componentes menores.

Para mais detalhes, consulte o código fonte em `src/hooks/useForm.js`.
