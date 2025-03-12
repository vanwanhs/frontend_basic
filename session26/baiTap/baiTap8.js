function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterOddPrimes(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có dữ liệu";
    
    const result = arr.filter(num => Number.isInteger(num) && num % 2 !== 0 && isPrime(num));
    return result.length > 0 ? result : "Mảng không có dữ liệu";
}

// Test cases
console.log(filterOddPrimes([10, 2, 3, 5, 7, 9]));
console.log(filterOddPrimes([]));
console.log(filterOddPrimes("abc"));
console.log(filterOddPrimes([4, 6, 8, 10, 12]));