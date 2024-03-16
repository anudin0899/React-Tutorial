import React from 'react'
import { useState } from 'react'
import useCustomMemo from '../../Helpers/Custom-Memo/use-customMemo';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const squaredValue = () => {
        console.log("expression evaluate...");
        return counter * counter;
    }

    const memoisedsquaredValue = useCustomMemo(squaredValue, [counter]);

    return (
        <div className='container'>
            <span style={{ fontSize: '18px', fontWeight: "bold", marginBottom: "10px" }}>Counter : {counter}</span>
            <span style={{ fontSize: '18px', fontWeight: "bold", marginBottom: "10px" }}>SquareCounter : {memoisedsquaredValue}</span>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>

            <div className="flex" style={{ flexDirection: "column", marginTop: "10px", width: "100%", justifyContent: "ceneter" }}>
                <span style={{ fontSize: '18px', fontWeight: "bold", marginBottom: "10px" }}>Counter : {counter2}</span>
                <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter