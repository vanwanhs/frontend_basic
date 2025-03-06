let arr = [1, 3, 4, 6, 2, 6, 7, 11, 9, 8, 10];

for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
        }
    }

    if (!swapped) break;
}

console.log(arr);
