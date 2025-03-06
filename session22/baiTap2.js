let arr = [1, 2, 3, 4, 5, 6];
let search = +prompt("Mời bạn nhập số bất kỳ:");
let found = false; 
for (let i = 0; i < arr.length; i++) {
    if (search === arr[i]) {
        document.write("Bingo");
        found = true;
        break;
    }
}
if (!found) {
    document.write("Chúc bạn may mắn lần sau");
}
