let a = Number(prompt("Nhập số thứ nhất:"));
let b = Number(prompt("Nhập số thứ hai:"));
let operation = prompt("Nhập phép toán (+, -, *, /, %, **):");

let result;

switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = b !== 0 ? a / b : "Lỗi! Không thể chia cho 0";
        break;
    case "%":
        result = b !== 0 ? a % b : "Lỗi! Không thể chia cho 0";
        break;
    case "**":
        result = a ** b;
    default:
        result = "Phép toán không hợp lệ!";
}

alert("Kết quả: " + result);
