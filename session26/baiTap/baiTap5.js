let test1 = [10, 9, 5, 11, 24, 5];
let test2 = [];
let test3 = "anh yeu em";

function findMax(arr) {
    if (arr.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    
    let max = arr[0];
    let index = 0;
    
    arr.forEach((value, i) => {
        if (value > max) {
            max = value;
            index = i;
        }
    });
    
    console.log(`Giá trị lớn nhất: ${max}  ở vị trí ${index + 1}`);
}

function bai5(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu nhập không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng rỗng");
        return;
    }

    findMax(arr);
}

bai5(test1);
bai5(test2);
bai5(test3);