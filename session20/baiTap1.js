let number = +prompt("Mời bạn nhập một số bất kì:").trim();
let result = 0;
if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
    document.write("Bạn nhập số không hợp lệ!");
} else {
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    document.write(`Tổng các số từ 0 đến ${number} là: ${result}`);
}
