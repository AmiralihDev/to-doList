
let addBtn = document.querySelector("#push");
const userInput = document.querySelector("#userInput");
const tasks = document.querySelector("#tasks");
addBtn.addEventListener("click",add)
function add() {
  if (userInput.value === "") {
    alert("please enter any task!");
  } else {
   
    let taskName = document.createElement("li");
    taskName.innerText = userInput.value;
    taskName.className = "taskname"
    let trash = document.createElement("span");
    trash.innerText = "Delete";
    trash.className = "trash"
    let btnEdit = document.createElement("button")
    btnEdit.className = "edit"
    btnEdit.innerText =  "Edit"
    taskName.appendChild(btnEdit)
    taskName.appendChild(trash);
    tasks.appendChild(taskName);
  }
  userInput.value = "";
  save();
}
tasks.addEventListener("click",
   (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
     else if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
      userInput.value = 
      save();
    }
  },
  
);
function save() {
  localStorage.setItem("data", tasks.innerHTML);
}
function show() {
  tasks.innerHTML = localStorage.getItem("data");
}

// Add event listener for "Enter" key press
userInput.addEventListener("keyup",  (event) => {
  if (event.key === "Enter") {
    add();
  }
});
show();
