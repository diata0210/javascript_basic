var animation = document.querySelectorAll('.show-on-scroll');

function checkInViewWindow(e){
    var rect = e.getClientRects()[0];
    var heightScreen = window.innerHeight;
    if(!(rect.bottom <  0  || rect.top > heightScreen)){
        e.classList.add('start');
    }else{
        e.classList.remove('start');
    }
}
function  checkAnimation(){
    animation.forEach(e=>{
        checkInViewWindow(e)
    })
}
window.onscroll = () =>{
    checkAnimation();
}