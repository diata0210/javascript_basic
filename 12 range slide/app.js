var range = document.querySelector(".range");
var rangeBartext = document.querySelector(".range-bar span");
var rangeBar = document.querySelector(".range-bar");
console.log(rangeBar);
console.log(rangeBartext);
var body = document.querySelector('body');
range.addEventListener('mousemove', function(e){
    var rangeBarWidth = parseInt(e.pageX - this.offsetLeft);
    // console.log("page x: ",e.pageX)
    // console.log("offset " ,this.offsetLeft)
    // console.log(this)
    // console.log(rangeBarWidth)
    var percent = Math.round(rangeBarWidth / this.offsetWidth * 100);
    rangeBartext.innerText = `${percent} %`;
    // console.log(rangeBartext.innerText)
    rangeBar.style.width = `${percent}%`;
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
})