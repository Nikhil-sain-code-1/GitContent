import React, { useState } from 'react'

const CounterApp = () => {
    const [obj, setObj] = useState(0)
    function add() {
        setObj(obj + 1)
    }
    function sub() {
        setObj(obj - 1)
    }
    function div() {
        setObj(obj /2)
    }
      function Mul() {
        setObj(obj *2)
    }
    return (
        <div>
            <h1 style={{ fontSize: '60px' }} >{obj}</h1>
            <button onClick={add} style={{ fontSize: '20px' }}>Add</button><br /><br />
            <button onClick={sub} style={{ fontSize: '20px' }}>Sub</button><br /><br />
            <button onClick={div} style={{ fontSize: '20px' }}>Div</button><br /><br />
            <button onClick={Mul} style={{ fontSize: '20px' }}>Mul</button>
            

        </div>
    )
}

export default CounterApp