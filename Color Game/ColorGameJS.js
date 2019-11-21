//Variables
var colors = [];
var squares = document.querySelectorAll(".square");
var newColorsBtn = document.querySelector("#changeColor");
var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");
var correctColor;
var h1= document.querySelector("h1");

initialize(6);

//Adding the event listeners
for (var i=0;i<squares.length;i++){

    squares[i].addEventListener("click", function () {
        var colorPicked = this.style.backgroundColor;

        if (colorPicked === correctColor){
            document.querySelector("#massage").textContent = "Correct!";
            changeAllColors(this.style.backgroundColor);
            h1.style.backgroundColor = correctColor;
            newColorsBtn.textContent = "Play Again?";
        }
        else{
            document.querySelector("#massage").textContent = "Try again";
            this.style.backgroundColor = "#232323";
            this.classList.remove("hovered");
        }
    });
}
//---------
newColorsBtn.addEventListener("click", function () {
    if (colors.length === 6){
        colors = [];
        initialize(6);
    }
    else{
        colors = [];
        initialize(3);
    }

    h1.style.backgroundColor = "steelblue";
});
//---------
hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    initialize(6);
    for (i=squares.length/2;i<squares.length;i++) {
        squares[i].style.display = "block";
    }
});
//---------
easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    initialize(3);
    for (i=squares.length/2;i<squares.length;i++){
            squares[i].style.display = "none";
    }
});

//Functions
function changeAllColors(color) {
    for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function pickRGB() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function fillSquares() {

    for (i=0 ; i<colors.length ; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

}

function initialize(number) {
    colors= [];
    for (var i=0; i<number;i++){
        colors.push(pickRGB());
    }
    fillSquares();
    correctColor = pickColor();
    document.querySelector("#colorDisplay").textContent = correctColor;
    document.querySelector("#massage").textContent = "";
    newColorsBtn.textContent = "New Colors";

}
