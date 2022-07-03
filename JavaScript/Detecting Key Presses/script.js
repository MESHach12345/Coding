var divEl = document.getElementById("myDiv");

let x=0;
let y=0;

window.addEventListener("keydown", move);

function move(direction) {
    switch(direction.key) {
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y+"px";
            break;
        
        case "ArrowUp":
            y-=5;
            myDiv.style.top = y+"px";
            break;
        
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = x+"px";
            break;

        case "ArrowRight":
            x+=5;
            myDiv.style.left = x+"px";
            break;

        default: 
            break;
    }
}