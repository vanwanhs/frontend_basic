let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false },
];

function renderTodoList() {
    const ul = document.getElementById("myUL");
    ul.innerHTML = '';

    todoList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.task;
        if (item.completed) {
            li.classList.add("checked");
        }

        const closeBtn = document.createElement("span");
        closeBtn.textContent = "×";
        closeBtn.className = "close";
        closeBtn.onclick = function () {
            removeTodo(item.id);
        };

        li.appendChild(closeBtn);
        ul.appendChild(li);
    });
}

function removeTodo(id) {
    todoList = todoList.filter(item => item.id !== id);
    renderTodoList();
}

document.querySelector('.addBtn').onclick = function () {
    const input = document.getElementById("myInput");
    const newTask = input.value.trim();

    if (newTask) {
        const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
        todoList.push({ id: newId, task: newTask, completed: false });
        input.value = "";
        renderTodoList();
    }
};

document.addEventListener("DOMContentLoaded", renderTodoList);