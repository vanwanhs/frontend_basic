let arr = [3, 1, 2, 2, 3, 4, 4, 4, 2, 3];
let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:", uniqueArr);
