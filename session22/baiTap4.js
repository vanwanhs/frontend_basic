let n = prompt("Mời bạn nhập dãy số:");
if (!isNaN(n) && Number.isInteger(+n)) {
    let arr = n.split("");
    let maxDigit = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxDigit) {
            maxDigit = arr[i];
        }
    }

    document.write("Số lớn nhất trong mảng: " + maxDigit);
} else {
    document.write("Dữ liệu không hợp lệ");
}
