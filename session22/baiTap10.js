let arr = []; 
function showMenu() {
    console.log("\nMENU");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Thêm phần tử");
    console.log("4. Sửa phần tử");
    console.log("5. Xóa phần tử");
    console.log("6. Thoát");
}

while (true) {
    showMenu();
    let choice = parseInt(prompt("Lựa chọn của bạn: "));

    switch (choice) {
        case 1: // Nhập mảng
            let input = prompt("Nhập các số cách nhau bởi dấu cách: ");
            arr = input.split(" ").map(Number); 
            console.log("Mảng đã nhập:", arr);
            break;

        case 2: // Hiển thị mảng
            console.log("Mảng hiện tại:", arr);
            break;

        case 3: // Thêm phần tử
            let newElement = parseInt(prompt("Nhập số cần thêm: "));
            arr.push(newElement);
            console.log("Mảng sau khi thêm:", arr);
            break;

        case 4: // Sửa phần tử
            let indexEdit = parseInt(prompt("Nhập vị trí cần sửa (bắt đầu từ 0): "));
            if (indexEdit >= 0 && indexEdit < arr.length) {
                let newValue = parseInt(prompt("Nhập giá trị mới: "));
                arr[indexEdit] = newValue;
                console.log("Mảng sau khi sửa:", arr);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 5: // Xóa phần tử
            let indexDelete = parseInt(prompt("Nhập vị trí cần xóa (bắt đầu từ 0): "));
            if (indexDelete >= 0 && indexDelete < arr.length) {
                arr.splice(indexDelete, 1);
                console.log("Mảng sau khi xóa:", arr);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 6: // Thoát
            console.log("Chương trình kết thúc.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 6.");
    }

    if (choice === 6) break;
}
