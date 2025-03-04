let n = +prompt("Mời bạn nhập số nguyên dương:");

if (isNaN(n) || n < 1 || !Number.isInteger(n)) {
    document.write("Không hợp lệ");
} else {
    let count = 0;
    let num = 2;
    let result = ""; 
    while (count < n) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result += num + " ";
            count++;
        }

        num++;
    }

    document.write(result.trim());
}
