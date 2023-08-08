const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector(".input");
const displayOutput = document.querySelector(".output");

let input = "";

for (let key of keys) {
  const value = key.dataset.key;

  const handleClick = () => {
    if (value == "clear") {
      input = "";
      displayInput.innerHTML = "";
      displayOutput.innerHTML = "";
    } else if (value == "backspace") {
      input = input.slice(0, -1);
      displayInput.innerHTML = CleanInput(input);
    } else if (value == "=") {
      let result = eval(input);

      displayOutput.innerHTML = result;
    } else if (value == "brackets") {
      if (
        input.indexOf("(") == -1 ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf("(") < input.lastIndexOf(")"))
      ) {
        input += "(";
      } else if (
        (input.indexOf("(") != -1 && input.indexOf(")") == -1) ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf("(") > input.lastIndexOf(")"))
      ) {
        input += ")";
      }

      displayInput.innerHTML = CleanInput(input);
    } else {
      input += value;
      displayInput.innerHTML = CleanInput(input);
    }
  };

  key.addEventListener("click", handleClick);
}

function CleanInput(input) {
  let inputArray = input.split("");
  let inputArrayLength = inputArray.length;

  for (let i = 0; i < inputArrayLength; i++) {
    if (inputArray[i] == "*") {
      inputArray[i] = `<span class ="operator">x</span>`;
    } else if (inputArray[i] == "/") {
      inputArray[i] = `<span class ="operator">/</span>`;
    } else if (inputArray[i] == "+") {
      inputArray[i] = `<span class ="operator">+</span>`;
    } else if (inputArray[i] == "-") {
      inputArray[i] = `<span class ="operator">-</span>`;
    } else if (inputArray[i] == "(") {
      inputArray[i] = `<span class ="brackets">(</span>`;
    } else if (inputArray[i] == ")") {
      inputArray[i] = `<span class ="brackets">)</span>`;
    } else if (inputArray[i] == "%") {
      inputArray[i] = `<span class ="percent">%</span>`;
    }
  }

  return inputArray.join("");
}
