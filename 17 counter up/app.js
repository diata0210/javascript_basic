var box = document.querySelectorAll(".box p");
console.log(box);
 
function countE(e, to) {
    var count = 0;
    var time = 250;
    var step = to / time;
    let counting = setInterval(() => {
    count += step;
    if (count < to) {
        e.innerText = Math.round(count);
    } else {
        clearInterval(counting);
        e.innerText = to;
    }
    }, 1);
}
countE(box[0], 3300);
countE(box[1], 1000);
countE(box[2], 9900);
