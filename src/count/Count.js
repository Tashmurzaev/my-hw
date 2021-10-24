import './Count.css'
import React, {useState} from 'react';

function Count () {

    const [count, setCount] = useState(0);

    const countHundlerPlus = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const countHundlerMinus = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <div className="count">
            <button onClick={countHundlerPlus}>+</button>
            <p>{count}</p>
            <button onClick={countHundlerMinus}>-</button>
        </div>
    )
}

export default Count;