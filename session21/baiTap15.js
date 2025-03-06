let money = +prompt("Nhập số tiền: ");
let minMoneyDraw = 500000;
let count;
if (Number.isInteger(money) && (money % 1000 === 0)) {
    while (money !== 0) {
        count = Math.floor(money / minMoneyDraw);
        if (count > 0) {
            document.write(`${minMoneyDraw.toLocaleString()} - ${count} tờ <br/>`);
            money = money - minMoneyDraw * count;
        }
        if (minMoneyDraw === 500000) {
            minMoneyDraw = 200000; //gán
        } else if (minMoneyDraw === 200000) {
            minMoneyDraw = 100000;
        } else if (minMoneyDraw === 100000) {
            minMoneyDraw = 50000;
        } else if (minMoneyDraw === 50000) {
            minMoneyDraw = 20000;
        } else if (minMoneyDraw === 20000) {
            minMoneyDraw = 10000;
        } else if (minMoneyDraw === 10000) {
            minMoneyDraw = 5000;
        } else if (minMoneyDraw === 5000) {
            minMoneyDraw = 2000;
        } else if (minMoneyDraw === 2000) {
            minMoneyDraw = 1000;
        }
    }
} else {
    alert(`Nhạp lại`);
}