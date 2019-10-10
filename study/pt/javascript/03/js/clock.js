

function drawClock(){
  // 변경할 DOM 가져오기
  const clock = document.querySelector('.js-clock');

  // 데이터 내용 가져오기
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // 내용 바꾸기
  clock.innerHTML = `${hour<10 ? `0${hour}` : `${hour}`}:${
    minutes<10 ? `0${minutes}` : `${minutes}`}:${
    seconds<10 ? `0${seconds}` : `${seconds}`}`;
}

function init(){
  drawClock();
  // 1초마다 명령어 실행
  setInterval(drawClock, 1000);
}

init();