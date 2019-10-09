
var countDownDate = new Date("Sep 15, 2019 23:59:59").getTime();
var uploadDate = new Date("Sep 1, 2019 23:59:59").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var fullTime = countDownDate - uploadDate;

var body = document.body;
console.dir(body);

if(body.clientWidth > 415){
   moving();
}

function moving(){
    console.log("moving")
    var widthChange = 40 + (distance/fullTime * 40);
    var white = document.querySelector('.white');

    setTimeout(function(){
        white.style.width = widthChange + 'vw';
    }, 2000)

    setTimeout(function(){

        if(widthChange <= 40){
            var mini_image02 = document.querySelector('.mini-image02');
            var mini_image01 = document.querySelector('.mini-image01');

            mini_image01.classList.add('mini-visible');
            mini_image02.classList.remove('mini-visible');
    }   
    }, 2800)
}


