let result = document.getElementsByTagName("p");
function hideText() {
    result[0].classList.add("text");
}
function showText() {
    result[0].classList.remove("text");
}