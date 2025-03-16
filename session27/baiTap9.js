function sortNum(arr) {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
        console.log("Dữ liệu không hợp lệ");
    }
    
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let evenIndex = 0;
    
    return arr.map(num => num % 2 === 0 ? evenNumbers[evenIndex++] : num);
}

console.log(sortNum([5, 3, 2, 8, 1, 4]));
console.log(sortNum([9, 4, 6, 7, 2, 3])); 
console.log(sortNum("abc")); 