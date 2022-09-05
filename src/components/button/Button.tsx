import { ButtonHTMLAttributes, FC } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tertiary" | "outline" | "link";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    extraClass?: string;
}

const Button: FC<IButtonProps> = (props) => {
    const { onClick, children, type } = props;
    return (
        <button onClick={onClick} type={type} disabled={props.disabled}>
            {children}
        </button>
    );
};

export default Button;
