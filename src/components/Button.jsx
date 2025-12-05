import { TfiArrowRight } from "react-icons/tfi";

export default function Button({ text_button, variant = "white", className = "", ...props }) {
    const baseButtonClassName = "bg-black flex-row  text-white  flex border  cursor-pointer rounded-lg w-fit max-w-xs items-center   tracking-wider  transition ";
    const divPClassName = "px-4 py-2 border-r   hover:border-black";
    const divArrowClassName =
        "cursor-pointer text-xl px-3 py-2.5 hover:border-black hover:border-l";
    
    const variants = {
        white: {
            baseButtonClassName: "text-black border-black bg-white hover:bg-black hover:text-white",
            divPClassName: "border-black hover:border-white",
            divArrowClassName:
                "hover:border-white ",
        },
        black: {
            baseButtonClassName: "text-white border-white bg-black hover:bg-white hover:text-black",
            divPClassName: "border-white hover:border-black",
            divArrowClassName:
                "hover:border-black ",
        },
    };

    const styles = variants[variant];

    return (
        <button className={`${baseButtonClassName} ${styles.baseClassName} ${className}`} {...props}>
            <div className={`${divPClassName} ${styles.divPClassName} `}>
                <p className=" cursor-pointer">{text_button}</p>
            </div>
            <div className={`${divArrowClassName} ${styles.divArrowClassName}`}>
                <TfiArrowRight />
            </div>
        </button>
    );
}
