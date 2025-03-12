function sumEvenOdd(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có dữ liệu";
    
    const totalEven = arr.filter(num => Number.isInteger(num) && num % 2 === 0)
                         .reduce((sum, num) => sum + num, 0);
    
    const totalOdd = arr.filter(num => Number.isInteger(num) && num % 2 !== 0)
                        .reduce((sum, num) => sum + num, 0);
    
    return { totalEven, totalOdd };
}

// Test cases
console.log(sumEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sumEvenOdd([])); 
console.log(sumEvenOdd("abc"));
console.log(sumEvenOdd([10, 15, 20, 25, 30]));
