import React from "react";
import { useSelector } from "react-redux";


function CounterInput() {
    const counter = useSelector(state => state.counter)
    return <h1>Counter Value : {counter}</h1>

}

export default CounterInput;

