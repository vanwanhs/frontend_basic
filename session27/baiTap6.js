

function bai6(arr) {
    if (arr.length < 2) return false; 

    let num = arr[1] - arr[0]; 

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== num) {
            return false; 
        }
    }

    return true; 
}

console.log(bai6([2, 4, 6, 8, 10])); 
console.log(bai6([3, 6, 9, 12]));    
console.log(bai6([1, 3, 6, 9]));     
console.log(bai6([5]));              
console.log(bai6([10, 7, 4, 1]));    
