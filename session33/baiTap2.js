let inputText=document.getElementById("text");
let textLength = document.getElementById("textLength");
let length = inputText.value;
function test() {
    let length = inputText.value;
    textLength.innerText= length.length + "ký tự";
    inputText.value= ""
}