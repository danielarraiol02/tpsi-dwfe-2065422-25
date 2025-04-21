import React from "react";

interface Props {
    children: React.ReactNode;
    color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
    onClickHandler: () => void;
}

const Button = ({ children, color = "primary", onClickHandler }: Props) => {
    return (
        <button
            type="button"
            className={"btn btn-" + color}
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

export default Button;