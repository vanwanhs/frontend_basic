let result = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Mời bạn nhập số:");
    if (number % 2 !== 0) {
        result += number;
    }
}

document.write(result);