var count = 0;
var isPressed = false;
var isFulled = false;

var wrp = document.getElementById('wrapper');
var cover = document.getElementById('cover');
var info = document.getElementById('info');

var logoImage = wrp.getElementsByTagName('img');

wrp.addEventListener('mousedown', function(){
    isPressed = true;
    addSemi();
    console.log("isPressed : " + isPressed);
});

wrp.addEventListener('mouseup', function(){
    isPressed = false;
    console.log("isPressed : " + isPressed);
});

wrp.addEventListener('touchstart', function(){
    isPressed = true;
    addSemi();
    console.log("isPressed : " + isPressed);
});
wrp.addEventListener('touchend', function(){
    isPressed = false;
    console.log("isPressed : " + isPressed);
});


function addSemi(){
    if(isPressed == true){

        var imgCount = document.getElementsByTagName('img');
        if(imgCount.length>30){
            isFulled = true;
            console.log("isFUlled: " + isFulled);
            
            fullEvent();

        }else{
            var semi = document.createElement('img');
            semi.setAttribute('src', 'image/SVG/logo_semi.svg');
            cover.appendChild(semi);
        
            setTimeout(() => {
                semi.style.opacity = '1';
            }, 0.8);
        }
    }else{
        var imgCount = document.getElementsByTagName('img');
        var deletImg = imgCount[imgCount.length-3];

        if(imgCount.length>4){
            deletImg.remove();
        }
    }

    setTimeout(function(){
        addSemi();
    }, 100);
}

function getStart(){
    for(var i =0; i<logoImage.length; i++){
        logoImage[i].style.opacity = '1';
    }
}

function fullEvent(){
    console.log('fullEvent!');
    cover.style.opacity = '0';

    setTimeout(() => {
        console.log('test');
        cover.style.display = 'none';
        
        wrp.style.backgroundColor = 'black';
        info.style.opacity = '1';

        wrp.style.boxShadow = '8px 8px 24px rgb(167, 167, 167)';
    }, 500);
    // info.style.display = 'block';

    isPressed = false;


}

//time count
var countDownDate = new Date("Mar 17, 2019 23:59:59").getTime();
var countDownStart = new Date("Feb 19, 2019 23:59:59").getTime();
var countDownDuration = countDownDate- countDownStart;

var countWidth = document.querySelector('.underline');

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var millSeconds = Math.floor(distance % (1000));
  

  var countPer = 100 - ((now - countDownStart)/countDownDuration*100);
  countWidth.style.width = countPer + "%";
  
    var countDown = document.querySelectorAll(".countdown");

    for(var i=0; i<countDown.length; i++){
        countDown[i].innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + '.'+millSeconds + "s ";
    }

  if (distance < 0) {
    clearInterval(x);

    for(var i=0; i<countDown.length; i++){
        countDown[i].innerHTML = "EXPIRED";

    }

  }
}, 10);

getStart();

var back = document.querySelector('#logo_w_Dsemi');
back.addEventListener('click', function(){
    console.log('back!');
    cover.style.opacity = '1';

    setTimeout(() => {
        console.log('test');
        cover.style.display = 'block';
        
        wrp.style.backgroundColor = 'transparent';
        info.style.opacity = '0';

        wrp.style.boxShadow = 'none';
    }, 500);
    // info.style.display = 'block';

    isPressed = false;

});