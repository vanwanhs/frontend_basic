let numberA = Number(prompt("Mời bạn nhập số thứ nhất"));
let numberB = Number(prompt("Mời bạn nhập số thứ hai"));
let min = Math.min(numberA, numberB);
let max = Math.max(numberA, numberB);
let random = Math. floor(Math.random() * (max - min + 1)) + min;

document.write("Số ngẫu nhiên trong khoảng giữa hai số: " + random);
