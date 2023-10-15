const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

const TODOS_KEY = "todos";

let todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];

function paintTodos() {
  todoList.innerHTML = todos.map(v => `
    <li class="todo-item" id=${v.id}>
      <span class="todo">${v.todo}</span>
      <button class="btn-delete">✕</button>
    </li>
  `).join('');
}

function saveTodo(todos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function submitTodo(e) {
  e.preventDefault();
  const newTodo = {id: Date.now(), todo: todoInput.value};
  todoInput.value = '';
  todos = [...todos, newTodo];
  saveTodo(todos);
  paintTodos();
}

function deleteTodo(e) {
  if (!e.target.classList.contains("btn-delete")) return;
  todos = todos.filter(v => v.id !== +e.target.parentNode.id);
  saveTodo(todos);
  paintTodos();
}

paintTodos();

todoForm.addEventListener("submit", submitTodo);
todoList.addEventListener("click", deleteTodo);