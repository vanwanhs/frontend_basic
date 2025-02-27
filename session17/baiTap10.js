
// let i = 0;
// if (n>1) {
//     while(i <= n){
//         if( Math.pow( i, 2) == n ){ 
//             flag = 1;
//             break;
//         }
//         i++;
//     }
// } else {
//     console.log("Số bạn nhập không hợp lệ");
    
// }
// flag = 1 ? console.log('n là Số chính phương') : console.log('n không phải là số chính phương');
let n = prompt("Mời bạn nhập vào số bất kì");
n = Number(n);
if (n < 0) {
    console.log("Số bạn nhập không hợp lệ");
} else {
    let flag = Number.isInteger(Math.sqrt(n)) ? 1 : 0;
    console.log(flag ? n+ " là Số chính phương" : n+ " không phải là số chính phương");
}
