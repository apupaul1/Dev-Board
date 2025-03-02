function setTask(){
    const task = document.getElementById('task').innerText;
    const convertTask = parseInt(task);
    const remainTask = convertTask - 1;
    document.getElementById('task').innerText = remainTask;
}

function setTotalTask(){
    const totalTask = document.getElementById('total-task').innerText;
    const convertTotalTask = parseInt(totalTask);
    const remainTotalTask = convertTotalTask + 1;
    document.getElementById('total-task').innerText = remainTotalTask;
}