let years = Number(prompt("Mời bạn nhập số năm kinh nghiệm:"));

if (years < 1) {
    alert("Mới vào nghề");
} else if (years >= 1 && years <= 3) {
    alert("Nhân viên có kinh nghiệm");
} else if (years >= 4 && years <= 6) {
    alert("Chuyên viên");
} else {
    alert("Quản lý");
}
