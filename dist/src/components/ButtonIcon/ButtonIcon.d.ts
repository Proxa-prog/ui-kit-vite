import { FC } from "react";
type ButtonIconSize = 'Large' | 'Medium' | 'Small';
type ButtonIconType = 'primary' | 'secondary' | 'tertiary' | 'tertiaryERZL' | 'error' | 'moreColorOff' | 'moreColorOn' | 'settings';
interface IButtonIcon {
    children?: React.ReactNode;
    disabled?: boolean;
    size?: ButtonIconSize;
    type?: ButtonIconType;
    id?: string;
    onClick?: () => void;
}
declare const ButtonIcon: FC<IButtonIcon>;
export default ButtonIcon;
