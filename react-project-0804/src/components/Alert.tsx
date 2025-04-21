import React from "react";

interface Props {
    children: React.ReactNode;
    setClose: () => void;
}

const Alert = ({ children, setClose }: Props) => {
    return (
        <div
            className="alert alert-primary alert-dismissible fade show"
            role="alert"
        >
            {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={setClose}
            ></button>
        </div>
    );
};

export default Alert;