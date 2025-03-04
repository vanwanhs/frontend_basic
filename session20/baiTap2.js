let number = +prompt("Mời bạn nhập một số bất kỳ:");

if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
    document.write("Số không hợp lệ");
} else {
    let found = false;
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0) {
            document.write(i + " chia hết cho 5<br>");
            found = true;
        }
    }
    if (!found) {
        document.write(number + " không chia hết cho 5");
    }
}
