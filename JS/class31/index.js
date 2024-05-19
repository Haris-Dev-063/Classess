// var text = prompt("Enter A userValue");

// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 2) === "hi") {
//     text = text.slice(0, i) + "Hello" + text.slice(i + 2);
//   }
// }

// console.log(text);

// var text = prompt("Enter A user Value");

// var newText = text.replace(/hi/g, "Hello");

// console.log(newText);

// var num = 3.9;

// console.log(Math.floor(num));

// console.log(Math.random() * 2)

var strongPassword =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

var passwordLength = 18;

function generateStrongPassword() {
  var pass = "";
  for (var i = 0; i < passwordLength; i++) {
    pass += strongPassword[Math.floor(Math.random() * strongPassword.length)];
  }
  return pass;
}
console.log(generateStrongPassword());