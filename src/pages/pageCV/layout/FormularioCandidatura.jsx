import { useForm } from "../../../hooks/useForm";

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
        <label className="block text-black text-base mb-3">
            {label}
        </label>
        <input
            name={name}
            type={type}
            value={values[name] || ""} // Fallback para string vazia
            onChange={handleChange}
            placeholder={placeholder}
            className={`appearance-none block w-full px-3 py-3 border rounded-md shadow-sm sm:text-sm transition-all
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

const FormularioCandidatura = () => {
    const schema = {
        nome: { required: true, type: "name" },
        sobrenome: { required: true, type: "surname" },
        email: { required: true, type: "email" },
        telefone: { required: true, type: "phone" },
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
        <section className="min-h-screen bg-white flex border  items-center justify-center py-30 px-4 sm:px-6 lg:px-120">
            <div className="w-full space-y-8 bg-white  ">
                {/* Cabeçalho */}
                <div className="mb-14">
                    <h2 className="mt-2 text-2xl text-black">
                        Envie seu Currículo
                    </h2>
                </div>
                {/* Formulário */}
                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Campo Nome */}
                    <FormField
                        label="Nome"
                        name="nome"
                        placeholder="Seu nome"
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                    />
                    {/* Campo Sobrenome */}
                    <FormField
                        label="Sobrenome"
                        name="sobrenome"
                        placeholder="Seu sobrenome"
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                    />

                    {/* Campo Email */}
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
                        label="Telefone"
                        name="telefone"
                        type="telefone"
                        placeholder="(00) 00000-0000"
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                    />
                    {/* Campo URL do CV */}
                    <FormField
                        label="URL do Currículo (PDF/Drive)"
                        name="cvUrl"
                        placeholder="https://meudrive.com/cv.pdf"
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                    />

                    {/* Campo URL do Linkedin */}
                    <FormField
                        label="LinkedIn (Opcional)"
                        name="linkedinUrl"
                        placeholder="https://linkedin.com/in/..."
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                    />
                    {/* Campo Select manual integrado ao hook */}
                    <div>
                        <label className="block text-base mb-3">Vaga</label>
                        <select
                            name="vaga"
                            value={values.vaga}
                            onChange={handleChange}
                            className={`block w-full px-3 py-3 border rounded-md shadow-sm sm:text-sm
                                    ${
                                        errors.vaga
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                        >
                            <option value="" disabled>Selecione a vaga...</option>
                            <option value="Engenheiro elétrico">
                                Engenheiro elétrico
                            </option>
                            <option value="Cientista de dados">
                                Cientista de dados
                            </option>
                            <option value="Pesquisador de Inteligencia Artificial">
                                Pesquisador de Inteligencia Artificial
                            </option>
                            <option value="Engenheiro Deep Learning">
                                Engenheiro Deep Learning
                            </option>
                            <option value="Outra vaga: enviar seu currículo">
                                Outra vaga: enviar seu currículo
                            </option>
                        </select>
                        {errors.vaga && (
                            <span className="text-xs text-red-500 mt-1">
                                {errors.vaga}
                            </span>
                        )}
                    </div>

                    {/* Campo Mensagem Longa */}
                    <div>
                        <label
                            htmlFor="mensagem"
                            className="block text-base mb-3"
                        >
                            Mensagem (Carta de Apresentação)
                        </label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="4"
                            value={values.mensagem}
                            onChange={handleChange}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm hover:border-black hover:border-2 hover:bg-gray-200"
                            placeholder="Conte-nos um pouco sobre você..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`flex-row flex border rounded-lg w-fit max-w-xs items-center tracking-wider py-3 px-4 text-white cursor-pointer text-xs md:text-base transition-all transform active:scale-[0.98]
                            ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "border-white bg-black hover:bg-white hover:inset-shadow-sm hover:inset-shadow-indigo-500 hover:shadow-lg/20 hover:shadow-[#ffffff] hover:text-black"
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
        </section>
    );
};

export default FormularioCandidatura;
