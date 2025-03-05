let sum1= 0;
let sum2= 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Mời bạn nhập số:");
    if (number % 2 !== 0) {
        sum1 += number;
    } else {
        sum2 += number;
    }
}

document.write(sum1+" Tổng số le <br>" );
document.write(sum2+" Tổng số chẵn");
