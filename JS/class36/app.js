var inp = document.getElementById("inputField");
function getValue(e) {
  inp.value += e;
}

function equalFunction() {
  try {
    inp.value = eval(inp.value);
  } catch {
    inp.value = "Error";
  }
}

function clrAll() {
  inp.value = "";
}

function clr() {
  inp.value = inp.value.slice(0, -1);
}
