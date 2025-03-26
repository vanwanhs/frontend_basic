// Lưu trữ danh sách người dùng trong localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

function sign() {
    window.location.href = "./baiTap3DK.html";
}

function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    error.innerText = "";

    let user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        error.innerText = "Email hoặc mật khẩu không chính xác!";
        return;
    }
    
    window.location.href = "./baiTap3_1.html";
}

function register() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let confirmPassword = document.getElementById("confirmpassword").value.trim();
            let error = document.getElementById("error");

            document.getElementById("error").innerText = "";

            if (!(email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn")))) {
                error.innerText = "Email không hợp lệ!";
                return;
            }
            if (password.length < 6) {
                error.innerText = "Mật khẩu phải có ít nhất 6 ký tự!";
                return;
            }
            if (password !== confirmPassword) {
                error.innerText = "Mật khẩu không khớp!";
                return;
            }
            let isExist = users.find(user => user.email === email);
            if (isExist) {
                error.innerText = "Email đã tồn tại!";
                return;
            }
            let user = {
                id: Math.floor(Math.random() * 65656566),
                email: email,
                password: password
            };

            users.push(user);

            localStorage.setItem("users", JSON.stringify(users));

            window.location = "./baiTap3.html";
}

function forgotPassword() {
    let email = prompt("Nhập email của bạn để khôi phục mật khẩu:").trim();
    let user = users.find(user => user.email === email);
    let error = document.getElementById("error");

    if (!user) {
        error.innerText = "Email không tồn tại trong hệ thống!";
        return;
    }
    
    alert("Mật khẩu của bạn là: " + user.password);
}