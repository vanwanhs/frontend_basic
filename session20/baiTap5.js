let number1 = +prompt("Mời bạn nhập một số bất kỳ:");
let number2 = +prompt("Mời bạn nhập một số bất kỳ:");

if (isNaN(number1) || !Number.isInteger(number1) || 
    isNaN(number2) || !Number.isInteger(number2)) {
    document.write("Bạn nhập không hợp lệ");
} else {
    let result = 1;
    if (number2 >= 0) { 
        for (let i = 1; i <= number2; i++) {
            result *= number1;
        }
    } else { 
        for (let i = 1; i <= number2; i++) { 
            result *= number1;
        }
        result = 1 / result;
    }

    document.write(number1 + " ^ " + number2 + " = " + result);
}
