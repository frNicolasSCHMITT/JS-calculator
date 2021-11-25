let tab = document.getElementsByClassName("calculatorTab"),
  operation = 0;
const tab0 = document.getElementById("0"),
  tab1 = document.getElementById("1"),
  tab2 = document.getElementById("2"),
  tab3 = document.getElementById("3"),
  tab4 = document.getElementById("4"),
  tab5 = document.getElementById("5"),
  tab6 = document.getElementById("6"),
  tab7 = document.getElementById("7"),
  tab8 = document.getElementById("8"),
  tab9 = document.getElementById("9"),
  plusTab = document.getElementById("+"),
  minusTab = document.getElementById("-"),
  multiplyTab = document.getElementById("*"),
  divideTab = document.getElementById("/"),
  resultTab = document.getElementById("="),
  clearTab = document.getElementById("clearTab"),
  screenContent = document.getElementById("screenContent");

// CLEAR SCREEN

clearTab.addEventListener("click", function () {
  screenContent.innerHTML = "";
  operation = 0;
});

// GENERATE OPERATION

document.querySelectorAll(".calculatorTab").forEach((item) => {
  item.addEventListener("click", function () {
    let id = this.value;
    if (operation == 0) {
      operation = id;
      screenContent.innerHTML = operation;
    } else {
      operation = operation + id;
      screenContent.innerHTML = operation;
    }
    // console.log("ID :" + id);
    // console.log("ID type:" + typeof id);
    // console.log("operation :" + operation);
    // console.log("operation type:" + typeof operation);
  });
});

//RESOLVE OPERATION

resultTab.addEventListener("click", function () {
  operation = eval(operation);
  screenContent.innerHTML = operation;
});
