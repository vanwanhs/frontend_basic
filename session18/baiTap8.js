const a = parseFloat(prompt("Nhập cạnh a: "));
const b = parseFloat(prompt("Nhập cạnh b: "));
const c = parseFloat(prompt("Nhập cạnh c: "));

let result;
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        result = "Tam giác đều";
    } else if (a === b || a === c || b === c) {
        result = "Tam giác cân";
    } else if (
        a * a + b * b === c * c ||
        a * a + c * c === b * b ||
        b * b + c * c === a * a
    ) {
        result = "Tam giác vuông";
    } else {
        result = "Tam giác thường";
    }
} else {
    result = "Không phải tam giác hợp lệ";
}

alert(result);
