import { FC } from "react";
type ButtonIconType = 'labelPrevERZL' | 'labelAdd' | 'labelTrash';
interface IButtonLabel {
    disabled?: boolean;
    type?: ButtonIconType;
    label?: string;
    id?: string;
    onClick?: () => void;
}
declare const ButtonLabel: FC<IButtonLabel>;
export default ButtonLabel;
