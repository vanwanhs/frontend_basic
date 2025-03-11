let arr = [];
let length = +prompt("Mời bạn nhập độ dài của mảng:");

for (let i = 0; i < length; i++) {
    arr[i] = +prompt(`Mời bạn nhập phần tử thứ ${i + 1}:`);
}

function checkCL(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    if (evenNumbers.length === 0) {
        console.log("Không có số chẵn trong mảng");
    } else {
        console.log("Các số chẵn trong mảng là:", evenNumbers.join(", "));
    }
}

checkCL(arr);
