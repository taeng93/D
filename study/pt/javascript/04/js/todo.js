
const todoForm = document.querySelector('.js-todoForm');
const todo = todoForm.querySelector('input');
let todo_arr = [];

// 투두 추가
// 입력: input
// 저장: localStorage에 저장
// 보여주기: ul 안의 li 태그로 출력

function printTodo(text){
  const ul_temp = document.querySelector('.js-todos');
  const li_temp = document.createElement('li');
  // li_temp = <li></li>
  li_temp.innerHTML = text;
  // li_temp = <li>todo.value</li>
  ul_temp.appendChild(li_temp);
  todo.value = "";
}

function saveTodo(){
  const todo_obj = {
    "text" : todo.value,
    "index" : todo_arr.length+1
  }
  // 준비한 배열에 새로운 투두 넣기
  todo_arr.push(todo_obj);
  // 배열을 문자열화 하기
  const newTodo = JSON.stringify(todo_arr);
  // 로컬 스토리지에 저장
  localStorage.setItem('todo', newTodo);
}

function handleSubmit(e){
  e.preventDefault();
  saveTodo();
  printTodo(todo.value);
}

function loadTodos(){
  const load_todos = localStorage.getItem('todo');

  if(load_todos !== null){

    const new_load_todos = JSON.parse(load_todos);
    todo_arr = new_load_todos;
    new_load_todos.forEach(function(el){
      // console.log(el.text);
      printTodo(el.text);
    });

  }
}

// 01. 입력
function init(){
  todoForm.addEventListener('submit', handleSubmit);
  loadTodos();
  
}

init();






