//01. a 페이지 
//02. 밀린 페이지
//03. 기간이 끝났을 떄 
//> b 페이지 


var countDownDate = new Date("Sep 15, 2019 23:59:59").getTime();
var uploadDate = new Date("Sep 1, 2019 23:59:59").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var fullTime = countDownDate - uploadDate;

//마감일
console.log(countDownDate);
//올린 시간
console.log(uploadDate);
//지금
console.log(now);
//남은 시간
console.log(distance);
//총기간
console.log(fullTime);

//01. 시간을 이용해서 분수를 만들어라. ex) 25%
//02. 80VW일때가 40vw 

//아하! 23vw를 더하면 되겠구나!



var body = document.body;
console.dir(body);

if(body.clientWidth > 415){
   moving();
}else{
    
}

function moving(){
     var widthChange = 40 + (distance/fullTime * 40);
    var white = document.querySelector('.white');

    setTimeout(function(){
        white.style.width = widthChange + 'vw';
    }, 2000)

    setTimeout(function(){

        if(widthChange <= 40){
        //mini-image02 : 디스플레이
        var mini_image02 = document.querySelector('.mini-image02');
        var mini_image01 = document.querySelector('.mini-image01');

        mini_image01.classList.add('mini-visible');
        mini_image02.classList.remove('mini-visible');
    }   
    }, 2800)
}


