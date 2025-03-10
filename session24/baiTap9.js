let choice;
let chuoi = "";
do {
    console.log("1. Nhập chuỗi ký tự");
    console.log("2. Hiển thị chuỗi ký tự");
    console.log("3. Đếm số lượng các ký tự là chữ và số trong chuỗi ký tự nhập vào");
    console.log("4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi");
    console.log("5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dùng nhập vào");
    console.log("6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất");
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
            let countLetter = 0, countDigit = 0;
            for (let char of chuoi) {
                if (/[a-zA-Z]/.test(char)) countLetter++;
                if (/[0-9]/.test(char)) countDigit++;
            }
            console.log("Số ký tự chữ: " + countLetter);
            console.log("Số ký tự số: " + countDigit);
            break;
        case 4:
            let swapped = "";
            for (let char of chuoi) {
                if (char === char.toUpperCase()) {
                    swapped += char.toLowerCase();
                } else {
                    swapped += char.toUpperCase();
                }
            }
            console.log("Chuỗi sau khi đổi hoa-thường: " + swapped);
            break;
        case 5:
            let chuoi2 = prompt("Nhập chuỗi thứ hai:");
            let mixed = "";
            let maxLength = Math.max(chuoi.length, chuoi2.length);
            for (let i = 0; i < maxLength; i++) {
                if (i < chuoi.length) mixed += chuoi[i];
                if (i < chuoi2.length) mixed += chuoi2[i];
            }
            console.log("Chuỗi sau khi trộn: " + mixed);
            break;
        case 6:
            let wordsArr = chuoi.split(/\s+/);
            wordsArr.sort((a, b) => a.length - b.length);
            console.log("Chuỗi sau khi sắp xếp theo độ dài: " + wordsArr.join(" "));
            break;
        case 7:
            console.log("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            console.log("Mời bạn nhập lại lựa chọn");
            break;
    }
} while (choice !== 7);
