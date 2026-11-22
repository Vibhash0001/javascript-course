const todoList = [{
    name: 'Wash Dishes',
    dueDate: '2026-11-23'
}, {
    name: 'Make tea',
    dueDate: '2026-12-10'
}];

showTasks();

document.querySelector('.js-add-btn').addEventListener('click', () => {
    addTodo();
});


function addTodo() {
    const inputNameElement = document.querySelector('.js-name-input');
    const inputDateElement = document.querySelector('.js-date-input');
    const dueDate = inputDateElement.value;
    const name = inputNameElement.value;
    console.log(name);

    todoList.push({name , dueDate});
    console.log(todoList);

    console.log(dueDate);
    inputNameElement.value = '';  //To vacant the input box
    inputDateElement.value = '';
    showTasks();
}


function showTasks(){
    let tasksHTML = ``;
    
    if(todoList.length == 0){
        document.querySelector('.js-showTask').innerHTML = `No tasks for now`;
    }

    todoList.forEach((value, index) => {
        const taskObject = value;
        const { name , dueDate }= taskObject;
        const html = `
        
            <div>${name}</div>
            <div> ${dueDate}</div>
            <button class = "delete-btn js-delete-btn"> Delete </button> 
        `;
        tasksHTML += html;
         
    });

    document.querySelector('.js-showTask')
        .innerHTML = tasksHTML;

    document.querySelectorAll('.js-delete-btn')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => deleteTask(index));
        }
    );
}


function deleteTask(i){
    todoList.splice(i, 1);
    showTasks();
}
