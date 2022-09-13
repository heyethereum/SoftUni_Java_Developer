function addItem() {
  let text = document.getElementById("newItemText").value;
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  document.getElementById("items").appendChild(li);
  document.getElementById("newItemText").value = "";
}

const input = document.getElementById("newItemText");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("addBtn").click();
  }
});
