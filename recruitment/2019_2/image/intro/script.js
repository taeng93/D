//드래그 앤 드롭
const fills = document.querySelectorAll('.fill');
const fill_semi = document.querySelectorAll('.fill_semi');
const dddd = document.querySelectorAll('.dddd');
const semi = document.querySelectorAll('.semi');
const brackets = document.querySelectorAll('.bracket')
let current = false;

//랜덤
const chars = document.querySelectorAll('.character');
let clickTarget = null;

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
    fill.addEventListener('touchstart', dragStart);
    fill.addEventListener('touchend', dragEnd);
    //모바일
    // fill.addEventListener('touchstart', f);
    // fill.addEventListener('touchend', f);
    // fill.addEventListener('touchmove', f);

    // function f(ev){
    //     console.log(ev.touches, ev.type );
    // }

}

for (const fill_semis of fill_semi) {
    fill_semis.addEventListener('dragstart', dragStart);
    fill_semis.addEventListener('dragend', dragEnd);
  //모바일
}


// Loop through empties and all drag events
for (const bracket of brackets) {
    bracket.addEventListener('dragover', dragOver);
    bracket.addEventListener('drop', dragDrop);

}




//Drag Functions
function dragStart(e) {
    console.log("dragStart");
    // this.className += ' hold';
    clickTarget = this;
    setTimeout(() => (this.classList.add('invisible')), 0);
}

function dragEnd() {
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

    // if (clickTarget.classList[1] == "logo-D") {
    //     console.log(checkClass);
    //     if (checkClass[0] == "dddd") {
    //         this.className = 'dddd';
    //         clickTarget.draggable = false;
    //         this.append(clickTarget);
    //     }
    // } else if (clickTarget.classList[1] == "logo-semi") {

    //     if (checkClass[0] == "semi") {
    //         this.className = 'semi';
    //         this.append(clickTarget);
    //         clickTarget.draggable = false;
    //     }
    // }

    if (this.classList[0] == "bracket") {
        console.log(clickTarget.classList[1]);
        if (clickTarget.classList[1] == "logo-D") {
            const dddd = document.querySelector('.dddd');
            dddd.append(clickTarget);
            clickTarget.draggable = false;
        } else if (clickTarget.classList[1] == "logo-semi") {
            const semi = document.querySelector('.semi');
            semi.append(clickTarget);
            // if (checkClass[0] == "semi") {
            //     this.className = 'semi';
            //     this.append(clickTarget);
                clickTarget.draggable = false;
            // }
        }

    }


    clickTarget.style.left = "0"
    clickTarget.style.transform = "rotate(0deg)";
    clickTarget.classList.remove('invisible');

}