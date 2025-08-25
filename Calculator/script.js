let display = document.getElementById("display");

function insert(num) {
  display.value += num;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

// Advanced operations
function square() {
  display.value = Math.pow(display.value, 2);
}

function sqrt() {
  display.value = Math.sqrt(display.value);
}

function inverse() {
  display.value = 1 / display.value;
}
