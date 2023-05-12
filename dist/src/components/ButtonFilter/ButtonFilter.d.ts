import { FC } from "react";
interface IButtonFilter {
    disabled?: boolean;
    value?: number;
    id?: string;
    counterId?: string;
    onClick?: () => void;
}
declare const ButtonFilter: FC<IButtonFilter>;
export default ButtonFilter;
