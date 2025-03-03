let okane = prompt("Mời bạn nhập đơn vị tiền muốn đổi (Us-Vn):").toLowerCase();
const price = Number(prompt("Mời bạn nhập số tiền muốn đổi:"));
let convertedPrice;

if (okane == "us") {
    convertedPrice = price / 23000;
    document.write(convertedPrice.toFixed(2) + " USD");
} else if (okane == "vn") {
    convertedPrice = price * 23000;
    document.write(convertedPrice.toFixed(2) + " VND");
} else {
    document.write("Mời bạn nhập lại đơn vị tiền hợp lệ (Us hoặc Vn)");
}
