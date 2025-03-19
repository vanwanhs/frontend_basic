function login() {
    const userName = document.getElementById("Username").value;
    const passWord = document.getElementById("password").value;
    if (userName === "huanrose@gmail.com" && passWord === "123456") {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
}