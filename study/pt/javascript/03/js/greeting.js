// DOM
const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greeting');


const USER_LS = 'name';
const SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(e){
  e.preventDefault();
  const currentValue = input.value;
  drawGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit',handleSubmit)
}

function drawGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `hello, ${text}`;
}

function loadName(){
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