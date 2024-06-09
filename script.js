let tasksContainer = document.getElementById("tasks");
let taskTemplate = document.getElementById("template-task");
let addButton = document.getElementById("add-button");
let tasks = [
    {
        title: "Read Book",
        date: "8/6/2024",
        isDone: true,
    },


];
function getTasksFromStorage() {
    let myTasksFromStrage = JSON.parse(localStorage.getItem("myTasks"));
    if ( myTasksFromStrage != null) {
        tasks = myTasksFromStrage;
    }
}
getTasksFromStorage();
// -----------fill Tasks In------------------------
function getTasks() {
    tasksContainer.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let content = tasks[i];
        let newTaskSection = taskTemplate.cloneNode(true);

        let taskTitle = newTaskSection.querySelector(".task-title");
        let taskDate = newTaskSection.querySelector(".task-date");
        let successButton = newTaskSection.querySelector(".success-button");
        let deleteBtton = newTaskSection.querySelector(".delete-button");
        let updateButton = newTaskSection.querySelector(".update-button");
        taskTitle.innerText = content.title;
        taskDate.innerText = content.date;
        if (content.isDone) {
            successButton.style.backgroundColor = "rgb(242, 135, 5)";
            // successButton.style.color = "white";
            successButton.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
            newTaskSection.style.backgroundColor = "rgba(15, 219, 15, 0.445)"
        }
        // -----------------Events-----------------------------------

        successButton.addEventListener("click", () => {
            isSuccess(i);
        });

        deleteBtton.addEventListener("click", () => {
            deleteTask(i);
        });

        updateButton.addEventListener("click", () => {
            updateTask(i);
        })
        //   --------------------------------------------------------
        tasksContainer.appendChild(newTaskSection);

    }

}
// -----------Storage Function------------------------
function storeTasks() {
    let tasksString = JSON.stringify(tasks);
    localStorage.setItem("myTasks", tasksString);
}
// -----------Add Tasks------------------------
addButton.addEventListener("click", () => {
    let taskName = prompt("pleas enter task title");
    let now = new Date();
    let dateNow = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() + " - " + (now.getHours() - 12) + ":" + now.getMinutes();
    let taskData = {
        title: taskName,
        date: dateNow,
        isDone: false,
    };
    tasks.push(taskData);
    storeTasks();
    getTasks();

});
// -----------Delete Tasks------------------------
function deleteTask(index) {
    tasks.splice(index, 1);
    storeTasks();
    getTasks();
}
// -----------Success Function------------------------
function isSuccess(index) {
    if (tasks[index].isDone) {
        tasks[index].isDone = false;
    } else tasks[index].isDone = true;
    storeTasks();
    getTasks();
}
// -----------Update Task------------------------
function updateTask(index) {
    let taskName = prompt("pleas enter task title");
    let now = new Date();
    let dateNow = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() + " - " + (now.getHours() - 12) + ":" + now.getMinutes();
    if (taskName != "") {
        tasks[index].title = taskName;
        tasks[index].date = dateNow;
    }
    storeTasks();
    getTasks();
}
