import React, { useState } from "react";

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const handleAdd = () => setResult(Number(num1) + Number(num2));
    const handleSubtract = () => setResult(Number(num1) - Number(num2));
    const handleMultiply = () => setResult(Number(num1) * Number(num2));
    const handleDivide = () => {
        if (num2 === "0" || num2 === 0) {
            setResult("Cannot divide by zero");
        } else {
            setResult(Number(num1) / Number(num2));
        }
    };

    return ( <
        div style = {
            { padding: "20px", maxWidth: "300px", margin: "auto" } } >
        <
        h2 > Simple Calculator < /h2>

        <
        input type = "number"
        value = { num1 }
        onChange = {
            (e) => setNum1(e.target.value) }
        placeholder = "Enter first number"
        style = {
            { width: "100%", marginBottom: "10px", padding: "5px" } }
        />

        <
        input type = "number"
        value = { num2 }
        onChange = {
            (e) => setNum2(e.target.value) }
        placeholder = "Enter second number"
        style = {
            { width: "100%", marginBottom: "10px", padding: "5px" } }
        />

        <
        div style = {
            { display: "flex", justifyContent: "space-between", marginBottom: "10px" } } >
        <
        button onClick = { handleAdd } > + < /button> <
        button onClick = { handleSubtract } > - < /button> <
        button onClick = { handleMultiply } > * < /button> <
        button onClick = { handleDivide } > /</button >
        <
        /div>

        <
        div style = {
            { border: "1px solid black", padding: "10px", minHeight: "30px" } } >
        Result: { result !== null ? result : "" } <
        /div> <
        /div>
    );
};

export default Calculator;