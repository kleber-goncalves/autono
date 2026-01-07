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

    // Validador de e-mail simples
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    // Validador de nome/sobrenome: aceita letras (com acentos), espaços, hífen e apóstrofo. Mínimo 2 caracteres.
    const isValidName = (name) => {
        if (!name) return false;
        const trimmed = name.trim();
        return /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/u.test(trimmed);
    };

    // Validador de telefone (formato Brasil comum)
    // Aceita:
    //  - somente números: 11987654321
    //  - com DDD entre parênteses: (11)98765-4321
    //  - com +55 opcional: +55 11 98765-4321
    const isValidPhone = (phone) => {
        if (!phone) return false;
        const p = phone.trim();
        // Regex que permite +55 opcional, DDD opcional e números com 8 ou 9 dígitos para unidade.
        return /^(\+?55\s?)?(\(?\d{2}\)?\s?)?(9?\d{4}[- ]?\d{4})$/.test(p);
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

            if (rules.required && (!val || String(val).trim() === "")) {
                tempErrors[field] = "Campo obrigatório";
                return;
            }

            if (rules.type === "url" && val && !isValidUrl(val)) {
                tempErrors[field] = "Insira uma URL válida (ex: https://...)";
                return;
            }

            if (rules.type === "email" && val && !isValidEmail(val)) {
                tempErrors[field] = "E-mail inválido";
                return;
            }

            // Validação de nome
            if (rules.type === "name" && val && !isValidName(val)) {
                tempErrors[field] =
                    "Nome inválido (use letras; mínimo 2 caracteres)";
                return;
            }

            // Validação de sobrenome
            if (rules.type === "surname" && val && !isValidName(val)) {
                tempErrors[field] =
                    "Sobrenome inválido (use letras; mínimo 2 caracteres)";
                return;
            }

            // Validação de telefone
            if (rules.type === "phone" && val && !isValidPhone(val)) {
                tempErrors[field] =
                    "Telefone inválido (ex: (11) 98765-4321 ou +55 11 98765-4321)";
                return;
            }

            // possibilidade de regras customizadas (função)
            if (typeof rules.validate === "function") {
                const customMsg = rules.validate(val, values);
                if (customMsg) {
                    tempErrors[field] = customMsg;
                    return;
                }
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
