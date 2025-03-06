let input = prompt("Mời bạn nhập một số nguyên:");
if (Number.isInteger(+input)) {
    let reversed = input.split("").reverse().join("");
    document.write(+reversed);
} else {
    document.write("Dữ liệu không hợp lệ");
}
