import React, { FC } from "react";
import classNames from "classnames";

import { ReactComponent as LogoRight } from '/src/assets/images/keyboard_arrow_right.svg'
import { ReactComponent as LogoLeft } from '/src/assets/images/keyboard_arrow_left.svg'

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
                && <LogoLeft />
            }
            {children}
            {
                endIcon
                && type !== 'Tertiary'
                && <LogoRight />
            }
        </button>
    );
};

export default Button;