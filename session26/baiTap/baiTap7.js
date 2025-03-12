function processArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return arr.length === 0 ? console.log("Mảng không có dữ liệu")
         :console.log( "Dữ liệu không hợp lệ");
    }
    if (!arr.every(num => Number.isInteger(num))) {
        return console.log("Dữ liệu không hợp lệ");
        ;
    }
    const squaredEvens = arr
        .map(num => num ** 2)
        .filter(num => num % 2 === 0);
    return squaredEvens;
}
console.log(processArray([2, 5, 10])); 
console.log(processArray([])); 
console.log(processArray("abc")); 
console.log(processArray([1, 3, 5])); 
console.log(processArray([2, 4, 6, 7]));
console.log(processArray(["10", 2, 3])); 
console.log(processArray([1.5, 2, 3]));
