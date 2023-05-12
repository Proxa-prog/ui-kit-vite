import { FC } from "react";
interface IButtonForm {
    title?: string;
    id?: string;
    onClick?: () => void;
}
declare const ButtonForm: FC<IButtonForm>;
export default ButtonForm;
