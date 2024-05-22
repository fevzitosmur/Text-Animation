function changeText() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("scrolling-text").textContent = userInput;
}


var animation;

function changeText() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("scrolling-text").textContent = userInput;
}

function stopAnimation() {
    var scrollingText = document.getElementById("scrolling-text");
    scrollingText.style.animationPlayState = "paused";
}
 
function startAnimation(){
    var scrollingText=document.getElementById("scrolling-text")
    scrollingText.style.animationPlayState="running";
}
function startAnimation() {
    var userInput = document.getElementById("user-input").value;
    var scrollingText = document.getElementById("scrolling-text");

    if (userInput.trim() === "") {
        alert("Please enter text before starting the animation.");
    } else {
        scrollingText.style.animationPlayState = "running";
    }
}
