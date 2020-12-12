import React, { useState } from "react";
import "./Calculator.scss";

function Calculator() {
  // Variaveis
  const [screenNumber, setScreenNumber] = useState<string>("0");

  function receiveDigit(digit: string) {
    setScreenNumber((previous) => {
      if (previous === "0") {
        return digit;
      } else {
        return previous + digit;
      }
    });
  }

  function receiveEquals() {
    alert("opa jnenem");
  }

  function receiveAC() {
    setScreenNumber("0");
  }

  function generateButton(digit: string) {
    var classNames = digit === "0" ? "zeroButton " : "roundButton ";
    var myFunction: () => void = () => 0;

    if (/^\d+$/.test(digit)) {
      classNames += "blackButton ";
      myFunction = () => {
        receiveDigit(digit);
      };
    } else {
      switch (digit) {
        case "AC":
          classNames += "whiteButton ";
          myFunction = receiveAC;
          break;
        case "+/-":
          classNames += "whiteButton ";
          break;
        case "%":
          classNames += "whiteButton ";
          myFunction = () => {
            receiveDigit("%");
          };
          break;
        case "=":
          classNames += "orangeButton ";
          myFunction = () => {
            receiveEquals();
          };
          break;
        default:
          classNames += "orangeButton";
          myFunction = () => {
            receiveDigit(digit);
          };
      }
    }

    return (
      <span onClick={myFunction} className={classNames}>
        {digit}
      </span>
    );
  }

  return (
    <div className="calculator">
      <h1>Calculator - Iphone</h1>
      <div>
        <h1 className="windowNumber">{screenNumber}</h1>
        <div>
          <div className="lineItems">
            {generateButton("AC")}
            {generateButton("+/-")}
            {generateButton("%")}
            {generateButton("/")}
          </div>
          <div className="lineItems">
            {generateButton("7")}
            {generateButton("8")}
            {generateButton("9")}
            {generateButton("*")}
          </div>
          <div className="lineItems">
            {generateButton("4")}
            {generateButton("5")}
            {generateButton("6")}
            {generateButton("-")}
          </div>
          <div className="lineItems">
            {generateButton("1")}
            {generateButton("2")}
            {generateButton("3")}
            {generateButton("+")}
          </div>
          <div className="lineItems">
            {generateButton("0")}
            {generateButton(",")}
            {generateButton("=")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
