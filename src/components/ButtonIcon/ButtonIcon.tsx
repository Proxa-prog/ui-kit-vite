import React, { FC } from "react";
import classNames from "classnames";

import {
    AddButton,
    PlayButton,
} from "/src/assets/index";

import style from './ButtonIcon.module.scss';

type ButtonIconSize = 'Large' | 'Medium' | 'Small';
type ButtonIconType = 'primary' | 'secondary' | 'tertiary' | 'error' | 'MoreColorOff' | 'MoreColorOn' | 'settings';

interface IButtonIcon {
    children?: React.ReactNode;
    disabled?: boolean;
    size?: ButtonIconSize;
    type?: ButtonIconType;
    id?: string;
    onClick?: () => void;
}

const ButtonIcon: FC<IButtonIcon> = (props: IButtonIcon) => {
    const {
        children,
        disabled = false,
        size = 'Large',
        type = 'secondary',
        id = '',
        onClick,
    } = props;

    const handleButtonClick = () => {
        onClick && onClick();
    };

    return (
        <button
            className={classNames(
                style.button,
                {
                    [ style[size] ]: size,
                    [ style[type] ]: type,
                }
            )}
            disabled={disabled}
            id={id}
            onClick={handleButtonClick}
        >
            <div className={style.imageWrapper}>
                {type === 'primary' && <AddButton />}
                {type === 'secondary' && <PlayButton />}
                {children}
            </div>
        </button>
    );
};

export default ButtonIcon;