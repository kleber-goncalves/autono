import React from "react";
import { useForm } from "../../../hooks/useForm";

// ✅ 1. DECLARE FORA DO COMPONENTE PRINCIPAL
// Isso evita que o componente seja recriado e perca o foco nos inputs
const FormField = ({
    label,
    name,
    type = "text",
    placeholder,
    values,
    errors,
    handleChange,
}) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <input
            name={name}
            type={type}
            value={values[name] || ""} // Fallback para string vazia
            onChange={handleChange}
            placeholder={placeholder}
            className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm transition-all
                ${
                    errors[name]
                        ? "border-red-500 bg-red-50 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-black hover:bg-gray-100"
                }`}
        />
        {errors[name] && (
            <span className="text-xs text-red-500 mt-1 font-medium">
                {errors[name]}
            </span>
        )}
    </div>
);

const FormularioV2 = () => {
    const schema = {
        nome: { required: true },
        sobrenome: { required: true },
        email: { required: true, type: "email" },
        vaga: { required: true },
        cvUrl: { required: true, type: "url" },
        linkedinUrl: { type: "url" },
    };

    const enviarParaAPI = async (dados) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Payload enviado:", dados);
        alert("Candidatura enviada com sucesso!");
    };

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

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
                <div className="border-b pb-4">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Trabalhe Conosco
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Preencha os dados abaixo para se candidatar.
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            label="Nome"
                            name="nome"
                            placeholder="Seu nome"
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                        />
                        <FormField
                            label="Sobrenome"
                            name="sobrenome"
                            placeholder="Seu sobrenome"
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="exemplo@email.com"
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                        />
                        <FormField
                            label="URL do Currículo (PDF/Drive)"
                            name="cvUrl"
                            placeholder="https://meudrive.com/cv.pdf"
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            label="LinkedIn (Opcional)"
                            name="linkedinUrl"
                            placeholder="https://linkedin.com/in/..."
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                        />
                        {/* Exemplo de Select manual integrado ao hook */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Vaga
                            </label>
                            <select
                                name="vaga"
                                value={values.vaga}
                                onChange={handleChange}
                                className={`block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm
                                    ${
                                        errors.vaga
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                            >
                                <option value="">Selecione...</option>
                                <option value="frontend">Frontend Dev</option>
                                <option value="backend">Backend Dev</option>
                            </select>
                            {errors.vaga && (
                                <span className="text-xs text-red-500 mt-1">
                                    {errors.vaga}
                                </span>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 px-4 rounded-md text-white font-bold text-lg transition-all transform active:scale-[0.98]
                            ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
                            }`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Processando...
                            </span>
                        ) : (
                            "Enviar Candidatura"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormularioV2;
