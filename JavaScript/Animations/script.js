var buttonEl = document.getElementById("myButton");
var animationDiv = document.getElementById("myDiv");

buttonEl.addEventListener("click", begin);

function begin() {
    let timerId = null;
    // let x=0;
    // let y=0;

    // let degrees = 0;

    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame() {
        // if(x>=200 || y>=200) {
        //     clearInterval(timerID);
        // } else {
        //     x++;
        //     y++;
        //     animationDiv.style.top = y +"px";
        //     animationDiv.style.left = x + "px";
        // }

        // if (x>=200 || y>=200) {
        //     clearInterval(timerId);
        // } else {
        //     degrees+=2;
        //     x++;
        //     y++;
        //     animationDiv.style.top = y + "px";
        //     animationDiv.style.left = x+ "px";
        //     animationDiv.style.transform = "rotateZ(" + degrees + "deg)";
        // }

        if (scaleX<=0.1 || scaleY<=0.1) {
            clearInterval(timerId);
        } else {
            scaleX -=0.01;
            scaleY -=0.01;
            animationDiv.style.transform = "scale(" + scaleX + "," + scaleY + ")";
        }

    }
}