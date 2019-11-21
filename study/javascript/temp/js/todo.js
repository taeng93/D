
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
  // li_temp = <li>서혜인!</li>

  li_temp.id = todo_arr.length+1;
  // li_temp = <li id = " ~ "></li>

  li_temp.addEventListener('click', deleteTodo);

  ul_temp.appendChild(li_temp);
  //ul 태그 안에 li 를 넣는다.

  const todo_obj = {
    "text" : text,
    "index" : todo_arr.length+1
  }
  // 준비한 배열에 새로운 투두 넣기
  todo_arr.push(todo_obj);

  saveTodo();
}

function deleteTodo(e){
  // 01. html 내에서 타겟 삭제
  const todos = document.querySelector('.js-todos');
  // todos 의 자식요소 중에 e.target 인 태그를 삭제한다. 
  todos.removeChild(e.target);

  // 02. todo_arr에서 타겟을 삭제
  const cleanTodos = todo_arr.filter(function(todo){
    //todo.index 와 e.target.id
    return todo.index !== parseInt(e.target.id);
  });
  todo_arr = cleanTodos;

  // 03. 로컬 스토리지에 저장
  const newTodo = JSON.stringify(todo_arr);
  localStorage.setItem('todo', newTodo);
}

function saveTodo(){
  
  // 배열을 문자열화 하기
  const newTodo = JSON.stringify(todo_arr);
  // 로컬 스토리지에 저장
  localStorage.setItem('todo', newTodo);
}

function handleSubmit(e){
  e.preventDefault();

  printTodo(todo.value);

  todo.value = "";
}

function loadTodos(){
  const load_todos = localStorage.getItem('todo');

  if(load_todos !== null){

    const new_load_todos = JSON.parse(load_todos);
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






