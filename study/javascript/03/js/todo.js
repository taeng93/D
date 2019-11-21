const todoForm = document.querySelector('.js-todo');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.js-todoLists');
const TODOS_LS = 'todos';
const todos = [];

loadTodos = () => {
  const loadTodos = localStorage.getItem(TODOS_LS);
  if(loadTodos){
    console.log(loadTodos);
    console.log(JSON.parse(loadTodos));
    parsedTodos = JSON.parse(loadTodos);
    parsedTodos.forEach(element => {
      paintTodo(element.text);
    });
  }
}

saveTodos = (arr) => {
  localStorage.setItem(TODOS_LS, JSON.stringify(arr));
}

deleteTodo = (e) => {
  const target_li = e.target;
  todoList.removeChild(target_li);
  const deletedTodos = todos.filter(el => {
    const target_id = parseInt(target_li.id);
    return el.index !== target_id
  })
  saveTodos(deletedTodos);

}

paintTodo = (text) => {
  const li = document.createElement('li');
  const newId = todos.length+1;
  li.innerHTML = text;
  li.id = newId;
  li.addEventListener('click', deleteTodo);
  todoList.appendChild(li);

  const todoObject = {
    "text" : text,
    "index" : newId
  }

  todos.push(todoObject);
  saveTodos(todos);
}

handleSubmit = (e) => {
  e.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = "";
}

init = () => {
  loadTodos();
  todoForm.addEventListener('submit', handleSubmit);
}

init();