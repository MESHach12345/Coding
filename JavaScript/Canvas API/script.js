var canvasEl = document.getElementById("myCanvas");
var context = canvasEl.getContext("2d");



// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250,250);
// context.lineTo(250,500);
// context.moveTo(500,0);
// context.lineTo(250,250);
// context.stroke();

// Triangle
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,500);
// context.moveTo(250,0);
// context.lineTo(500,500);
// context.lineTo(0,500);
// context.fill();
// context.stroke();

// Rectangle
// context.strokeStyle = "black";
// context.lineWidth = 10;
// context.fillStyle = "yellow";
// context.strokeRect(0, 0, 250, 250);
// context.fillRect(0, 0, 250, 250);

// context.strokeStyle = "red";
// context.fillStyle = "blue";
// context.strokeRect(0, 250, 250, 250);
// context.fillRect(0, 250, 250, 250);

// context.strokeStyle = "red";
// context.fillStyle = "blue";
// context.strokeRect(250, 0, 250, 250);
// context.fillRect(0, 250, 250, 250);

// Circle

// context.beginPath();
// context.arc(250,250,200,0, 2*Math.PI);
// context.stroke();

// Drawing Text

context.font = "50px Arial";
context.textAlign = "center";
context.fillText("You Win!!", canvasEl.width/2, canvasEl.height/2);