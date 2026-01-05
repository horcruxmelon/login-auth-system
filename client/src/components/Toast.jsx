import { useEffect } from "react";
import "../index.css";

const Toast = ({ message, type = "success", onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast ${type}`}>
            <span>{type === "success" ? "✓" : "✕"}</span>
            <p>{message}</p>
        </div>
    );
};

export default Toast;
