let choice;
let chuoi = "";
do {
    console.log("1. Nhập chuỗi ký tự");
    console.log("2. Hiển thị chuỗi ký tự");
    console.log("3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện");
    console.log("4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi");
    console.log("5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi");
    console.log("6. Chuyển đổi chuỗi ký tự thành dạng snake_case");
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
            let wordsCount = {};
            let words = chuoi.toLowerCase().split(/\s+/);
            for (let word of words) {
                wordsCount[word] = (wordsCount[word] || 0) + 1;
            }
            console.log("Số lần xuất hiện của các từ:", wordsCount);
            break;
        case 4:
            let wordsArr = chuoi.split(/\s+/);
            let minWord = wordsArr[0], maxWord = wordsArr[0];
            for (let word of wordsArr) {
                if (word.length < minWord.length) minWord = word;
                if (word.length > maxWord.length) maxWord = word;
            }
            console.log("Từ ngắn nhất: " + minWord);
            console.log("Từ dài nhất: " + maxWord);
            break;
        case 5:
            let charCount = {};
            let maxFreq = 0;
            let maxChars = [];
            for (let char of chuoi) {
                if (char !== ' ') {
                    charCount[char] = (charCount[char] || 0) + 1;
                    if (charCount[char] > maxFreq) {
                        maxFreq = charCount[char];
                        maxChars = [char];
                    } else if (charCount[char] === maxFreq) {
                        maxChars.push(char);
                    }
                }
            }
            console.log("Ký tự xuất hiện nhiều nhất: " + maxChars.join(", ") + " với " + maxFreq + " lần");
            break;
        case 6:
            let snakeCase = chuoi.toLowerCase().replace(/\s+/g, "_");
            console.log("Chuỗi dạng snake_case: " + snakeCase);
            break;
        case 7:
            console.log("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            console.log("Mời bạn nhập lại lựa chọn");
            break;
    }
} while (choice !== 7);
