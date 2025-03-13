function bai7(arr) {
    let n = arr.length + 1; 
    let tongDay = (n * (arr[0] + arr[arr.length - 1])) / 2; 
    let day = arr.reduce((sum, num) => sum + num, 0);
    return tongDay - day;
}
console.log(bai7([1, 2, 3, 5])); 
console.log(bai7([10, 11, 12, 14])); 
console.log(bai7([100, 101, 102, 104]));
