const User = {
    contacts: [],
};

function menu() {
    console.log("1. Thêm đối tượng Contact vào danh sách liên hệ.");
    console.log("2. Hiển thị danh sách danh bạ.");
    console.log("3. Tìm kiếm thông tin Contact theo số điện thoại.");
    console.log("4. Cập nhật thông tin Contact (name, email, phone) theo id.");
    console.log("5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.");
    console.log("6. Thoát.");
}

function addUser() {
    let name = prompt("Nhập tên: ");
    let email = prompt("Nhập email: ");
    let phone = prompt("Nhập số điện thoại: ");
    let id = User.contacts.length + 1;
    User.contacts.push({ id, name, email, phone });
    console.log("Thêm liên hệ thành công!");
}

function displayContacts() {
    if (User.contacts.length === 0) {
        console.log("Danh bạ trống.");
    } else {
        console.log("Danh sách liên hệ:");
        User.contacts.forEach(contact => {
            console.log(`ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}`);
        });
    }
}

function searchContactByPhone() {
    let phone = prompt("Nhập số điện thoại cần tìm: ");
    let result = User.contacts.find(contact => contact.phone === phone);
    if (result) {
        console.log("Kết quả tìm kiếm:", result);
    } else {
        console.log("Không tìm thấy liên hệ với số điện thoại đã nhập.");
    }
}

function updateContactById() {
    let id = +prompt("Nhập ID liên hệ cần cập nhật: ");
    let contact = User.contacts.find(contact => contact.id === id);
    if (contact) {
        let name = prompt("Nhập tên mới: ");
        let email = prompt("Nhập email mới: ");
        let phone = prompt("Nhập số điện thoại mới: ");
        contact.name = name;
        contact.email = email;
        contact.phone = phone;
        console.log("Cập nhật liên hệ thành công!");
    } else {
        console.log("Không tìm thấy liên hệ với ID đã nhập.");
    }
}
function deleteContactById() {
    let id = +prompt("Nhập ID liên hệ cần xóa: ");
    if (isNaN(id) || id <= 0) {
        console.log("ID không hợp lệ. Vui lòng nhập một số nguyên dương.");
        return;
    }
    let index = User.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        User.contacts.splice(index, 1);
        console.log("Xóa liên hệ thành công!");
    } else {
        console.log("Không tìm thấy liên hệ với ID đã nhập.");
    }
}

let choice;
do {
    menu();
    choice = +prompt("Mời bạn nhập lựa chọn của mình: ");
    switch (choice) {
        case 1:
            addUser();
            break;
        case 2:
            displayContacts();
            break;
        case 3:
            searchContactByPhone();
            break;
        case 4:
            updateContactById();
            break;
        case 5:
            deleteContactById();
            break;
        case 6:
            console.log("Cảm ơn bạn đã sử dụng hệ thống!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
            break;
    }
} while (choice !== 6);