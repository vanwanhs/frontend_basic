let day = parseInt(prompt("Mời bạn nhập ngày sinh của mình:"));
let month = parseInt(prompt("Mời bạn nhập tháng sinh của mình:"));
let text = "";

if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    text = "Bạch Dương";
} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    text = "Kim Ngưu";
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    text = "Song Tử";
} else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    text = "Cự Giải";
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    text = "Sư Tử";
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    text = "Xử Nữ";
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    text = "Thiên Bình";
} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    text = "Bọ Cạp";
} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    text = "Nhân Mã";
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    text = "Ma Kết";
} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    text = "Bảo Bình";
} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    text = "Song Ngư";
} else {
    text = "Ngày hoặc tháng không hợp lệ!";
}

console.log(`Cung của bạn là: ${text}`);