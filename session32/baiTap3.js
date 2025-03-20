let arr = [];

function renderLesson() {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `
        <li>
        ${arr[i]}
        </li>
        `;
    }
    let result = document.getElementById("list"); 
    result.innerHTML = str;
}

function handClick() {
    console.log("anh");

    let inputElement = document.getElementById("text"); 
    let text = inputElement.value.trim();

    if (text === "") {
        alert("Bạn nhập không hợp lệ");
        return;
    }

    arr.push(text);
    inputElement.value = "";
    renderLesson(); h
}
