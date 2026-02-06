function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function () {
        this.remove();
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
