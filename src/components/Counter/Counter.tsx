import React, { FC } from "react";
import classNames from "classnames";

import style from './Counter.module.scss';

type CounterColor = 'red';

interface ICounter {
    disabled?: boolean;
    value?: number;
    id?: string;
    color?: CounterColor;
    className?: string;
}

const Counter: FC<ICounter> = (props: ICounter) => {
    const {
        disabled = false,
        value = 0,
        id = '',
        color,
        className,
    } = props;

    return (
        <div
            className={classNames(
                style.wrapper,
                {
                    [ style.hasValue ]: value,
                    [ style[color] ]: color,
                    [ style.isDisabled ]: disabled,
                },
                [className]
            )}
            id={id}
        >
            {value}
        </div>
    );
};

export default Counter;