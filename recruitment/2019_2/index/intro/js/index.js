

//드래그 앤 드롭
const fills = document.querySelectorAll('.fill');
// const fill_semi = document.querySelectorAll('.fill_semi');
const dddd = document.querySelectorAll('.dddd');
const semi = document.querySelectorAll('.semi');
const bracket = document.querySelector('.bracket')
let current = false;

let client_x = 0;
let client_y = 0;

let drop_D = false;
let drop_semi = false;


//랜덤
const chars = document.querySelectorAll('.character');
let clickTarget = null;
let isTouched = false;
let checkEnter = false;

for (var i = 0; i < chars.length; i++) {
    const rand_pos = parseInt((Math.random() - 0.5) * 10);
    const rand_rotate = parseInt(Math.random() * 360);

    const char_left = 95 / chars.length * i + rand_pos;
    chars[i].style.left = char_left + "%";
    chars[i].style.transform = "rotate(" + rand_rotate + "deg)";
}

//fill listeners
for (const fill of fills) {
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);
    fill.addEventListener('drag', dragMove);

    fill.addEventListener('touchstart', onTouchStart);
    fill.addEventListener('touchend', onTouchEnd);
    fill.addEventListener('touchmove', onTouchMove);
}

// Loop through empties and all drag events
    bracket.addEventListener('dragover', dragOver);
    bracket.addEventListener('drop', dragDrop);

    bracket.addEventListener('touchstart', onTouchOver);


function doElsCollide(el1, el2){

    let left = 0;
    let top = 0;
    let height = el1.offsetHeight;
    let width = el1.offsetWidth;

    if (el1.offsetParent) {
        do {
            left += el1.offsetLeft;
            top  += el1.offsetTop;
        } while (el1 = el1.offsetParent);
    }


    let bottom = top + height;
    let right = left + width;

    el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
    el2.offsetRight = el2.offsetLeft + el2.offsetWidth;
    
    return !((bottom < el2.offsetTop) ||
            (top > el2.offsetBottom) ||
            (right < el2.offsetLeft) ||
            (left > el2.offsetRight))
}

function dragMove(e){
    console.log(" - ");
}

function onTouchOver(){
    console.log("onTouchOver");
}

//Drag Functions
function dragStart(e) {
    console.log("dragStart");
    clickTarget = this;
    setTimeout(() => (this.classList.add('invisible')), 0);
}

function dragEnd(e) {
    console.log(this.classList);
    if (this !== dragDrop) {
        clickTarget.classList.remove('invisible');
    }

}

function dragOver(e) {
    e.preventDefault();
    console.log("dragOver");
}

function dragDrop(e) {
    console.log(" dragDrop ");
    if (this.classList.contains("bracket")) {
        console.log(clickTarget.classList[1]);
        if (clickTarget.classList.contains("logo-D")){
            const dddd = document.querySelector('.dddd');
            dddd.append(clickTarget);
            clickTarget.draggable = false;

            drop_D = true;
        } else if (clickTarget.classList.contains("logo-semi")) {
            const semi = document.querySelector('.semi');
            semi.append(clickTarget);
            clickTarget.draggable = false;
            
            drop_semi = true;
            drop_D = true;
        }
    }

    if(drop_D && drop_semi){
        changePage();
    }

    clickTarget.style.transform = "rotate(0deg)";
    clickTarget.classList.remove('invisible');
}


let pre_x = 0;
let pre_y = 0;

function onTouchStart(e){
    console.log("onTouchStart")
    isTouched = true;
    clickTarget = this;
    // setTimeout(() => (this.classList.add('invisible')), 0);

    client_x = e.touches[0].clientX;
    client_y = e.touches[0].clientY;
    
    pre_x = e.target.parentNode.style.left;
    pre_y = e.target.parentNode.style.bottom;
}


function onTouchEnd(e){
    console.log("onTouchEnd")
    isTouched = false;
    e.target.parentNode.style.left = pre_x;
    e.target.parentNode.style.bottom = pre_y;

    if(checkEnter){
        if (e.target.classList.contains("logo-D")){
            const dddd = document.querySelector('.dddd');
            dddd.append(e.target);
            e.target.draggable = false;
            drop_D = true;
        } else if (e.target.classList.contains("logo-semi")) {
            const semi = document.querySelector('.semi');
            semi.append(e.target);
            e.target.draggable = false;
            drop_semi = true;
        }
    }

    if(drop_D && drop_semi){
        changePage();
    }
}

function onTouchMove(e){
    console.log("onTouchMove");
    let move_x = e.touches[0].clientX;
    let move_y = e.touches[0].clientY;

    let dist_x = parseInt(move_x - client_x);
    let dist_y = parseInt(move_y - client_y);

    const string_x = "calc(" + pre_x  +" + " + dist_x + "px)";
    const string_y = "calc(" + pre_y  +" + " + dist_y + "px)";

    e.target.parentNode.style.left = string_x;
    e.target.parentNode.style.bottom = (dist_y * -1) + "px";

    if(doElsCollide(e.target.parentNode, bracket)){
        checkEnter = true;
    };
}



// when change pages
function changePage(){
    const screenWidth = document.body.offsetWidth;
    console.log(screenWidth);
    if(screenWidth<415){
        console.log("changePage - mobile")
        changePage_mobile();

    }else{
        console.log("changePage - web");
        changePage_PC();
    }
}

function changePage_mobile(){
    const intro = document.querySelector('.intro');
    const contents = document.querySelector('.contents');

    intro.classList.replace('show-opacity', 'hide-opacity');
    setTimeout(() => {
        intro.classList.replace('display-block', 'display-none')
        contents.classList.replace('hide-opacity', 'show-opacity')
        contents.classList.replace('display-none', 'display-block')

        setTimeout(( )=> {
            showContents_mobile();
        }, 500)

    }, 500);
}

function showContents_mobile(){
    // 01. 네모 채우기
    const contents = document.querySelector('.contents');
    contents.style.height = "100vh";

    // // 02. 박스 나타나기
    setTimeout(() => {
        const white = contents.querySelector('.white');
        white.style.top = "20vh";
        setTimeout(() => {
            white.style.height = "77vh";
        }, 300);
    }, 500);
}

function changePage_PC(){
    const intro = document.querySelector('.intro');
    const contents = document.querySelector('.contents');

    intro.classList.replace('show-opacity', 'hide-opacity');
    setTimeout(() => {
        intro.classList.replace('display-block', 'display-none')
        contents.classList.replace('hide-opacity', 'show-opacity')
        contents.classList.replace('display-none', 'display-block')

        setTimeout(( )=> {
            showContents_PC();
        }, 500)

    }, 500);
    
}

function showContents_PC(){
    // 01. 네모 채우기
    const contents = document.querySelector('.contents');
    contents.style.height = "100vh";

    // 02. 박스 나타나기
    setTimeout(() => {
        const white = contents.querySelector('.white');
        white.style.right = 0;
        setTimeout(() => {
            white.style.width = "80vw";

            moving();
        }, 300);
    }, 500);

};


var countDownDate = new Date("Sep 15, 2019 23:59:59").getTime();
var uploadDate = new Date("Sep 1, 2019 23:59:59").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var fullTime = countDownDate - uploadDate;

var body = document.body;

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


