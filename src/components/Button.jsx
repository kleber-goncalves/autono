import React from "react";

export default function Button({ children, className = "", ...props }) {
    const baseClassName =
        "bg-black text-black flex flex-row border border-black cursor-pointer rounded-lg w-fit max-w-xs items-center gap-2 px-8 py-3 tracking-wider hover:bg-black hover:border-white hover:text-white transition";
    return (
        <button className={`${baseClassName} ${className}`} {...props}>
            {children}
        </button>
    );
}
