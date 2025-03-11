let choice;
let chuoi = "";
do {
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tính độ dài của chuỗi");
    console.log("4. Đếm số lần xuất hiện của một ký tự");
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log("6. Chuyển đổi chữ in hoa các ký tự đầu tiên của từ");
    console.log("7. Thoát chương trình");
    
    choice = +prompt("Lựa chọn của bạn là: ");
    
    switch (choice) {
        case 1:
            chuoi = prompt("Nhập chuỗi:");
            break;
        case 2:
            console.log("Chuỗi hiện tại: " + chuoi);
            break;
        case 3:
            console.log("Độ dài của chuỗi: " + chuoi.length);
            break;
        case 4:
            let kyTu = prompt("Nhập ký tự cần đếm:");
            let dem = 0;
            for (let i = 0; i < chuoi.length; i++) {
                if (chuoi[i] === kyTu) {
                    dem++;
                }
            }
            console.log("Số lần xuất hiện của ký tự '" + kyTu + "': " + dem);
            break;
        case 5:
            let daoNguoc = "";
            for (let i = chuoi.length - 1; i >= 0; i--) {
                daoNguoc += chuoi[i];
            }
            if (chuoi === daoNguoc) {
                console.log("Chuỗi là chuỗi đối xứng");
            } else {
                console.log("Chuỗi không phải là chuỗi đối xứng");
            }
            break;
        case 6:
            let words = chuoi.split(" ");
            let result = "";
            for (let i = 0; i < words.length; i++) {
                if (words[i].length > 0) {
                    result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
                }l
            }
            chuoi = result.trim();
            console.log("Chuỗi sau khi chuyển đổi: " + chuoi);
            break;
        case 7:
            console.log("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            console.log("Mời bạn nhập lại lựa chọn");
            break;
    }
} while (choice !== 7);
