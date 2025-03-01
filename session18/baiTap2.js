let a = Number(prompt("Mời bạn nhập điểm Toán:"));
let b = Number(prompt("Mời bạn nhập điểm Văn:"));
let c = Number(prompt("Mời bạn nhập điểm Anh:"));

let tb = ((a + b + c) / 3).toFixed(2);
tb = Number(tb);

if (tb >= 8) {
    document.write("Bạn là học sinh giỏi");
} else if (tb >= 6.5 && tb < 8) {
    document.write("Bạn là học sinh khá");
} else if (tb >= 5.0 && tb < 6.5) {
    document.write("Bạn là học sinh trung bình");
} else {
    document.write("Bạn là học sinh yếu");
}
