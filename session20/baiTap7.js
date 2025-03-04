let n = parseInt(prompt("Nhập số Fibonacci cần hiển thị: "));

if (!Number.isInteger(n) || n <= 0) {
    console.log("Không hợp lệ");
} else {
    let fib1 = 1, fib2 = 1, temp;
    let result = "1";
    if (n > 1) result += " 1";
    for (let i = 2; i < n; i++) {
        temp = fib1 + fib2;
        result += " " + temp;
        fib1 = fib2;
        fib2 = temp;
    }
    console.log(result);
}
