let list = {};

function showMenu() {
    console.log("1. Thêm món ăn vào danh mục");
    console.log("2. Xóa món ăn theo tên khỏi danh mục");
    console.log("3. Cập nhật thông tin món ăn theo tên");
    console.log("4. Hiển thị toàn bộ menu");
    console.log("5. Tìm kiếm món ăn theo tên");
    console.log("6. Thoát");
}

function addDish() {
    let DanhMuc = prompt("Mời bạn nhập tên của danh mục muốn thêm");
    let name = prompt("Mời bạn nhập tên món ăn");
    let price = +prompt("Mời bạn nhập giá của sản phẩm");
    let text = prompt("Mời bạn nhập mô tả món ăn");

    if (!list[DanhMuc]) {
        list[DanhMuc] = [];
    }

    list[DanhMuc].push({ name, price, text });
    console.log("Thêm món ăn thành công!");
}

function updateDish() {
    let name = prompt("Mời bạn nhập tên món ăn cần cập nhật");
    let found = false;

    for (let DanhMuc in list) {
        let dish = list[DanhMuc].find((dish) => dish.name === name);
        if (dish) {
            dish.name = prompt("Nhập tên mới:") || dish.name;
            dish.price = +prompt("Nhập giá mới:") || dish.price;
            dish.text = prompt("Nhập mô tả mới:") || dish.text;
            found = true;
            console.log("Cập nhật món ăn thành công!");
            break;
        }
    }
    if (!found) {
        console.log("Không tìm thấy món ăn để cập nhật.");
    }
}

function updateDish() {
    let name = prompt("Mời bạn nhập tên món ăn cần cập nhật");
    let found = false;

    for (let DanhMuc in list) {
        let dish = list[DanhMuc].find((dish) => dish.name === name);
        if (dish) {
            DanhMuc[dish].name = prompt("Nhập tên mới:") || dish.name;
            DanhMuc[dish].price = +prompt("Nhập giá mới:") || dish.price;
            DanhMuc[dish].text = prompt("Nhập mô tả mới:") || dish.text;
            found = true;
            console.log("Cập nhật món ăn thành công!");
            break;
        }
    }

    if (!found) {
        console.log("Không tìm thấy món ăn để cập nhật.");
    }
}

function displayMenu() {
    if (Object.keys(list).length === 0) {
        console.log("Menu hiện đang trống.");
        return;
    }

    for (let DanhMuc in list) {
        console.log(`Danh mục: ${DanhMuc}`);
        list[DanhMuc].forEach((dish) => {
            console.log(`- Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.text}`);
        });
    }
}

function searchDish() {
    let name = prompt("Mời bạn nhập tên món ăn cần tìm kiếm");
    let found = false;

    for (let DanhMuc in list) {
        let dish = list[DanhMuc].find((dish) => dish.name === name);
        if (dish) {
            console.log(`Tìm thấy món ăn trong danh mục "${DanhMuc}":`);
            console.log(`- Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.text}`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Không tìm thấy món ăn.");
    }
}

function main() {
    let choice;
    do {
        showMenu();
        choice = +prompt("Lựa chọn của bạn là gì?");
        switch (choice) {
            case 1:
                addDish();
                break;
            case 2:
                deleteDish();
                break;
            case 3:
                updateDish();
                break;
            case 4:
                displayMenu();
                break;
            case 5:
                searchDish();
                break;
            case 6:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }
    } while (choice !== 6);
}

main();