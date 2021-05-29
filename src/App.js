import React, { useEffect, useState } from "react";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
    const [previousTotal, setPreviousTotal] = useState(0);
    const [runningTotal, setRunningTotal] = useState(0);
    const [previousOperator, setPreviousOperator] = useState(null);
    const [newTotal, setNewTotal] = useState(true);

    const numberClick = (number) => {
        if (runningTotal === 0 || newTotal) {
            setRunningTotal("");
            setNewTotal(false);
        }
        if (number == ".") {
            //&& runningTotal.contain donta contain . already
            appendDecimal(runningTotal);
        } else {
            setRunningTotal(parseFloat("" + runningTotal + number));
        }
    };

    const clearClick = () => {
        if (runningTotal === 0) {
            setPreviousOperator(null);
            setPreviousTotal(null);
        }
        setRunningTotal(0);
    };
    const appendDecimal = (runningTotal) => {
        const newTotal = runningTotal + ".";
        console.log(newTotal);
        setRunningTotal(runningTotal + ".");
    };

    const operatorClick = (operator) => {
        // if there was a previous operator recorded as having been clicked, perform
        // the operation for the previous operator
        if (previousTotal && previousOperator) {
            switch (previousOperator) {
                case "+":
                    add(runningTotal);
                    break;
                case "-":
                    subtract(runningTotal);
                    break;
                case "*":
                    multiply(runningTotal);
                    break;
                case "/":
                    divide(runningTotal);
                    break;
            }
        }

        // if the 'equals' button was clicked, clear the previous operator, otherwise
        // record what the previous operator was
        if (operator === "=") {
            setPreviousOperator(null);
        } else {
            setPreviousOperator(operator);
            setRunningTotal("");
        }
        // replace the previous total with the current running total and flag that a
        // new total has been calculated

        setPreviousTotal(runningTotal);
        setNewTotal(true);
    };

    const add = (number) => {
        setRunningTotal(parseFloat(previousTotal) + parseFloat(number));
    };

    const subtract = (number) => {
        setRunningTotal(parseFloat(previousTotal) - parseFloat(number));
    };

    const multiply = (number) => {
        setRunningTotal(parseFloat(previousTotal) * parseFloat(number));
    };

    const divide = (number) => {
        if (number !== 0) {
            setRunningTotal(parseFloat(previousTotal) / parseFloat(number));
        } else {
            setRunningTotal("Not valid operation");
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <div data-testid="running-total" className="display">
                    {runningTotal}
                </div>
                <Calculator
                    handleNumber={numberClick}
                    handleOperator={operatorClick}
                    handleClear={clearClick}
                />
            </div>
        </div>
    );
}

export default App;
