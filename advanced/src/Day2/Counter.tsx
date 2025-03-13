import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    const increaseValue = () => {
        setCount(count + 1)
    }
    const decreaseValue = () => {
        setCount(count - 1)
    }
    const resetValue = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>Day 2</h1>
            <h1>Counter</h1>
            {count}
            <button onClick={increaseValue}>+</button>
            <button onClick={decreaseValue}>-</button>
            <button onClick={resetValue}>reset</button>
        </div>
    );
}