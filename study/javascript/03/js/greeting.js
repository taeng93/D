// ** 명령어 흐름을 먼저 확인 하세요:)
// 01. init()
// 02. loadName()
// 03. 로컬 저장소에 이름이 저장되어 있을때 > drawGreeting(): hello, ~~ 보여주기
//     로컬 저장소에 이름이 없을때 > askForName(): 인풋 텍스트 보여주기
// 04. handleSubmit() : 이름을 작성 후 엔터를 쳤을 때
// 05. saveName() : 이름을 로컬 저장소에 저장하기

// DOM 가져오기
const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greeting');

// 변수 선언
const USER_LS = 'name';
const SHOWING_CN = "showing";

function saveName(text){
  // : 타입한 이름을 저장소에 저장해준다. 
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(e){
  // : 텍스트를 작성한 후 엔터를 눌렸을때 실행
  e.preventDefault();
  const currentValue = input.value;
  drawGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  // : form 보여주기
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit',handleSubmit)
}

function drawGreeting(text){
  // : hello, ~ 보여주기
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `hello, ${text}`;
}

function loadName(){
  // : 저장소에서 이름 가져오기
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser===null){
    askForName();
  }else{
    drawGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();