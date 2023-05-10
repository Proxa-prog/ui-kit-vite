import React, { FC } from "react";
import classNames from "classnames";

import {
    AddImage,
    PlayImage,
    MoreHorizImage,
    TrashImage,
    SettingsImage,
} from "/src/assets/index";

import style from './ButtonIcon.module.scss';

type ButtonIconSize = 'Large' | 'Medium' | 'Small';
type ButtonIconType = 'primary' | 'secondary' | 'tertiary' | 'tertiaryERZL' | 'error' | 'MoreColorOff' | 'MoreColorOn' | 'settings';

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
        type = 'primary',
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
                {type === 'primary' && <AddImage />}
                {type === 'secondary' && <PlayImage />}
                {type === 'tertiary' && <MoreHorizImage />}
                {type === 'tertiaryERZL' && <MoreHorizImage />}
                {type === 'MoreColorOff' && <MoreHorizImage />}
                {type === 'MoreColorOn' && <MoreHorizImage />}
                {type === 'error' && <TrashImage />}
                {type === 'settings' && <SettingsImage />}
                {children}
            </div>
        </button>
    );
};

export default ButtonIcon;