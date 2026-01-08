import React, { useState } from "react";
import SubscribeModal from "./SubscribeModal";

/**
 * Props:
 *  - children: React element que será o trigger (ex: <a>Assinar</a> ou <button>Assinar</button>)
 *  - modalContent: ReactNode com o conteúdo que será renderizado dentro do modal
 *  - modalProps: props opcionais para o SubscribeModal (height, ariaLabel, etc.)
 *
 * Uso simples:
 *  <ModalTrigger modalContent={<MyContent/>}>
 *    <a href="/assinar" className="text-sm">Assinar</a>
 *  </ModalTrigger>
 */
export default function ModalTrigger({
    children,
    modalContent,
    modalProps = {},
}) {
    const [open, setOpen] = useState(false);

    // Se não for elemento React válido, renderiza um botão simples
    const trigger = React.isValidElement(children) ? (
        React.cloneElement(children, {
            onClick: (e) => {
                // evita navegação (já que você falou que será usado como link)
                if (e && e.preventDefault) e.preventDefault();
                if (typeof children.props.onClick === "function")
                    children.props.onClick(e);
                setOpen(true);
            },
            "aria-haspopup": "dialog",
            role: children.props.role ?? "button",
            tabIndex: children.props.tabIndex ?? 0,
        })
    ) : (
        <button
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            className="px-4 py-2 rounded-md bg-black text-white"
        >
            {children}
        </button>
    );

    return (
        <>
            {trigger}
            <SubscribeModal
                isOpen={open}
                onClose={() => setOpen(false)}
                {...modalProps}
            >
                {modalContent}
            </SubscribeModal>
        </>
    );
}
