const COORDS = 'coords';
const API_KEY = 'f6852bd0e13a5ab30c6f8b2cdcb857b1';

saveCoords = coordsObj => {
 localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


handleGeoSucces = position => {
 console.log(position);
 const latitude = position.coords.latitude;
 const longitude = position.coords.longitude;
 const coordsObj = {
  latitude,
  longitude
 }
 saveCoords(coordsObj);
}

handleGeoError = () => {
 console.log(`can't access geo load`);
}

askForCoords = () => {
 navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


loadCoord = () =>{
 const loadCords = localStorage.getItem(COORDS);
 if(!loadCords){
  askForCoords();
 }else{
  // get weather
 }
}

function init(){
 loadCoord();

}

init();