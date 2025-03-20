function check() {
    let text = document.getElementById("text").value.trim();
    let validate = document.getElementById("validate");

    if (text === "") {
        validate.innerText = "Dữ liệu không hợp lệ";
        validate.style.color = "red";
        return;
    }

    if (text.includes("@") && (text.endsWith(".com") || text.endsWith(".vn"))) {
        validate.innerText = "Email hợp lệ";
        validate.style.color = "green";
    } else {
        validate.innerText = "Email không hợp lệ";
        validate.style.color = "red";
    }
}
