const todoList = [{
    name: 'Wash Dishes',
    dueDate: '2026-11-23'
}, {
    name: 'Make tea',
    dueDate: '2026-12-10'
}];
const taskDates = [];

showTasks();

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


    // let i = 0;
    // do{
    //     const task = todoList[i];
    //     const html = `
    //         <p>
    //             ${task}
    //             <button onclick = "
    //                 deleteTask(${i});
    //             "> Delete </button> 
    //         </p>
    //     `;
    //     tasksHTML += html;
    //     document.querySelector('.js-showTask').innerHTML = tasksHTML;
    //     console.log(tasksHTML);
    //     i++
    // }while(i<todoList.length);


    for(let i=0; i<todoList.length; i++){
        const taskObject = todoList[i];
        const { name , dueDate }= taskObject;
        // const dueDate = taskObject.dueDate;
        // // const { dueDate } = taskObject;
        const html = `
        
            <div>${name}</div>
            <div> ${dueDate}</div>
            <button onclick = "
                deleteTask(${i});
            " class = "delete-btn"> Delete </button> 
        `;
        tasksHTML += html;
        document.querySelector('.js-showTask')
            .innerHTML = tasksHTML;
        console.log(tasksHTML);
    }
}



function deleteTask(i){
    // if(todoList.length == 1){
    //     todoList.pop(0);
    // }
    // else{
    //     todoList.pop(todoList.length - 1);
    // }

    todoList.splice(i, 1);
    showTasks();
}
