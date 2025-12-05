import React from "react";

export default function Intro_cmp({
    titulo,
    texto,
    image,
    className = "",
    classNameTitle = "",
    classNameText = "",
    classNameImage = "",
    ...props
}) {
    const baseClass =
        "max-w-8xl mx-auto px-6 lg:px-6 py-20 flex flex-col items-center ";

    const baseTitle = "text-6xl max-w-3xl leading-snug tracking-wide text-black text-center";

    const baseText =
        "text-black text-2xl leading-relaxed tracking-wide max-w-2xl text-center";

    return (
        <div className={`${baseClass} ${className}`} {...props}>
            <h1 className={`${baseTitle} ${classNameTitle}`}>{titulo}</h1>
            {image && (
                <img src={image} alt={titulo} className={classNameImage} />
            )}
            <p className={`${baseText} ${classNameText}`}>{texto}</p>
        </div>
    );
}
