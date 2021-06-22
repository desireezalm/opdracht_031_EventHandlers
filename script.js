// DEEL 1

const myButton = document.getElementById("mybutton");
myButton.addEventListener("click", alertMe);

function alertMe(){
    alert("button clicked")
};

const backgroundButton = document.querySelector(".backgroundButton");
// backgroundButton.addEventListener("click", changeColor(), false);

/*
function changeColor(){
    backgroundButton.classList.add("red-background");
};
*/

function toggleColor(){
    backgroundButton.classList.toggle("red-background");
};
backgroundButton.addEventListener("click", toggleColor);