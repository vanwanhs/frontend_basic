let arr = [];
for (let i = 0; i < 2; i++) {
    arr[i] = +prompt("Mời bạn nhập hai số nguyên bất kỳ");
}

function sum(arr) {
    let tong = 0;
    if(!Number.isInteger(Number(arr))||!Array.isArray(arr)){
        console.log("Du lieu nhap vao khong hop le");
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {  
            tong += arr[i];  
        }
    }
    return tong;
}

console.log("Tổng các phần tử trong mảng là:", sum(arr)); 
