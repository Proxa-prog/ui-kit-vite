import { FC } from "react";

import style from './Button.module.scss';

interface IButton {
    children: JSX.Element | string;
    onClick?: () => void;
    id?: string;
}

const Button: FC<IButton> = (props: IButton) => {
    const {
        children,
        onClick,
        id,
    } = props;

    return (
        <button
            id={id}
            className={style.button}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;