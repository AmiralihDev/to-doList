let userInput = document.querySelector('#userInput')
let add = document.querySelector('#push')
add.addEventListener("click" ,  () => {
    if(userInput.value == ""){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${userInput.value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
                
            </div>
        `;
        let current_tasks = document.querySelectorAll(".delete");



        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                save()
            }
        }
        
        
        
        let tasks = document.querySelectorAll(".task");
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        userInput.value = "";

    }

}
)
