
let arr = [3, 1, 2, 2, 3, 4, 4, 4, 2, 3];
let maxCount,minElement;
for (let i=0;i<arr.length;i++){
    let count=0;
    for (let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count ++;
        }
    }
    if(count>maxCount){
        maxCount = count;
        minElement=arr[i];
    } else if (count == maxCount && minElement>arr[i]){
        minElement=arr[i];
    }
}
