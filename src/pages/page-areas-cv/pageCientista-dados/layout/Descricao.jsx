import Sec_Lists from "../../../../components/Sec-Lists";

function Descricao() {
    return (
        <section className=" bg-white border-t border-black mx-auto py-20 md:py-36 px-6 md:px-0 lg:px-0 xl:px-0 flex flex-col  ">
            <Sec_Lists
                title="Responsibilidade"
                variant="black"
                li_1="Coletar, preparar e organizar grandes volumes de dados, estruturar dados brutos de múltiplas fontes, fazer limpeza, transformação e garantir que estejam prontos para análise profunda"
                li_2="Analisar e interpretar dados complexos, explorar padrões, tendências e correlações em dados estruturados e não estruturados para gerar insights que impactem decisões estratégicas do negócio"
                li_3="Desenvolver e validar modelos preditivos e algorítmicos, criar, testar e ajustar modelos de machine learning e algoritmos estatísticos que permitam prever comportamentos, automatizar análises e gerar resultados confiáveis."
                li_4="Construir visualizações e dashboards informativos que permitam transformar análises complexas em gráficos, relatórios e painéis intuitivos para que todas as áreas da empresa compreendam e usem os insights gerados."
                li_5="Comunicar resultados e propor soluções estratégicas, apresentar entregáveis de forma clara para stakeholders técnicos e não técnicos, ajudando a orientar decisões operacionais e de negócio com base em dados."
                lis_v2="Colaborar com equipes multidisciplinares e evoluir processos, trabalhar lado a lado com engenheiros, analistas, gestores e times de produto para integrar soluções de dados, melhorar processos existentes e propor inovações contínuas."
            />
        </section>
    );
}

export default Descricao