import React, { FC } from "react";
import classNames from "classnames";

import { AddLinkImage } from "/src/assets/index";

import style from './ButtonForm.module.scss';


interface IButtonForm {
    title?: string;
    id?: string;
    onClick?: () => void;
}

const ButtonForm: FC<IButtonForm> = (props: IButtonForm) => {
    const {
        title = 'Title',
        id = '',
        onClick,
    } = props;

    const handleButtonClick = () => {
        onClick && onClick();
    };

    return (
        <button
            className={classNames(
                style.button
            )}
            id={id}
            onClick={handleButtonClick}
        >
            <div className={style.imageWrapper}>
                <AddLinkImage />
            </div>
            {title}
        </button>
    );
};

export default ButtonForm;