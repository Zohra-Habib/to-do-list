function addTask() {

  let input = document.getElementById("task");

  if(input.value === ""){
    alert("Enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    ${input.value}
    <button onclick="deleteTask(this)" style="
      margin-left:10px;
      background:red;
      color:white;
      border:none;
      padding:5px 10px;
      border-radius:5px;
      cursor:pointer;
    ">
      Delete
    </button>
  `;

  document.getElementById("list").appendChild(li);

  input.value = "";
}

function deleteTask(btn){
  btn.parentElement.remove();
}