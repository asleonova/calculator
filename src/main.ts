import { Calculator } from "./calculator";

const calculator = new Calculator();

function performOperation(operation: string) {
  const number1 = +(document.getElementById("number1") as HTMLInputElement)
    .value;
  const number2 = +(document.getElementById("number2") as HTMLInputElement)
    .value;
  let result: number;

  if (operation === "add") {
    result = calculator.add(number1, number2);
  } else if (operation === "subtract") {
    result = calculator.subtract(number1, number2);
  } else if (operation === "multiply") {
    result = calculator.multiply(number1, number2);
  } else if (operation === "divide") {
    result = calculator.divide(number1, number2);
  } else {
    console.error("operation not supported");
  }

  document.getElementById("result").textContent = `Result: ${result}`;
}

document
  .getElementById("add")
  .addEventListener("click", () => performOperation("add"));
document
  .getElementById("subtract")
  .addEventListener("click", () => performOperation("subtract"));
document
  .getElementById("multiply")
  .addEventListener("click", () => performOperation("multiply"));
document
  .getElementById("divide")
  .addEventListener("click", () => performOperation("divide"));
