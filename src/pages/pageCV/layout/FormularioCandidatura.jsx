import React, { useState } from "react";

const FormularioCandidatura = () => {
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        vaga: "",
        cvUrl: "",
        linkedinUrl: "",
        mensagem: "",
    });

    // Lista de vagas disponíveis
    const vagasDisponiveis = [
        "Desenvolvedor Frontend Senior",
        "Engenheiro de Backend",
        "Designer UX/UI",
        "Gerente de Produto",
        "Analista de Dados",
    ];

    // Função para lidar com mudanças nos campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você enviaria os dados para sua API
        console.log("Dados do Formulário:", formData);
        alert(
            "Candidatura enviada com sucesso! Verifique o console para ver os dados (F12)."
        );
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                {/* Cabeçalho */}
                <div className="">
                    <h2 className="mt-2 text-3xl text-black">
                        Envie seu Currículo
                    </h2>

                </div>

                {/* Formulário */}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Campo Nome */}
                        <div>
                            <label
                                htmlFor="nome"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Nome
                            </label>
                            <input
                                id="nome"
                                name="nome"
                                type="text"
                                required
                                value={formData.nome}
                                onChange={handleChange}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Seu nome"
                            />
                        </div>

                        {/* Campo Sobrenome */}
                        <div>
                            <label
                                htmlFor="sobrenome"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Sobrenome
                            </label>
                            <input
                                id="sobrenome"
                                name="sobrenome"
                                type="text"
                                required
                                value={formData.sobrenome}
                                onChange={handleChange}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Seu sobrenome"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Campo Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="exemplo@email.com"
                            />
                        </div>

                        {/* Campo Telefone */}
                        <div>
                            <label
                                htmlFor="telefone"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Telefone
                            </label>
                            <input
                                id="telefone"
                                name="telefone"
                                type="tel"
                                value={formData.telefone}
                                onChange={handleChange}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="(00) 00000-0000"
                            />
                        </div>
                    </div>

                    {/* Campo Dropdown Vagas */}
                    <div>
                        <label
                            htmlFor="vaga"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Vagas
                        </label>
                        <select
                            id="vaga"
                            name="vaga"
                            required
                            value={formData.vaga}
                            onChange={handleChange}
                            className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="" disabled>
                                Selecione a vaga
                            </option>
                            {vagasDisponiveis.map((vaga, index) => (
                                <option key={index} value={vaga}>
                                    {vaga}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Campo URL do CV */}
                    <div>
                        <label
                            htmlFor="cvUrl"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Url do CV
                        </label>
                        <input
                            id="cvUrl"
                            name="cvUrl"
                            type="url"
                            required
                            value={formData.cvUrl}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="https://meuportfolio.com/cv.pdf"
                        />
                    </div>

                    {/* Campo URL do Linkedin */}
                    <div>
                        <label
                            htmlFor="linkedinUrl"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Url do Linkedin
                        </label>
                        <input
                            id="linkedinUrl"
                            name="linkedinUrl"
                            type="url"
                            value={formData.linkedinUrl}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="https://linkedin.com/in/usuario"
                        />
                    </div>

                    {/* Campo Mensagem Longa */}
                    <div>
                        <label
                            htmlFor="mensagem"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Mensagem (Carta de Apresentação)
                        </label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="4"
                            value={formData.mensagem}
                            onChange={handleChange}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Conte-nos um pouco sobre você..."
                        />
                    </div>

                    {/* Botão de Envio */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            Enviar Candidatura
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioCandidatura;
