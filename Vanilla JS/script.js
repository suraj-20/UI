var btn = document.querySelector("#btn");
var body = document.querySelector("body");

function clickHandler() {
    console.log("Button clicked!");
    body.innerHTML = "Some new content ";
}

btn.addEventListener('click', clickHandler);