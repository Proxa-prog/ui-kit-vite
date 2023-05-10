import React, { FC } from "react";
import classNames from "classnames";

import {
    ArrowLeft,
    ArrowRight,
} from "/src/assets/index";

import style from './Button.module.scss';

type ButtonSize = 'ExtraLarge' | 'Large' | 'Medium' | 'Small' | 'ExtraSmall';
type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface IButton {
    children: React.ReactNode;
    disabled?: boolean;
    size?: ButtonSize;
    type?: ButtonType;
    startIcon?: string;
    endIcon?: string;
    id?: string;
    onClick?: () => void;
}

const Button: FC<IButton> = (props: IButton) => {
    const {
        children,
        disabled = false,
        startIcon,
        endIcon,
        size = 'Medium',
        type = 'Primary',
        id = '',
        onClick,
    } = props;

    const handleButtonClick = () => {
        onClick && onClick();
    };

    return (
        <button
            className={classNames(
                style.Primary,
                {
                    [ style[size] ]: size,
                    [ style[type] ]: type,
                }
            )}
            disabled={disabled}
            id={id}
            onClick={handleButtonClick}
        >
            {
                startIcon
                && type !== 'Tertiary'
                && <ArrowLeft />
            }
            {children}
            {
                endIcon
                && type !== 'Tertiary'
                && <ArrowRight />
            }
        </button>
    );
};

export default Button;