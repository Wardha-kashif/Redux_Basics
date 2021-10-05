import React from "react";
import { useDispatch } from "react-redux";
import { incrementAction, decrementAction } from './Action';

function CounterOutput() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(incrementAction())}>+</button>
            <button onClick={() => dispatch(decrementAction())}>-</button>
        </div>
    )
}

export default CounterOutput