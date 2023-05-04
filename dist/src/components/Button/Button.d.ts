import { FC } from "react";
interface IButton {
    children: JSX.Element | string;
    onClick?: () => void;
    id?: string;
}
declare const Button: FC<IButton>;
export default Button;
