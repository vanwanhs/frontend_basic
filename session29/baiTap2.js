let products = [];

function menu() {
    console.log("\n===== QUẢN LÝ SẢN PHẨM =====");
    console.log("1. Thêm sản phẩm");
    console.log("2. Hiển thị tất cả sản phẩm");
    console.log("3. Tìm kiếm sản phẩm theo ID");
    console.log("4. Cập nhật sản phẩm theo ID");
    console.log("5. Xóa sản phẩm theo ID");
    console.log("6. Lọc sản phẩm theo khoảng giá");
    console.log("7. Thoát\n");
}

function addProduct() {
    let id = products.length + 1;
    let name = prompt("Nhập tên sản phẩm:");
    let price = parseFloat(prompt("Nhập giá sản phẩm:"));
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = parseInt(prompt("Nhập số lượng trong kho:"));

    if (name && !isNaN(price) && category && !isNaN(quantity)) {
        products.push({ id, name, price, category, quantity });
        console.log("Thêm sản phẩm thành công!");
    } else {
        console.log("Thông tin không hợp lệ, vui lòng thử lại.");
    }
}

function showProducts() {
    if (products.length === 0) {
        console.log("Danh sách sản phẩm trống.");
        return;
    }
    console.log("\nDanh sách sản phẩm:");
    products.forEach((item) => {
        console.log(`ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}, Danh mục: ${item.category}, Số lượng: ${item.quantity}`);
    });
}

function findProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần tìm:"));
    let product = products.find(item => item.id === id);
    console.log(product ? product : "Không tìm thấy sản phẩm.");
}

function updateProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
    let indexUpdate = products.findIndex(item => item.id === id);
    
    if (indexUpdate !== -1) {
        products[indexUpdate].name = prompt('Nhập tên mới: ');
         products[indexUpdate].price = prompt('Nhập email mới: ');
         products[indexUpdate].phone = prompt('Nhập số điện thoại mới: ' );
         products[indexUpdate].category = prompt('Nhập số điện thoại mới: ');
         productst[indexUpdate].quantity = prompt('Nhập số điện thoại mới: ', );
         alert('Cập nhật liên hệ hoàn tất');
     } else {
         alert('ID liên hệ không tồn tại');
     }
}

function deleteProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
    let index = products.findIndex(item => item.id === id);
    
    if (index !== -1) {
        products.splice(index, 1);
        products.forEach((item, i) => item.id = i + 1);
        console.log("Xóa sản phẩm thành công.");
    } else {
        console.log("Không tìm thấy sản phẩm.");
    }
}

function filterByPrice() {
    let min = parseFloat(prompt("Nhập giá nhỏ nhất:"));
    let max = parseFloat(prompt("Nhập giá lớn nhất:"));
    
    if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min > max) {
        console.log("Dữ liệu không hợp lệ.");
        return;
    }
    
    let result = products.filter(item => item.price >= min && item.price <= max);
    console.log(result.length > 0 ? result : "Không có sản phẩm nào trong khoảng giá này.");
}

function main() {
    let choice;
    do {
        menu();
        choice = parseInt(prompt("Nhập lựa chọn:"));
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                showProducts();
                break;
            case 3:
                findProduct();
                break;
            case 4:
                updateProduct();
                break;
            case 5:
                deleteProduct();
                break;
            case 6:
                filterByPrice();
                break;
            case 7:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }
    } while (choice !== 7);
}

main();
