import Card from "../../../components/Card";
import Card_II from "../../../components/Card_II";

import ProjectImage from "../../../components/ProjectImage";



function Sec_carreira() {
    return (
        <section className="bg-black max-w-8xl mx-auto gap-y-30 py-30 flex flex-col ">
            <div className="grid grid-cols-2 items-center gap-y-20">
                <div className="flex flex-col px-6 lg:px-59 ">
                    <Card
                        classNameBarraII="h-17"
                        classNameBaseII="mt-17 gap-8"
                        variant="white"
                        text="VAGAS"
                        title="Pensando diferente, podemos mudar o futuro do transporte"
                        text_2="Somos uma empresa movida por convicção: acreditar que mobilidade pode — e deve — ser limpa, inteligente e acessível. Estamos construindo o futuro do transporte com veículos elétricos, tecnologia de ponta e visão sustentável. Se você também acredita que inovação + consciência = transformação real, essa vaga pode ser sua chance de fazer a diferença."
                    />
                </div>
                <div className="flex flex-col">
                    <ProjectImage id="carreira" />
                </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-x-90 gap-y-30 px-6 pb-20 lg:px-59">
                <div>
                    <Card_II
                        mt="mtII"
                        size="sizeI"
                        variant="white"
                        title="ENGENHEIRO ELÉTRICO"
                        text="Curitiba, PR"
                        text_2="Você vai atuar em projetos elétricos e eletrotécnicos — desde planejamento, dimensionamento e especificação, até supervisão, execução e manutenção de instalações elétricas. Seu papel será garantir que sistemas, máquinas e infraestrutura elétrica funcionem com segurança, eficiência e dentro das normas técnicas."
                        text_button="Enviar CV"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Card_II
                        classNameTitle="text-lg"
                        variant="white"
                        title="CIENTISTA DE DADOS"
                        text="São Paulo, SP"
                        text_2="Você fará parte de um time multidisciplinar dedicado a coletar, organizar, analisar e interpretar grandes volumes de dados — de fontes diversas e com formatos variados — para gerar insights estratégicos e suporte a decisões da empresa. Sua função não será apenas analisar dados, mas construir modelos, hipóteses e soluções inteligentes que contribuam para resultados concretos e inovação."
                        text_button="Enviar CV"
                    />
                </div>
                <div>
                    <Card_II
                        mt="mtI"
                        classNameTitle="text-lg"
                        variant="white"
                        title="PESQUISADOR DE INTELIGÊNCIA ARTIFICIAL"
                        text="Brasília, DF"
                        text_2="Você fará parte de um time dedicado a pesquisar e criar algoritmos e modelos de IA de ponta, com o propósito de resolver problemas complexos, gerar insights impactantes e construir as bases da próxima geração de sistemas inteligentes. Sua contribuição vai além do código: você vai contribuir para descobertas, estudar tendências, propor caminhos novos, e ajudar a dar forma a ideias que podem mudar o rumo de produtos e soluções."
                        text_button="Enviar CV"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Card_II
                        classNameTitle="text-lg"
                        mt="mtII"
                        variant="white"
                        title="ENGENHEIRO DEEP LEARNING"
                        text="Santa Catarina, SC"
                        text_2="Você fará parte de uma equipe técnica de ponta, empenhada em criar e implementar modelos complexos de aprendizagem profunda para resolver problemas reais — desde visão computacional, processamento de linguagem natural, até sistemas autônomos ou análise de dados de larga escala. Vai trabalhar desde o design da arquitetura até o deploy em produção, contribuindo para soluções inteligentes e escaláveis."
                        text_button="Enviar CV"
                    />
                </div>
                <div>
                    <Card_II
                        size="sizeII"
                        variant="black"
                        title="Não achou a vaga que procurava? Tudo bem! Envie seu CV.
"
                        classNameText="hidden"
                        classNameTextII="hidden"
                        text_button="Enviar CV"
                    />
                </div>
            </div>
        </section>
    );
}

export default Sec_carreira;