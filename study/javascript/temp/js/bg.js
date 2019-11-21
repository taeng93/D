// 랜덤으로 숫자를 만들고

const IMG_NUMBER = 4;

function init(){
  drawImage(randomNumber());
}

function randomNumber(){

  const numb = Math.floor(Math.random()*IMG_NUMBER);
  return numb;
}

function drawImage(number){
  const body = document.querySelector('body');
  // 01. 이미지 준비하기(image_01.jpeg, image_02.jpeg, image_03.jpeg )
  // 02. 랜덤으로 1~3 숫자 만들기
  // 03. 변수로 만들기

  body.style.backgroundImage = `url('images/${number+1}.jpg')`;
}

init();
