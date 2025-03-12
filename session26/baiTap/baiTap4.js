let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let test2 = [];
let test3 = "abc";
function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function bai2(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            console.log("Mảng rỗng");
        } else {
            let result = arr.filter(item => isPrime(item));
            console.log("Các số nguyên tố trong mảng:", result);
        }
    } else {
        console.log("Dữ liệu nhập không hợp lệ");
    }
}
bai2(test1);
bai2(test2);
bai2(test3);
