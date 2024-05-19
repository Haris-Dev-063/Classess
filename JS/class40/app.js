// function onMouseOverControll() {
//   var image = document.getElementById("img");
//   image.src = "./how-to-create-a-car-NewBlogCover.png";
//   image.className = "hidden";
// }

// function onMouseOutControl() {
//   var image = document.getElementById("img");
//   image.src = "./0x0.webp"
// }

// function anchor() {
//   var a = document.getElementById("anchor");
//   a.href = "https://www.google.com/";
//   a.target = "_blank";
// }

var para = document.getElementsByTagName("p");

// console.log(para);

// para[0].style.color = "red";
// para[0].style.backgroundColor = "black";
// para[1].style.color = "green";
// para[2].style.color = "blue";
// para[2].style.backgroundColor = "yellow";

for (var i = 0; i < para.length; i++) {
  para[i].style.color = "red";
}
