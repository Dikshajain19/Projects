//variables 
const addTask=document.getElementById('add-task');
const taskcont=document.getElementById('add-task-cont');
const inputTask=document.getElementById('input-task');

//event listner
addTask.addEventListener('click',function(){
    let task=document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);

    let checkButton=document.createElement("button");
    checkButton.innerHTML='<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deteleButton=document.createElement("button");
    deteleButton.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    deteleButton.classList.add('deleteTask');
    task.appendChild(deteleButton);  

    if(inputTask.value === ""){
        alert('Please enter a task');
    }
    else{
        taskcont.appendChild(task);
    }

    inputTask.value =" ";


});