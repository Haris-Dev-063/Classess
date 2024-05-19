function addValue() {
  var inp = document.getElementById("inp");
  var ul = document.getElementById("ul");

  var li = document.createElement("li");

  var li_Text = document.createTextNode(inp.value);

  li.setAttribute("class", "li");

  var delete_btn = document.createElement("button");

  var delete_btn_Text = document.createTextNode("Delete");

  delete_btn.setAttribute("onclick", "deleteBtnHandle(this)");

  delete_btn.appendChild(delete_btn_Text);

  var edit_btn = document.createElement("button");

  var edit_btn_Text = document.createTextNode("Edit");

  edit_btn.setAttribute("onclick", "editBtnHandle(this)");

  edit_btn.appendChild(edit_btn_Text);

  li.appendChild(li_Text);

  li.appendChild(delete_btn);

  li.appendChild(edit_btn);

  ul.appendChild(li);
}

function deleteBtnHandle(e) {
  console.log(e.parentNode.remove());
}

function editBtnHandle(e) {
  var input = prompt("Enter a updated Value");

  e.parentNode.firstChild.nodeValue = input;
}
