import React, {useState} from 'react'

export default function Calculator() {
    let [myNumber, setMyNumber] = useState("")
    let input1 = Number(document.querySelector("#input1"))
    let number1 = input1
    let input2 = Number(document.querySelector("#input2"))
    let number2 = input2
    function add (){
            let sum = number1 + number2;
            setMyNumber(sum)
    }
     function minus (){
        let sum = number1 - number2;
        setMyNumber(sum)
}
function multiply (){
    let sum = number1 * number2;
    setMyNumber(sum)
}
function divide (){
    let sum = number1 / number2;
    setMyNumber(sum)
}
    return (
        <div>
            <input type="number" id='input1' />
            <input type="number" id='input2' />
            <button className="btn-primary" onClick={add}>add button</button>
            <button className="btn-secondary" onClick={minus}>minus button</button>
            <button className="btn-success" onClick={multiply}>multiply</button>
            <button className="btn-danger" onClick={divide}>divide</button>
            <div>{myNumber}</div>
        </div>
    )
}
