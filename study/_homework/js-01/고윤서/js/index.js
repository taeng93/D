let S_circle = document.querySelector(".sta-circle");
let enterBox = document.querySelector(".con-enterbox");
let secStart = document.querySelector(".con-start")

window.onload = function Hello() {
    enterBox.classList.add("scale-in-center");
}

function changeCircle2() {
    if (S_circle.classList.contains("circle-1col")) {
        S_circle.classList.replace("circle-1col", "circle-2col");
    }

    setTimeout(function byeCircle() {
        enterBox.classList.add("slide-out-blurred-top");
    }, 1500);

    setTimeout(function goMainpage() {
        secStart.classList.replace("bg-black","bg-grey");
    }, 3000);
}


S_circle.onclick = changeCircle2;
