// var i = 5;

// // while (i < 3) {
// //   console.log(i);
// //   i++;
// // }
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// function greet(e) {
//   //   console.log("Popup");
//   console.log(e);
// }
function clikFunction() {
  var input = document.getElementById("inp");
  var input1 = document.getElementById("inp1");
  var input2 = document.getElementById("inp2");
  var input3 = document.getElementById("inp3");
  var input4 = document.getElementById("inp4");
  if (
    input.value &&
    input1.value &&
    input2.value &&
    input3.value &&
    input4.value
  ) {
    console.log(
      input.value + input1.value + input2.value + input3.value + input4.value
    );
  } else {
    console.log("Invalid crenditials!");
  }
}
