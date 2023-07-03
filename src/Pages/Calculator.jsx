import { useState } from "react";

import "./Calculator.css";

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ["/", "*", "+", "-", "."];

    const updateCalc = (value) => {
        try {
            if (
                (ops.includes(value) && calc == " ") ||
                (ops.includes(value) && ops.includes(calc.slice(-1)))
            ) {
                return;
            }

            setCalc(calc + value);

            if (!ops.includes(value)) {
                setResult(eval(calc + value).toString());
            }
        } catch (e) {
            console.log(e + "1");
        }
    };

    const createDigits = () => {
        try {
            const digits = [];

            for (let i = 1; i < 10; i++) {
                digits.push(
                    <button onClick={() => updateCalc(i.toString())} key={i}>
                        {i}
                    </button>
                );
            }

            return digits;
        } catch (e) {
            console.log(e + "2");
        }
    };

    const calculate = () => {
        try {
            setCalc(eval(calc).toString());
        } catch (e) {
            console.log(e + "3");
        }
    };

    const deleteLast = () => {
        try {
            if (calc === "") {
                return;
            }

            const value = calc.slice(0, -1);

            setCalc(value);
        } catch (e) {
            console.log(e + "4");
        }
    };

    return (
        <div className="content">
            <h1>Calculator</h1>
            <div className="calculator">
                {/* Input Display */}
                <div className="display">
                    {result ? <span>({result})</span> : ""}&nbsp;{calc || "0"}
                </div>

                {/* Operator Buttons */}
                <div className="operators">
                    <button onClick={() => updateCalc("/")}>/</button>
                    <button onClick={() => updateCalc("*")}>*</button>
                    <button onClick={() => updateCalc("+")}>+</button>
                    <button onClick={() => updateCalc("-")}>-</button>

                    <button onClick={deleteLast}>DEL</button>
                </div>

                {/* Diggits Buttons */}
                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc("0")}>0</button>
                    <button onClick={() => updateCalc(".")}>.</button>

                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
