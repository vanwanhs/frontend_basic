const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
const teens = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
const tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

const num = parseInt(prompt("Nhập số nguyên (0 - 999): "));
if (isNaN(num) || num < 0 || num > 999) {
    alert("Số không hợp lệ!");
} else {
    let words = "";
    let hundred = Math.floor(num / 100);
    let ten = Math.floor((num % 100) / 10);
    let one = num % 10;

    switch (true) {
        case hundred > 0:
            words += ones[hundred] + " trăm";
            if (ten === 0 && one > 0) words += " lẻ";
            break;
        
        case ten === 1:
            words += " " + teens[one];
            break;
        
        case ten > 1:
            words += " " + tens[ten];
            if (one > 0) words += " " + ones[one];
            break;
        
        case one > 0:
            words += " " + ones[one];
            break;
    }
    
    alert("Số đọc là:" + words.trim());
}
