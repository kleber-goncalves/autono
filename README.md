# Autono

![Autono Logo](public/vite.svg) <!-- Substitua por um logo real se disponível -->

Um site portfólio moderno e interativo para a Autono, desenvolvido com React e Vite. O projeto destaca animações suaves, scroll progressivo e integração de elementos 3D para uma experiência visual imersiva.

## 📋 Descrição

O Autono é um site responsivo que apresenta os serviços, tecnologias e informações da empresa Autono. Construído com tecnologias modernas como React, GSAP para animações e integração com Three.js para elementos 3D, oferece uma navegação fluida e envolvente.

### Funcionalidades Principais

-   **Páginas Dinâmicas**: Inclui seções para Home, Tecnologia, Sobre e Carreiras.
-   **Animações GSAP**: Efeitos de zoom, pin e transições suaves durante o scroll.
-   **Scroll Suave**: Implementado com Lenis para uma experiência de rolagem premium.
-   **Indicador de Progresso**: Barra de progresso no topo que acompanha o scroll.
-   **Integração 3D**: Suporte para modelos 3D interativos usando React Three Fiber, permitindo visualizações imersivas de produtos ou elementos decorativos.
-   **Design Responsivo**: Otimizado para desktop e mobile com Tailwind CSS.
-   **Carregamento Otimizado**: Telas de carregamento personalizadas para melhor UX.

## 🛠️ Tecnologias Utilizadas

-   **Frontend**:

    -   React 19
    -   Vite (para build e desenvolvimento rápido)
    -   Tailwind CSS (para estilização)
    -   GSAP (para animações avançadas)
    -   Lenis (para scroll suave)
    -   React Router DOM (para navegação)

-   **3D e Interatividade**:

    -   Three.js
    -   React Three Fiber (@react-three/fiber)
    -   React Three Drei (@react-three/drei) - para helpers e controles

-   **Ícones e UI**:

    -   Lucide React
    -   React Icons

-   **Ferramentas de Desenvolvimento**:
    -   ESLint (para linting)
    -   Vite Plugin React

## 🚀 Instalação e Execução

### Pré-requisitos

-   Node.js (versão 18 ou superior)
-   npm ou yarn

### Passos para Instalação

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/kleber-goncalves/autono.git
    cd autono
    ```

2. **Instale as dependências**:

    ```bash
    npm install
    ```

3. **Para integração 3D (opcional)**:
   Se desejar adicionar elementos 3D, instale as dependências adicionais:

    ```bash
    npm install three @types/three @react-three/fiber @react-three/drei
    ```

4. **Execute o projeto em modo desenvolvimento**:

    ```bash
    npm run dev
    ```

5. **Build para produção**:
    ```bash
    npm run build
    npm run preview
    ```

## 📖 Como Usar

### Estrutura do Projeto

-   `src/pages/`: Contém as páginas principais (autono.jsx, Tecnologia.jsx, Sobre.jsx, Carreiras.jsx).
-   `src/components/`: Componentes reutilizáveis como Nav, Card, LoadingScreen, etc.
-   `src/hooks/`: Hooks customizados para animações e efeitos.
-   `src/utils/`: Utilitários como MinimumLoadingWrapper e Quebrar-texto.
-   `src/style/`: Estilos globais e específicos.
-   `public/`: Assets estáticos, incluindo modelos 3D (.glb).

### Adicionando Integração 3D

Com base na conversa com a IA Gemini, para adicionar um modelo 3D:

1. **Prepare o modelo**: Coloque o arquivo .glb na pasta `public/`.
2. **Crie um componente Scene**: Use React Three Fiber para renderizar o modelo.
3. **Integre no layout**: Adicione o componente em uma página, garantindo altura definida no Tailwind.

Exemplo básico de componente 3D:

```jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("/modelo.glb");
    return <primitive object={scene} {...props} />;
}

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Stage environment="city" intensity={0.6}>
                <Model scale={0.01} />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    );
}
```

Para ajustes de tamanho e interatividade, consulte a documentação do React Three Fiber.

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

### Diretrizes

-   Mantenha o código limpo e bem documentado.
-   Teste suas mudanças em diferentes dispositivos.
-   Siga as convenções de nomenclatura existentes.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Contato

-   **Autor**: Kleber Gonçalves
-   **Email**: [seu-email@example.com]
-   **LinkedIn**: [Seu LinkedIn]

---

Desenvolvido com ❤️ usando React e Vite. - Garanta que ScrollTrigger.update seja chamado a cada evento de scroll do Lenis.

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
