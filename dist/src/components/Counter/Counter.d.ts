import { FC } from "react";
type CounterColor = 'red' | 'blue';
interface ICounter {
    disabled?: boolean;
    value?: number;
    id?: string;
    color?: CounterColor;
    className?: string;
}
declare const Counter: FC<ICounter>;
export default Counter;
