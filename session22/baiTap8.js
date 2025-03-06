let arr = [3, 1, 2, 2, 3, 4, 4, 4, 2, 3];

let freqMap = {}; 
let maxFreq = 0; 
let result = Infinity;
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freqMap[num] === undefined) {
        freqMap[num] = 1;
    } else {
        freqMap[num]++;
    }
    if (freqMap[num] > maxFreq) {
        maxFreq = freqMap[num];
    }
}
for (let key in freqMap) {
    if (freqMap[key] === maxFreq) {
        if (Number(key) < result) {
            result = Number(key);
        }
    }
}

console.log(`Phần tử xuất hiện nhiều nhất: ${result}`);
