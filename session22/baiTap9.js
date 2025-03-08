let arr = [3, 1, 2, 2, 3, 4, 4, 4, 2, 3];
// let uniqueArr = [...new Set(arr)];
// uniqueArr.sort((a, b) => a - b);
// console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:", uniqueArr);
for (let i=0;i<arr.length;i++){
    for(let i=j+1;j<arr.length-1;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
let temp;
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) { 
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}