let inputTaskToComplete = document.getElementById('taskToComplete');
let inputAddTaskBtn = document.getElementById('addTaskBtn');
let inputTaskList = document.getElementById('taskList');
let deleteBtn = document.getElementById('deletebtn');
let selectedtask = null;

// listner for the add btn
inputAddTaskBtn.addEventListener('click', () => {
    let name = inputTaskToComplete.value;
//popup if not enteries are given
    if (name === "") {
        alert("Please enter task");
        return;

    }
    const li = document.createElement('li');
    li.textContent = `Name : ${name}`;
    li.className = "list-item";

    //click action that removes the click of previous selected item and the newely item will show selected
    li.addEventListener('click', () => {
        if (selectedtask) {
            selectedtask.classList.remove('selected')
        }
        li.classList.add('selected');
        selectedtask = li;
        console.log(selectedtask);



    });

    //toggle added

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        console.log('click');


    });
    inputTaskList.appendChild(li);
    inputTaskToComplete.value = "";


});
    // listner for delete btn

deleteBtn.addEventListener('click', () => {
    if (selectedtask) {
        selectedtask.remove();
        selectedtask = null;
        return;

    }
    alert("please select a task");
});