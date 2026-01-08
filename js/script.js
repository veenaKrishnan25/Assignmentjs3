let inputTaskToComplete = document.getElementById('taskToComplete');
let inputAddTaskBtn = document.getElementById('addTaskBtn');
let inputTaskList = document.getElementById('taskList');
let deleteBtn = document.getElementById('deletebtn');
let selectedtask = null;
inputAddTaskBtn.addEventListener('click', () =>{
    let name = inputTaskToComplete .value; 
    
    if (name === ""){
        alert("Please enter task");
        return;
         
    }
    const li = document.createElement('li');
     li.textContent = `Name : ${name}`;
     li.className = "list-item";

     li.addEventListener('click', ()=> {
        if (selectedtask){
            selectedtask.classList.remove('selected')
        }
        li.classList.add('selected');
        selectedtask = li;
        console.log(selectedtask);
        

     });

     inputTaskList.appendChild(li);
     inputTaskToComplete.value = "";
   

});
    deleteBtn.addEventListener('click', () =>{
        if(selectedtask){
            selectedtask.remove();
            selectedtask = null;
            return;

        }
        alert("please select a student");
     });