import { PropsWithChildren } from 'react';

const enum BUTTON_TYPES {
    base = 'base'
} 

export type ButtonProps = {
    type?: BUTTON_TYPES
}

const getButtonStyle = (type = BUTTON_TYPES.base): string => 
({
    [BUTTON_TYPES.base]: "font-lato p-3 bg-light-black text-white font-medium text-base w-60 rounded",
}[type])


const Button: React.FC<PropsWithChildren<ButtonProps>> = ({children, type}) => {
    const buttonStyle = getButtonStyle(type);

    return (
        <button className={buttonStyle}>
            {children}
        </button>
    );
}

export default Button;