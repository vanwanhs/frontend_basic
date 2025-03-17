let users = [];
let choice;
do {
    console.log("1. Đăng ký người dùng mới");
    console.log("2. Đăng nhập người dùng");
    console.log("3. Thoát");

    choice = +prompt("Nhập lựa chọn của bạn");

    switch (choice) {
        case 1:
            registerUser(users);
            break;
        case 2:
            loginUser(users);
            break;
        case 3:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
            break;
    }
}
while (choice != 3);

function registerUser(users) {
    let user = {};
    user.name = prompt("Nhập tên người dùng");
    user.email = prompt("Nhập email");
    user.password = prompt("Nhập mật khẩu");

    if (user.email.includes("@") && (user.email.endsWith(".com") || user.email.endsWith(".vn")) && user.password.length >= 6) {
        let index = users.findIndex(function (u) {
            return u.email === user.email;
        });

        if (index === -1) {
            users.push(user);
            console.log("Đăng ký thành công.");
        } else {
            console.log("Email đã tồn tại.");
        }
    } else {
        console.log("Email hoặc mật khẩu không hợp lệ.");
    }
}

function loginUser(users) {
    let email = prompt("Nhập email");
    let password = prompt("Nhập mật khẩu");

    let user = users.find(function (u) {
        return u.email === email && u.password === password;
    });

    if (user) {
        console.log("Đăng nhập thành công.");
        console.log("Thông tin người dùng:");
        console.table(user);
    } else {
        console.log("Đăng nhập không thành công.");
    }
}