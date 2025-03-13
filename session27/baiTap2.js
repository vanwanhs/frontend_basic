let choice;
let arr = []; // Mảng chứa danh sách sinh viên

do {
    console.log("======== MENU =======");
    console.log("1. Nhập số lượng sinh viên");
    console.log("2. Hiển thị danh sách sinh viên");
    console.log("3. Tìm sinh viên theo tên");
    console.log("4. Xóa sinh viên ra khỏi danh sách");
    console.log("5. Thoát");
    choice = +prompt("Lựa chọn của bạn:");

    switch (choice) {
        case 1:
            addUser(arr);
            break;
        case 2:
            showList(arr);
            break;
        case 3:
            searchName(arr);
            break;
        case 4:
            deletelUser(arr);
            break;
        case 5:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, mời bạn nhập lại.");
    }
} while (choice !== 5);

function addUser(arr) {
    let num = +prompt("Mời bạn nhập số lượng sinh viên muốn thêm:");
    for (let i = 0; i < num; i++) {
        let value = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
        arr.push(value);
    }
}

function showList(arr) {
    if (arr.length === 0) {
        console.log("Danh sách sinh viên trống!");
        alert("Danh sách sinh viên trống!");
    } else {
        console.log("Danh sách sinh viên:");
        console.log(arr.join("\n"));
        alert("Danh sách sinh viên:\n" + arr.join("\n"));
    }
}

function searchName(arr) {
    let key = prompt("Mời bạn nhập tên muốn tìm:");
    if (!key) return;
    key = key.toLowerCase();
    let result = arr.filter((item) => item.toLowerCase()===key);
    if (result.length > 0) {
        console.log("Kết quả tìm kiếm:", result);
        alert("Tìm thấy sinh viên:\n" + result.join("\n"));
    } else {
        console.log("Không tìm thấy sinh viên nào!");
        alert("Không tìm thấy sinh viên nào!");
    }
}

function deleteUser(arr) {
    let key = prompt("Nhập tên sinh viên muốn xóa:");
    if (!key) return;
    let index = arr.findIndex((item) => item.toLowerCase() === key.toLowerCase());
    if (index !== -1) {
        arr.shift(index, 1);
        console.log(`Đã xóa sinh viên: ${key}`);
        alert(`Đã xóa sinh viên: ${key}`);
    } else {
        console.log("Không tìm thấy sinh viên cần xóa.");
        alert("Không tìm thấy sinh viên cần xóa.");
    }
}

