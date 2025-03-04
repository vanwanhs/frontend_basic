let number = prompt("Mời bạn nhập số bất kỳ:");

if (isNaN(number) || !Number.isInteger(+number)) {
    document.write("Số nhập không hợp lệ!");
} else {
    let isPalindrome = true;
    let length = number.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (number[i] !== number[length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        document.write("Số này là số đối xứng");
    } else {
        document.write("Số này không phải là số đối xứng");
    }
}
