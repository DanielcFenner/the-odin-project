let todoList = [];

export function addTodo(title, date) {
  const id = crypto.randomUUID();
  todoList.push({ id, title, date });
  console.log(todoList);
}

export function removeTodo(id) {
  todoList = todoList.filter((todo) => todo.id !== id);
}

export function renderTodoList(element) {
  if (todoList.length === 0) {
    element.innerText = "No todos yet";
  } else {
    element.innerHTML = todoList
      .map((todo) => {
        return `<div class="todo-item-container">
      <div class="todo-item" data-id="${todo.id}">${todo.title}</div> 
       <div class="todo-item-date">${todo.date}</div>
       <div class="remove-todo" data-id="${todo.id}">x</div>
       </div>`;
      })
      .join("");

    const removeTodoButtons = element.querySelectorAll(".remove-todo");
    removeTodoButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        removeTodo(e.target.dataset.id);
        renderTodoList(element);
      });
    });
  }
}
