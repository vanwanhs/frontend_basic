let n = +prompt("Mời bạn nhập vào số nguyên:");

if (isNaN(n) || !Number.isInteger(n)) {
    document.write("Bạn nhập sai rồi");
} else {
    document.write("Ước của " + n + " là: ");
    for (let i = 1; i <= Math.abs(n); i++) { 
        if (n % i == 0) {
            document.write(i + " ");
        }
    }
}
