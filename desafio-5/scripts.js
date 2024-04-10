const resultCalc = document.getElementById("result-calc");

function calculate() {
  const result = eval(resultCalc.innerText);
  resultCalc.innerText = result;
}

function setValue(value) {
  if (resultCalc.innerText[0] === "0") {
    resultCalc.innerText = "";
  }

  resultCalc.innerText += value;
}

function resetCalc() {
  resultCalc.innerText = "0";
}

function deleteLastDigit() {
  const lastValue = resultCalc.innerText.split("");

  lastValue.pop();

  if (lastValue.length === 0) {
    resultCalc.innerText = "0";
    return;
  }

  const newValue = lastValue.join("");

  resultCalc.innerText = newValue;
}
