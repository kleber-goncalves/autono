
export default function Inputs({
    label,
    name,
    type = "text",
    placeholder,
    values,
    errors,
    handleChange,
}) {
    return (
        <>
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
        </>
    );
}
