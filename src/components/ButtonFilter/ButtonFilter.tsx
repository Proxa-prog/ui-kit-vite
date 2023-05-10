import React, { FC } from "react";
import classNames from "classnames";

import { FilterImage } from "/src/assets/index";
import { Counter } from "/src/index";

import style from './ButtonFilter.module.scss';


interface IButtonFilter {
    disabled?: boolean;
    value?: number;
    id?: string;
    onClick?: () => void;
}

const ButtonFilter: FC<IButtonFilter> = (props: IButtonFilter) => {
    const {
        disabled = false,
        value = 0,
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
            )}
            disabled={disabled}
            id={id}
            onClick={handleButtonClick}
        >
             <FilterImage />
            <Counter
                className={style.counter}
                value={value}
                disabled={disabled}
            />
        </button>
    );
};

export default ButtonFilter;