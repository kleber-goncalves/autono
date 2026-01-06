import Sec_Lists from "../../../../components/Sec-Lists";

function Descricao() {
    return (
        <section className=" bg-white border-t border-black mx-auto py-20 md:py-36 px-6 md:px-0 lg:px-0 xl:px-0 flex flex-col  ">
            <Sec_Lists
                title="Responsibilidade"
                variant="black"
                li_1="Projetar, desenvolver e otimizar modelos de deep learning, criar e ajustar arquiteturas neurais para tarefas como visão computacional, processamento de linguagem natural ou outras aplicações complexas de IA."
                li_2="Preparar e processar grandes conjuntos de dados de alta qualidade, realizar pré-processamento, limpeza, engenharia de características e preparação de datasets para garantir que os modelos aprendam com dados de alta qualidade."
                li_3="Treinar, validar e ajustar modelos com métricas claras, conduzir treinamento de redes, ajuste de hiperparâmetros e avaliação de desempenho para maximizar precisão, eficiência e robustez dos modelos."
                li_4="Implementar e gerenciar pipelines de deep learning com frameworks como PyTorch ou TensorFlow, construir fluxos de trabalho completos de produção — desde a ingestão de dados até o deploy dos modelos em ambientes escaláveis e monitorados."
                li_5="Integrar modelos em sistemas e soluções reais para melhorar a eficiência e a qualidade dos resultados, colaborar com equipes de engenharia de software e de produto para garantir que modelos possam ser usados de forma eficiente dentro de aplicações ou plataformas existentes."
                lis_v2="Manter-se atualizado e documentar o trabalho em IA e deep learning, monitorar as últimas pesquisas e ferramentas em IA e deep learning, documentar experimentos, decisões técnicas e resultados de forma clara para facilitar replicação e colaboração."
            />
        </section>
    );
}

export default Descricao