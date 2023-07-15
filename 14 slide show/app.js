// const { cpSync } = require("fs");

var imgBoxs = document.querySelectorAll('.slide-img');

const $ = document.querySelector.bind(document);
var left = $(".left");
var right = $(".right");
var imgShow  = $('.content img');
var curValue = 0;
function handle(cur){
    $(".active").classList.remove('active');
    imgBoxs[cur].classList.add('active');
    imgShow.src = imgBoxs[cur].querySelector('img').src;
}
imgBoxs.forEach((imgBox,index) => {
    imgBox.onclick = () =>{
        handle(index);
        curValue = index;
    }
})
left.onclick = ()=>{
    if(curValue > 0){
        curValue --;
        handle(curValue)
    }
    else if(curValue == 0){
        curValue = 8;
        handle(curValue)
    }
}
right.onclick = ()=>{
    if(curValue < 8){
        curValue ++;
        handle(curValue)
    }
    else if(curValue == 8){
        curValue = 0;
        handle(curValue)
    }
}
