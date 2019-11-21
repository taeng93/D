const imageNumber = 4;

function loadBgImage(){
	// 랜덤으로 이미지 
	// 01. 랜덤으로 1~4의 숫자
	// Math.random() : 0~0.999999사이의 숫자
	// Math.random()*4 : 0 ~ 3.9999사이의 숫자
	// Math.floor(1.5) > 1이 출력
	// const num_rand = 0~3사이의 정수 + 1
	const num_rand = Math.floor(Math.random() * imageNumber)+1; 

	// 02. body의 backgroundImage로 넣기
	const body = document.querySelector('body');
	body.style.backgroundImage = `url('images/${num_rand}.jpg')`;
}

function init(){
	loadBgImage();
}

init();