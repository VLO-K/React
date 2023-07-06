import { useState } from "react";
import * as math from "mathjs";

import "./Calculator.css";

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ["/", "*", "+", "-", "."];

    const updateCalc = (value) => {
        if (
            (ops.includes(value) && calc === " ") ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }

        setCalc((prevCalc) => prevCalc + value);

        if (!ops.includes(value)) {
            try {
                const evaluatedResult = math.evaluate(calc + value);
                setResult(evaluatedResult.toString());
            } catch (error) {
                setResult("Error");
            }
        }
    };

    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>
                    {i}
                </button>
            );
        }

        return digits;
    };

    const calculate = () => {
        try {
            const evaluatedResult = math.evaluate(calc);
            setCalc(evaluatedResult.toString());
            setResult("");
        } catch (error) {
            setResult("Error");
        }
    };

    const deleteLast = () => {
        if (calc === "") {
            return;
        }

        const value = calc.slice(0, -1);

        setCalc(value);
    };

    return (
        <div className="content">
            <div className="calc-wrapper">
                <h1>Calculator</h1>
                <div className="calculator">
                    {/* Input Display */}
                    <div className="display">
                        {result ? <span>({result})</span> : ""}&nbsp;
                        {calc || "0"}
                    </div>

                    {/* Operator Buttons */}
                    <div className="operators">
                        <button onClick={() => updateCalc("/")}>/</button>
                        <button onClick={() => updateCalc("*")}>*</button>
                        <button onClick={() => updateCalc("+")}>+</button>
                        <button onClick={() => updateCalc("-")}>-</button>

                        <button onClick={deleteLast}>DEL</button>
                    </div>

                    {/* Digits Buttons */}
                    <div className="digits">
                        {createDigits()}
                        <button onClick={() => updateCalc("0")}>0</button>
                        <button onClick={() => updateCalc(".")}>.</button>

                        <button onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
