let choice;
let arr = [];
do {
    console.log("1. Nhập danh sách số nguyên");
    console.log("2. Tính trung bình các số nguyên");
    console.log("3. Tìm số chẵn lớn nhất");
    console.log("4. Tìm số lẻ nhỏ nhất");
    console.log("5. Thoát");

    choice = +prompt("Mời bạn chọn chức năng:");

    switch (choice) {
        case 1:
            let n = +prompt("Mời bạn nhập số lượng phần tử số nguyên:");
            arr = [];
            for (let i = 0; i < n; i++) {
                let number = +prompt("Mời bạn nhập phần tử thứ " + (i + 1) + ":");
                arr.push(number);
            }
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Danh sách trống!");
            } else {
                let sum = arr.reduce((acc, num) => acc + num, 0);
                console.log("Trung bình cộng:", sum / arr.length);
            }
            break;

        case 3:
            let maxEven = null;
            for (let num of arr) {
                if (num % 2 === 0) {
                    if (maxEven === null || num > maxEven) {
                        maxEven = num;
                    }
                }
            }
            console.log(maxEven !== null ? "Số chẵn lớn nhất: " + maxEven : "Không có số chẵn");
            break;
            
        case 4:
            let minNum = null;
            for (let num of arr) {
                if (num % 2 !== 0) {
                    if (minNum === null || num < minNum) {
                        minNum = num;
                    }
                }
            }
            console.log(minNum !== null ? "Số lẻ nhỏ nhất: " + minNum : "Không có số lẻ");
            break;

        case 5:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
            break;
    }
} while (choice !== 5);
