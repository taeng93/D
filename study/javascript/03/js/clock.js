

function drawClock(){
  // : 현제의 시간 가져와 그려줄 함수

  // 01. 변경할 DOM 가져오기
  const clock = document.querySelector('.js-clock');

  // 02. 데이터 내용 가져오기
  const date = new Date(); //현제의 시간 객체 가져오기
  const hour = date.getHours(); //시간
  const minutes = date.getMinutes(); //분
  let seconds = date.getSeconds(); //초

  // 03. 내용 바꾸기
  clock.innerHTML = `${hour<10 ? `0${hour}` : `${hour}`}:${
    minutes<10 ? `0${minutes}` : `${minutes}`}:${
    seconds<10 ? `0${seconds}` : `${seconds}`}`;
}

function init(){
  drawClock(); // 처음화면에서 시계 그려주기
  setInterval(drawClock, 1000); // 1초마다 명령어 실행
}

init();