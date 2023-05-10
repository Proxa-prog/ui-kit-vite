import React, { FC } from "react";
import classNames from "classnames";

import {
    AddImage,
    ArrowLeftImage,
    TrashImage,
} from "/src/assets/index";

import style from './ButtonLabel.module.scss';

type ButtonIconType = 'labelPrevERZL' | 'labelAdd' | 'labelTrash';

interface IButtonLabel {
    disabled?: boolean;
    type?: ButtonIconType;
    label?: string;
    id?: string;
    onClick?: () => void;
}

const ButtonLabel: FC<IButtonLabel> = (props: IButtonLabel) => {
    const {
        disabled = false,
        type = 'labelPrevERZL',
        label = 'Label',
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
                    [ style[type] ]: type,
                }
            )}
            disabled={disabled}
            id={id}
            onClick={handleButtonClick}
        >
            <div className={style.imageWrapper}>
                {type === 'labelPrevERZL' && <ArrowLeftImage />}
                {type === 'labelAdd' && <AddImage />}
                {type === 'labelTrash' && <TrashImage />}
            </div>
            {label}
        </button>
    );
};

export default ButtonLabel;