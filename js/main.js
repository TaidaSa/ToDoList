//global variables
let input = document.getElementById('taskdata');
let addbtn = document.getElementById('addbtn');
let tasks = document.getElementById('tasks');
let notask = document.getElementById('notask');
let deleteAll = document.getElementById('deleteAll');
let switchMode = document.getElementById('switchMode');
let switchIcon = document.getElementById('switchIcon');


//global functions
let showNoTasks = () => {
    if (tasks.childElementCount == 0) {
        notask.classList.remove('none');
    }
}

//add tasks
let addTask = () =>{
    let task = input.value;
    if (task.trim() == 0 || task.length < 2 || task.length > 20) {
        alert("you Must enter Valid Data")
    }else{
        notask.classList.add('none');
        tasks.classList.remove('cardHide');
        deleteAll.classList.remove('cardHide');
        tasksRRR.innerHTML += `<div class='task alert alert-info'> ${task} <button  class='delete float-right btn btn-danger'> Delete </button></div>`;
        
    }
}
addbtn.addEventListener('click', addTask);

//delete tasks
let deleteTask = (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        showNoTasks();
    }
}

document.addEventListener('click', deleteTask)

//delete all tasks
let deleteAllTasks = () =>{
    tasksRRR.remove();
    showNoTasks();
    deleteAll.classList.add('cardHide');
}
deleteAll.addEventListener('click', deleteAllTasks);

//switch mode
let switchToMode = (e) =>{
    if (e.target.classList.contains('fas')) {
        if(switchMode.classList.contains('light')){
            //background
            switchMode.classList.remove('light');
            switchMode.classList.add('dark');
            //icon
            switchIcon.classList.remove('fa-moon');
            switchIcon.classList.add('fa-sun');
        }else if(switchMode.classList.contains('dark')){
            //background
            switchMode.classList.remove('dark');
            switchMode.classList.add('light');
            //icon
            switchIcon.classList.remove('fa-sun');
            switchIcon.classList.add('fa-moon');
        }
    }
}
document.addEventListener('click', switchToMode)