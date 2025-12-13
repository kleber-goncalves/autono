# Sistema de Telas de Carregamento

## Visão Geral

Este projeto implementa um sistema avançado de telas de carregamento personalizadas para cada página da aplicação React. Utilizando Code Splitting com `React.lazy()`, o sistema garante que cada rota tenha sua própria tela de loading, proporcionando uma experiência de usuário consistente e profissional. O sistema inclui um hook personalizado para controlar o tempo mínimo de exibição das telas e um wrapper que integra tudo de forma elegante, incluindo a recalibragem automática das animações GSAP/ScrollTrigger após o carregamento.

## Telas de Carregamento

Cada página possui uma tela de carregamento específica, localizada em `src/components/Loadings/`, que simula o layout da página correspondente:

- **LoadingScreenAutono**: Tela para a página inicial (`/`), simulando o header, títulos principais e spinner.
- **LoadingScreenTecnologia**: Tela para `/tecnologia`, adaptada ao layout da página de tecnologia.
- **LoadingScreenSobre**: Tela para `/sobre`, simulando o conteúdo da página "Sobre".
- **LoadingScreenCarreiras**: Tela para `/carreiras`, com layout específico para carreiras.

Cada tela utiliza skeletons e animações CSS (definidas em `App.css`) para criar uma pré-visualização realista do conteúdo que será carregado.

## Hook useMinimumLoadingTime

O hook `useMinimumLoadingTime.js` garante que a tela de carregamento seja exibida por um tempo mínimo, evitando transições abruptas em carregamentos muito rápidos.

### Funcionamento

```javascript
const useMinimumLoadingTime = (minDuration = 1000) => {
    const [isMinTimeElapsed, setIsMinTimeElapsed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMinTimeElapsed(true);
        }, minDuration);

        return () => clearTimeout(timer);
    }, [minDuration]);

    return isMinTimeElapsed;
};
```

- **Parâmetro**: `minDuration` (padrão: 1000ms) - Tempo mínimo em milissegundos.
- **Retorno**: Booleano indicando se o tempo mínimo expirou.
- **Propósito**: Previne que a tela de loading desapareça muito rapidamente, mantendo consistência visual.

## Componente MinimumLoadingWrapper

O `MinimumLoadingWrapper.jsx` é um componente wrapper que combina o hook de tempo mínimo com o sistema de lazy loading do React e garante a recalibragem das animações GSAP/ScrollTrigger.

### Funcionamento

```jsx
const MinimumLoadingWrapper = ({ children, fallback, minDuration = 1000 }) => {
    const isMinTimeElapsed = useMinimumLoadingTime(minDuration);

    useEffect(() => {
        if (isMinTimeElapsed) {
            const t = setTimeout(() => {
                if (ScrollTrigger && typeof ScrollTrigger.refresh === "function") {
                    ScrollTrigger.refresh();
                }
            }, 50);
            return () => clearTimeout(t);
        }
    }, [isMinTimeElapsed]);

    if (isMinTimeElapsed) return children;
    return fallback;
};
```

### Conexão com useMinimumLoadingTime

- O wrapper utiliza o hook `useMinimumLoadingTime` para verificar se o tempo mínimo de carregamento passou.
- Só renderiza o componente real (`children`) quando tanto o bundle do `React.lazy()` foi carregado quanto o tempo mínimo expirou.
- Caso contrário, exibe o `fallback` (a tela de loading customizada).

### Recalibragem do ScrollTrigger

Quando o tempo mínimo expira e o componente real é renderizado, o wrapper chama `ScrollTrigger.refresh()` após um pequeno delay (50ms). Isso é crucial porque:

- **Problema**: Durante o carregamento, o layout da página pode mudar drasticamente (de uma tela de loading simples para um layout complexo com animações).
- **Solução**: `ScrollTrigger.refresh()` recalcula todas as posições e triggers das animações baseadas em scroll, garantindo que componentes como `Card-eft.jsx` funcionem corretamente.
- **Componentes Afetados**: Qualquer componente que use GSAP/ScrollTrigger (como `Card-eft.jsx`) depende dessa recalibragem para que suas animações de entrada, pin e zoom sejam posicionadas corretamente no novo layout.

### Props

- `children`: O componente da página (carregado via `React.lazy()`).
- `fallback`: A tela de loading a ser exibida durante o carregamento.
- `minDuration`: Tempo mínimo de exibição da tela (padrão: 1000ms).

## Integração no App.jsx

O `App.jsx` integra todo o sistema utilizando `React.lazy()` para Code Splitting e o `MinimumLoadingWrapper` para cada rota.

### Estrutura

```jsx
// Code Splitting com React.lazy()
const Autono = React.lazy(() => import("./pages/page1/autono"));
const Tecnologia = React.lazy(() => import("./pages/page2-tec/Tecnologia"));
// ...

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MinimumLoadingWrapper
                            fallback={<LoadingScreenAutono />}
                            minDuration={900}
                        >
                            <Autono />
                        </MinimumLoadingWrapper>
                    }
                />
                {/* Outras rotas similares */}
            </Routes>
        </BrowserRouter>
    );
}
```

### Como Funciona a Integração

1. **Code Splitting**: Cada página é carregada sob demanda com `React.lazy()`.
2. **Wrapper por Rota**: Cada rota é envolvida pelo `MinimumLoadingWrapper`.
3. **Fallback Customizado**: Cada rota tem sua própria tela de loading (`LoadingScreen*`).
4. **Controle de Tempo**: O `minDuration` garante tempo mínimo de 900ms para consistência.
5. **Transição Suave**: A tela de loading só desaparece quando o componente é carregado E o tempo mínimo passou.
6. **Recalibragem Automática**: Após a transição, `ScrollTrigger.refresh()` é chamado para ajustar animações em componentes como `Card-eft.jsx`.

## Benefícios do Sistema

- **Performance**: Code Splitting reduz o tamanho inicial do bundle.
- **Experiência do Usuário**: Telas customizadas por página mantêm o engajamento.
- **Consistência**: Tempo mínimo evita flashes de loading.
- **Animações Corretas**: Recalibragem automática do ScrollTrigger garante funcionamento perfeito das animações GSAP.
- **Manutenibilidade**: Arquitetura modular facilita adição de novas telas.
- **Reutilização**: Hook e wrapper podem ser usados em outros projetos.

## Personalização

- **Tempo Mínimo**: Ajuste `minDuration` no `App.jsx` para cada rota.
- **Novas Telas**: Crie novos componentes em `src/components/Loadings/` seguindo o padrão.
- **Estilos**: Modifique animações e skeletons no `App.css`.
- **Delay de Refresh**: Ajuste o setTimeout no `MinimumLoadingWrapper` se necessário para layouts mais complexos.

Este sistema garante uma experiência de carregamento profissional e otimizada para toda a aplicação, com animações GSAP funcionando perfeitamente após a transição.
