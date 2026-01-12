# Implementação de Modelos 3D em React com Three.js e Tailwind CSS

Este guia documenta a integração de elementos 3D em aplicações React modernas, combinando a potência do Three.js com interfaces responsivas criadas com Tailwind CSS. Aprenda a renderizar modelos 3D interativos de forma eficiente e acessível.

## Instalação

Para implementar modelos 3D, instale as dependências essenciais:

```bash
npm install three @types/three @react-three/fiber @react-three/drei
```

## Implementação Básica

### Criando o Componente Scene.jsx

Crie um componente `Scene.jsx` que utiliza React Three Fiber para renderizar o modelo:

```jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("/caminho/para/modelo.glb");
    return <primitive object={scene} {...props} />;
}

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Stage environment="city" intensity={0.6}>
                <Model />
            </Stage>
        </Canvas>
    );
}
```

### Integrando no Layout Tailwind

Integre o componente em uma página como `App.jsx` ou `Sobre.jsx`, definindo um container com altura fixa:

```jsx
import React from "react";
import Scene from "./components/Scene";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="h-[500px] w-full">
                <Scene />
            </div>
            {/* Outros componentes */}
        </div>
    );
}
```

## Ajustando o Tamanho do Modelo

Modelos 3D podem aparecer muito pequenos ou gigantes devido a configurações inadequadas de escala, câmera ou container.

### Por que meu modelo aparece muito pequeno?

Isso ocorre quando o container pai não tem altura definida no Tailwind ou a escala do modelo está incorreta. Sem altura, o Canvas não consegue calcular o tamanho adequado.

### Por que meu modelo ficou gigante?

O oposto acontece com FOV (Field of View) muito alto ou escala excessiva, fazendo o modelo ocupar mais espaço do que o esperado.

### Soluções Técnicas

1. **Ajuste a propriedade `scale` no componente `<Model />`**:

    ```jsx
    <Model scale={0.01} /> // Reduz a escala para 1% do tamanho original
    ```

2. **Modifique o `fov` (Field of View) na câmera do `<Canvas />`**:

    ```jsx
    <Canvas camera={{ fov: 30 }}>  // FOV menor para zoom in
    ```

3. **Defina altura fixa ou relativa no container Tailwind**:
    ```jsx
    <div className="h-[500px] w-full">  // Altura fixa de 500px
    ```

## Performance e Otimização

### Por que Comprimir?

Modelos 3D não comprimidos podem ser pesados, impactando o carregamento da página. Use ferramentas como `gltf-pipeline` ou `gltfjsx` para otimizar arquivos .glb.

**Benefícios:**

-   **Velocidade de carregamento**: Arquivos menores melhoram a UX e Core Web Vitals.
-   **Uso de memória da GPU**: Compressão reduz o consumo de recursos gráficos.
-   **SEO**: Páginas mais rápidas rankeiam melhor nos motores de busca.

### Diferença entre .glb bruto e comprimido

Um arquivo .glb bruto contém geometria e texturas sem otimização, enquanto um comprimido com Draco usa algoritmos de compressão para reduzir tamanho sem perder qualidade visual significativa.
