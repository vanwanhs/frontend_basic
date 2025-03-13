function bai5(arr, n) {
    let result = [];
    if(Array.isArray(arr)){
        for (let i = 0; i < arr.length; i += n) {
            result.push(arr.slice(i, i + n));
        }
    
        return result;
    } else {
        console.log("du lieu khong hop le");
        return;
    }
}

console.log(bai5([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(bai5("anh",3));

