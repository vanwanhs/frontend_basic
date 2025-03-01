const num = parseInt(prompt("Nhập số nguyên (0 - 999): "));
if (isNaN(num) || num < 0 || num > 999) {
    alert("Số không hợp lệ!");
} else {
    let hundred = Math.floor(num / 100);
    let ten = Math.floor((num % 100) / 10);
    let one = num % 10;

    let output = "";
    if (hundred > 0) {
        if (hundred === 1) output += "một trăm";
        else if (hundred === 2) output += "hai trăm";
        else if (hundred === 3) output += "ba trăm";
        else if (hundred === 4) output += "bốn trăm";
        else if (hundred === 5) output += "năm trăm";
        else if (hundred === 6) output += "sáu trăm";
        else if (hundred === 7) output += "bảy trăm";
        else if (hundred === 8) output += "tám trăm";
        else if (hundred === 9) output += "chín trăm";
        if (ten === 0 && one > 0) output += " lẻ";
    }

    if (ten === 1) {
        if (one === 0) output += " mười";
        else if (one === 1) output += " mười một";
        else if (one === 2) output += " mười hai";
        else if (one === 3) output += " mười ba";
        else if (one === 4) output += " mười bốn";
        else if (one === 5) output += " mười lăm";
        else if (one === 6) output += " mười sáu";
        else if (one === 7) output += " mười bảy";
        else if (one === 8) output += " mười tám";
        else if (one === 9) output += " mười chín";
    } else if (ten > 1) {
        if (ten === 2) output += " hai mươi";
        else if (ten === 3) output += " ba mươi";
        else if (ten === 4) output += " bốn mươi";
        else if (ten === 5) output += " năm mươi";
        else if (ten === 6) output += " sáu mươi";
        else if (ten === 7) output += " bảy mươi";
        else if (ten === 8) output += " tám mươi";
        else if (ten === 9) output += " chín mươi";
        
        if (one === 1) output += " mốt";
        else if (one === 2) output += " hai";
        else if (one === 3) output += " ba";
        else if (one === 4) output += " bốn";
        else if (one === 5) output += " lăm";
        else if (one === 6) output += " sáu";
        else if (one === 7) output += " bảy";
        else if (one === 8) output += " tám";
        else if (one === 9) output += " chín";
    } else if (one > 0) {
        if (one === 1) output += " một";
        else if (one === 2) output += " hai";
        else if (one === 3) output += " ba";
        else if (one === 4) output += " bốn";
        else if (one === 5) output += " năm";
        else if (one === 6) output += " sáu";
        else if (one === 7) output += " bảy";
        else if (one === 8) output += " tám";
        else if (one === 9) output += " chín";
    }
    
    alert(output.trim());
}
