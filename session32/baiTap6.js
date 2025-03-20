let fontSize = 16;

function tang() {
    fontSize += 1;
    document.querySelector("h1").style.fontSize = fontSize + "px";
}

function giam() {
    fontSize -= 1;
    document.querySelector("h1").style.fontSize = fontSize + "px";
}
