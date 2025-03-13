function bai8(num) {
    let numStr = num.toString();
    let arr = numStr.split('');
    arr.sort((a, b) => b - a);
    let sortNum = arr.join('');
    return parseInt(sortNum, 10);
}

console.log(bai8(2931));
console.log(bai8(123456789));
