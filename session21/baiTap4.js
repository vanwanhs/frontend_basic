let numberA = Number(prompt("Mời bạn nhập số a"));
let numberB = Number(prompt("Mời bạn nhập số b"));
let numberC = Number(prompt("Mời bạn nhập số c"));
let x1, x2;

if (!isNaN(numberA) && !isNaN(numberB) && !isNaN(numberC)) {
    let delta = Math.pow(numberB, 2) - (4 * numberA * numberC);

    if (delta === 0) {
        x1 = x2 = -numberB / (2 * numberA);
        document.write(`Phương trình có nghiệm kép: x1 = x2 = ${x1}`);
    } else if (delta > 0) {
        x1 = (-numberB + Math.sqrt(delta)) / (2 * numberA);
        x2 = (-numberB - Math.sqrt(delta)) / (2 * numberA);
        alert(`Phương trình có 2 nghiệm: X1 = ${x1}, X2 = ${x2}`);
    } else {
        alert("Phương trình vô nghiệm!");
    }
} else {
    alert("Bạn nhập hệ số chưa đúng!");
}
