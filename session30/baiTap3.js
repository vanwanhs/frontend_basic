let mobi = [
    { id: 1, name: "Samsung GalaxyS10", price: 10000, quantity: 20, company: "SamSung" },
    { id: 2, name: "Iphone 7plus", price: 100000, quantity: 22, company: "Apple" },
    { id: 3, name: "Xiaomi redmi", price: 120000, quantity: 50, company: "Xiaomi" }
];

let cart = [];

function menu() {
    console.log("\n==== QUẢN LÝ CỬA HÀNG ĐIỆN THOẠI ====");
    console.log("1. Hiển thị danh sách điện thoại theo hãng");
    console.log("2. Thêm điện thoại mới vào cửa hàng");
    console.log("3. Tìm kiếm điện thoại theo tên hoặc ID");
    console.log("4. Mua điện thoại");
    console.log("5. Thanh toán giỏ hàng");
    console.log("6. Sắp xếp điện thoại theo giá tăng dần");
    console.log("7. Sắp xếp điện thoại theo giá giảm dần");
    console.log("8. Hiển thị tổng số tiền của các điện thoại trong kho");
    console.log("9. Hiển thị tổng số lượng điện thoại theo từng hãng");
    console.log("0. Thoát chương trình");
}

function showListByCompany() {
    let company = prompt("Nhập hãng điện thoại:");
    let result = mobi.filter(item => item.company.toLowerCase() === company.toLowerCase());
    if (result.length > 0) {
        console.log(`Danh sách điện thoại của hãng ${company}:`);
        result.forEach(item => console.log(item));
    } else {
        console.log(`Không tìm thấy điện thoại nào của hãng ${company}`);
    }
}

function addNewPhone() {
    let id = +prompt("Nhập mã điện thoại:");
    let name = prompt("Nhập tên điện thoại:");
    let price = +prompt("Nhập giá điện thoại:");
    let quantity = +prompt("Nhập số lượng điện thoại:");
    let company = prompt("Nhập hãng điện thoại:");

    let newPhone = { id, name, price, quantity, company };
    mobi.push(newPhone);
    console.log("Thêm điện thoại mới thành công!");
}

function searchPhone() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
    let result = mobi.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()) || item.id === +keyword);
    if (result.length > 0) {
        console.log("Kết quả tìm kiếm:");
        result.forEach(item => console.log(item));
    } else {
        console.log("Không tìm thấy điện thoại nào phù hợp.");
    }
}

function buyPhone() {
    let id = +prompt("Nhập ID điện thoại cần mua:");
    let quantity = +prompt("Nhập số lượng cần mua:");

    let phone = mobi.find(item => item.id === id);
    if (phone) {
        if (phone.quantity >= quantity) {
            phone.quantity -= quantity;
            let cartItem = cart.find(item => item.id === id);
            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity: quantity });
            }
            console.log(`Đã thêm ${quantity} ${phone.name} vào giỏ hàng.`);
        } else {
            console.log("Số lượng trong kho không đủ.");
        }
    } else {
        console.log("Không tìm thấy điện thoại với ID này.");
    }
}

function checkout() {
    if (cart.length > 0) {
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Thanh toán thành công! Tổng số tiền: ${total}`);
        cart = [];
    } else {
        console.log("Giỏ hàng trống.");
    }
}

function sortByPriceAscending() {
    let sorted = [...mobi].sort((a, b) => a.price - b.price);
    console.log("Danh sách điện thoại theo giá tăng dần:");
    sorted.forEach(item => console.log(item));
}

function sortByPriceDescending() {
    let sorted = [...mobi].sort((a, b) => b.price - a.price);
    console.log("Danh sách điện thoại theo giá giảm dần:");
    sorted.forEach(item => console.log(item));
}

function showTotalValue() {
    let total = mobi.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng số tiền của các điện thoại trong kho: ${total}`);
}

function showTotalQuantityByCompany() {
    let result = {};
    mobi.forEach(item => {
        if (result[item.company]) {
            result[item.company] += item.quantity;
        } else {
            result[item.company] = item.quantity;
        }
    });
    console.log("Tổng số lượng điện thoại theo từng hãng:");
    for (let company in result) {
        console.log(`${company}: ${result[company]}`);
    }
}

let choice;
do {
    menu();
    choice = +prompt("Lựa chọn của bạn:");
    switch (choice) {
        case 1:
            showListByCompany();
            break;
        case 2:
            addNewPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkout();
            break;
        case 6:
            sortByPriceAscending();
            break;
        case 7:
            sortByPriceDescending();
            break;
        case 8:
            showTotalValue();
            break;
        case 9:
            showTotalQuantityByCompany();
            break;
        case 0:
            console.log("Thoát chương trình. Tạm biệt!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 0);