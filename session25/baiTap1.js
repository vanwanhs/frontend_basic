let arr = [1, 24, 23, 2, 4, 7, -9];

function min(arr) {
    if (arr.length === 0) {
        console.log("Mảng rỗng");
        return null;
    } else if (!Array.isArray(arr)){
        console.log("Du lieu khong hop le");
        return;
    }  else {
        let min = arr[0];

    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
    }
}

console.log("Phần tử nhỏ nhất trong mảng là:", min(arr));
