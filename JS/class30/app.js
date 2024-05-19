// var userValue = prompt("Enter a Value");
// // karac  hi;
// for (var i = 0; i < userValue.length; i++) {
//   if (userValue.slice(i, i + 3) === "   ") {
//     alert("Double Space Found");
//     break;
//   }
// }

var text =
  "you could overcome this limitation by looping. You'd change the first instanceof World War II to ";

// ("The Second World War");

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
  }
}
console.log(text);
