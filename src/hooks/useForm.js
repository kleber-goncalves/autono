import { useState } from "react";

export const useForm = (initialValues, validateSchema, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Validador de URL robusto
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        // Limpa o erro do campo enquanto o usuário digita
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let tempErrors = {};

        // Lógica de Validação Reutilizável
        Object.keys(validateSchema).forEach((field) => {
            const rules = validateSchema[field];
            const val = values[field];

            if (rules.required && !val) {
                tempErrors[field] = "Campo obrigatório";
            } else if (rules.type === "url" && val && !isValidUrl(val)) {
                tempErrors[field] = "Insira uma URL válida (ex: https://...)";
            } else if (
                rules.type === "email" &&
                val &&
                !/\S+@\S+\.\S+/.test(val)
            ) {
                tempErrors[field] = "E-mail inválido";
            }
        });

        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
            return;
        }

        setLoading(true);
        await onSubmit(values);
        setLoading(false);
    };

    return { values, errors, loading, handleChange, handleSubmit };
};
