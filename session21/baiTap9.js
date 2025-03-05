let number = +prompt("Mời bạn nhập một số:");

if (isNaN(number) || number < 1 || !Number.isInteger(number)) {
    document.write("Số không hợp lệ");
} else {
    let isPrime = true;

    if (number === 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        document.write(number + " là số nguyên tố");
    } else {
        document.write(number + " không phải là số nguyên tố");
    }
}
