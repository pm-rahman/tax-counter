const taxCount = (taka) => {
  let tax;
  let restTake;
  if (taka <= 300000) tax = 0;
  else if (taka > 300000) {
    if (taka > 1600000) {
      restTake = taka - 1600000;
      tax = 5000 + 30000 + 60000 + 100000 + restTake * 0.25;
    } else if (taka > 1100000) {
      restTake = taka - 1100000;
      tax = 5000 + 30000 + 60000 + restTake * 0.2;
    } else if (taka > 700000) {
      restTake = taka - 700000;
      tax = 5000 + 30000 + restTake * 0.15;
    } else if (taka > 400000) {
      restTake = taka - 400000;
      tax = 5000 + restTake * 0.1;
    } else {
      restTake = taka - 300000;
      tax = restTake * 0.05;
    }
  }
  return tax;
};

const incomeFiled = document.getElementById("incomeFiled");
const calculateBtn = document.getElementById("calculateBtn");
const incomeDisplay = document.getElementById("incomeDisplay");
const textDisplay = document.getElementById("textDisplay");
// onClick
calculateBtn.addEventListener("click", function () {
  const result = taxCount(parseFloat(incomeFiled.value));
  textDisplay.innerText = `$${result}`;
});
// onChange
incomeFiled.addEventListener("keyup", function () {
  incomeDisplay.innerText = `${incomeFiled.value}`;
});

// key
const key = (key) => {
  if (key === "Clear") {
      incomeFiled.value = "";
      incomeDisplay.innerText = 0;
  }
  else if (key === "Cancel") {
    if (incomeFiled.value.length > 0) {
      incomeFiled.value = incomeFiled.value.slice(0, -1);
      incomeDisplay.innerText = incomeDisplay.innerText.slice(0, -1);
    }
  } else {
    incomeFiled.value = incomeFiled.value + key;
    if (incomeDisplay.innerText != 0) {
      incomeDisplay.innerText = incomeDisplay.innerText + key;
    }
    if (incomeDisplay.innerText == 0) {
      incomeDisplay.innerText = key;
    }
  }
};
