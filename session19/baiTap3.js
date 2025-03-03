
const price = Number(prompt("Mời bạn nhập số tiền muốn đổi:"));
let okane = prompt("Mời bạn nhập đơn vị tiền muốn đổi (Us-Vn):");

if (okane === "Us") {
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    document.write('Dollars: ' + USDollar.format(price));
} else if (okane === "Vn") {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    alert('Việt Nam đồng: ' + VND.format(price));
} else {
    document.write("Mời bạn nhập lại lựa chọn đổi tiền hợp lệ (Us hoặc Vn).");
}
