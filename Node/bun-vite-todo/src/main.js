import "./style.css";
import { renderTodoList } from "./todolist";
import { addTodo } from "./todolist";

document.querySelector("#app").innerHTML = `
  <div class="signature">
      by <a href="https://www.danielfenner.com">@danielfennerdev</a>
    </div>
    <div class="container">
    <div class="add-todo-container">
    <label for="title">Title:</label>
          <input type="text" id="title" name="title" required />
          <label for="date">Date:</label>
          <input type="date" id="date" name="date" required />
    <button class="add-todo-button" ype="submit">Add Todo</button>
    </div>
    <div class="todo-list">
    
    </div>
    </div>
`;

const addTodoButton = document.querySelector(".add-todo-button");
addTodoButton.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;
  addTodo(title, date);
  renderTodoList(todoListElement);
});

const todoListElement = document.querySelector(".todo-list");
renderTodoList(todoListElement);
