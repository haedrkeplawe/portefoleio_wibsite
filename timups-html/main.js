//للقايمه
let open = document.querySelector("nav .container .open");
let close = document.querySelector("nav .container .close")
let myele = document.querySelector("nav .container .box2 ");
let mainele = document.querySelector("nav .container");

open.onclick = function () {
    mainele.style.flexDirection = "column";
    myele.className = "box2 show";
    open.style.display = "none";
    close.style.display = "block"
}
close.onclick = function () {
    mainele.style.flexDirection = "row";
    myele.className = "box2";
    open.style.display = "block";
    close.style.display = "none";
}
//////////////////////////////
// لعرظ المزيد من الصور
let bootonEmg = document.querySelector(".latest .container .button span");
let boxEmg = document.querySelectorAll(".latest .container .fif .box.more");

bootonEmg.onclick = function () {
    boxEmg.forEach(element => {
        element.classList = "box"
    });
}

// onother pector

let bootonEle = document.querySelector(".Features .container .button span");
let boxEle = document.querySelectorAll(".Features .container .boxs .box.more");

bootonEle.onclick = function () {
    boxEle.forEach(element => {
        element.classList = "box"
    });
}


