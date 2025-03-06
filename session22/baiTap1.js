let arr = [];
let n = +prompt("Mời bạn nhập số phần tử:");

for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Nhập phần tử thứ ${i + 1}:`);
}

console.log("Mảng bạn đã nhập:", arr);