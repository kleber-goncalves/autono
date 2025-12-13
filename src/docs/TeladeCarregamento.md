# Tela de Carregamento

## Visão Geral

Este projeto é uma aplicação React que implementa uma tela de carregamento elegante e profissional para simular o layout da página principal enquanto os recursos são carregados. A tela de carregamento utiliza animações CSS e skeletons para proporcionar uma experiência de usuário fluida e moderna.

## Componente LoadingScreen

O componente `LoadingScreen.jsx` é responsável por renderizar a tela de carregamento. Ele simula o layout da página principal, incluindo:

- **Cabeçalho (Header)**: Skeleton do logo "AUTONO" e links de navegação (Tecnologia, Sobre, Carreiras), além do botão "Assinar".
- **Conteúdo Central**: Skeletons para o título principal "O FUTURO DA MOBILIDADE CHEGOU" e subtítulo "Prove uma direção autônoma mais segura com Autono."
- **Spinner de Carregamento**: Uma animação de dominós que indica o progresso do carregamento.

### Estrutura do Componente

```jsx
const LoadingScreen = () => {
    return (
        <div className="min-h-screen bg-gray-200 p-4">
            <div className="max-w-8xl mx-auto">
                {/* Header Skeleton */}
                <header className="flex justify-between items-center py-4 px-25">
                    {/* Logo e Navegação */}
                </header>
                
                {/* Conteúdo Central */}
                <div className="flex flex-col items-center justify-center pt-7 pb-16 text-center">
                    {/* Títulos Skeletons */}
                </div>
                
                {/* Spinner */}
                <div className="flex pt-50 justify-center items-center">
                    <div className="spinner">
                        {/* Elementos do Spinner */}
                    </div>
                </div>
            </div>
        </div>
    );
};
```

## Estilização com App.css

A estilização da tela de carregamento é definida no arquivo `App.css`, utilizando Tailwind CSS e animações personalizadas:

### Spinner de Dominós

O spinner é uma animação inspirada em dominós caindo, criada com CSS puro:

```css
.spinner {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: -75px;
}

.spinner span {
  position: absolute;
  top: 50%;
  left: var(--left);
  width: 65px;
  height: 12px;
  background: #9f9d9d;
  animation: dominos 3s ease infinite;
  box-shadow: 2px 2px 3px 0px rgb(85, 84, 84);
}

@keyframes dominos {
  50% { opacity: 0.7; }
  75% { transform: rotate(90deg); }
  80% { opacity: 1; }
}
```

Cada elemento do spinner tem um atraso de animação (`animation-delay`) para criar o efeito sequencial.

### Skeletons

Os skeletons utilizam classes do Tailwind CSS como `bg-gray-400`, `animate-pulse` para simular o carregamento de conteúdo.

## Integração com App.jsx

O componente `LoadingScreen` é integrado no `App.jsx` através de um estado de carregamento (`isLoading`):

```jsx

import LoadingScreen from "./components/LoadingScreen";


function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleComplete = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 8500); // Mínimo 8.5 segundos
        };

        if (document.readyState === "complete") {
            handleComplete();
        } else {
            window.addEventListener("load", handleComplete);
        }

        return () => {
            window.removeEventListener("load", handleComplete);
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="animate-fade-in">
                    <BrowserRouter>
                        {/* Rotas da aplicação */}
                    </BrowserRouter>
                </div>
            )}
        </>
    );
}
```

### Funcionamento

1. **Estado Inicial**: `isLoading` é `true`, exibindo o `LoadingScreen`.
2. **Detecção de Carregamento**: O `useEffect` aguarda o evento `load` da janela ou verifica se o documento já está completo.
3. **Transição**: Após o carregamento, aguarda 8.5 segundos (para garantir uma experiência consistente) e define `isLoading` como `false`.
4. **Renderização**: A aplicação principal com roteamento é exibida com uma animação de fade-in.

## Benefícios

- **Experiência do Usuário**: Mantém o usuário engajado durante o carregamento com uma pré-visualização do layout.
- **Performance**: Simula o carregamento de recursos pesados como imagens e scripts.
- **Design Consistente**: Utiliza os mesmos estilos e layout da página principal.
- **Acessibilidade**: Animações suaves e feedback visual claro.

## Personalização

Para ajustar o tempo mínimo de carregamento, modifique o valor em `setTimeout` no `App.jsx`. Para alterar cores ou animações, edite as classes CSS no `App.css`.

Este componente garante uma transição suave e profissional entre o carregamento e o conteúdo principal da aplicação.