let choice;
do {
    console.log("1. Tính diện tích hình tròn.");
    console.log("2. Tính chu vi hình tròn.");
    console.log("3. Tính diện tích hình chữ nhật.");
    console.log("4. Tính chu vi hình chữ nhật.");
    console.log("5. Thoát.");

    choice = +prompt("Mời bạn nhập lựa chọn của mình:");

    switch (choice) {
        case 1:
            tinhDienTichHinhTron();
            break;
        case 2:
            tinhChuViHinhTron();
            break;
        case 3:
            tinhDienTichHinhChuNhat();
            break;
        case 4:
            tinhChuViHinhChuNhat();
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 5);

function tinhDienTichHinhTron() {
    let a = parseFloat(prompt("Mời bạn nhập bán kính:"));
    if (a > 0) {
        let result = Math.PI * a * a;
        console.log(`Diện tích hình tròn: ${result.toFixed(2)}`);
    } else {
        console.log("Bán kính phải lớn hơn 0.");
    }
}

function tinhChuViHinhTron() {
    let a = parseFloat(prompt("Mời bạn nhập bán kính:"));
    if (a > 0) {
        let result = 2 * Math.PI * a;
        console.log(`Chu vi hình tròn: ${result.toFixed(2)}`);
    } else {
        console.log("Bán kính phải lớn hơn 0.");
    }
}

function tinhDienTichHinhChuNhat() {
    let dai = parseFloat(prompt("Mời bạn nhập chiều dài:"));
    let rong = parseFloat(prompt("Mời bạn nhập chiều rộng:"));
    if (dai > 0 && rong > 0) {
        let result = dai * rong;
        console.log(`Diện tích hình chữ nhật: ${result.toFixed(2)}`);
    } else {
        console.log("Chiều dài và chiều rộng phải lớn hơn 0.");
    }
}

function tinhChuViHinhChuNhat() {
    let dai = parseFloat(prompt("Mời bạn nhập chiều dài:"));
    let rong = parseFloat(prompt("Mời bạn nhập chiều rộng:"));
    if (dai > 0 && rong > 0) {
        let result = 2 * (dai + rong);
        console.log(`Chu vi hình chữ nhật: ${result.toFixed(2)}`);
    } else {
        console.log("Chiều dài và chiều rộng phải lớn hơn 0.");
    }
}
