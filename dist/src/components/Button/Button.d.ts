import React, { FC } from "react";
type ButtonSize = 'ExtraLarge' | 'Large' | 'Medium' | 'Small' | 'ExtraSmall';
type ButtonType = 'primary' | 'secondary' | 'tertiary';
interface IButton {
    children: React.ReactNode;
    disabled?: boolean;
    size?: ButtonSize;
    type?: ButtonType;
    startIcon?: boolean;
    endIcon?: boolean;
    id?: string;
    onClick?: () => void;
}
declare const Button: FC<IButton>;
export default Button;
