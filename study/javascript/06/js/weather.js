const COORDS_LS = 'coords';
const API_KEY = 'f6852bd0e13a5ab30c6f8b2cdcb857b1';

function askForCoords(){
 navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError )
}

function handleGeoSuccess(position){
 const latitude = position.coords.latitude;
 const longitude = position.coords.longitude;
 const positionObj = {
  latitude: latitude,
  longitude: longitude
 }
 
 // 로컬 스토리지의 'coords' 저장
 const strObj = JSON.stringify(positionObj);
 localStorage.setItem(COORDS_LS , strObj);

 // 날씨 그리기
 getWeather(latitude, longitude);
}

function handleGeoError(){
 console.log('handleGeoError')
}

function getWeather(lat, lon){
 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
 .then(function(res){
  return res.json();
 })
 .then(function(json){
  const temp_now = json.main.temp;
  drawTemp(temp_now);
 })
}

function drawTemp(temp_now){
 // 01. dom 불러오기
 const temp = document.querySelector('.js-temp');
 // 02. innterHTML 수정
 temp.innerHTML = temp_now;
}

function loadCoords(){
 const userCoords = localStorage.getItem(COORDS_LS);
 console.log(userCoords);
 if(userCoords == null){
  // coords 저장
  askForCoords();

 }else{
  //01. LS의 좌표를 가져옴
  const parsedCoords = JSON.parse(userCoords);
  //02. 좌표를 통해서 날씨 가져오기
  getWeather(parsedCoords.latitude, parsedCoords.longitude);
 }
}

function init(){
 loadCoords();
}

init();
