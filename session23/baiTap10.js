let arr = [];
let choice;
let flag;
let sum;
do {
    console.log("================== MENU ==================")
    console.log("1. Nhập số phần tử và giá trị các phần tử")
    console.log("2. In ra giá trị các phần tử đang quản lý")
    console.log("3. In ra giá trị các phần tử chẵn và tính tổng")
    console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng")
    console.log("5. In ra các số nguyên tố trong mảng và tính tổng")
    console.log("6. Nhập vào một số và thống kê số lần xuất hiện")
    console.log("7. Thêm một phần tử vào vị trí chỉ định")
    console.log("8. Xóa một phần tử theo giá trị ")
    console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần ")
    console.log("0. Thoát")
    console.log("=========================================")

    choice = Number(prompt("Lựa chọn của bạn:"));
    switch (choice) {
        case 1:
            let length = Number(prompt("Mời bạn nhập vào số phần tử trong mảng:"));
            if (length > 0) {
                for (let i = 1; i <= length; i++) {
                    do {
                        let number = prompt("Mời bạn nhập vào giá trị vị trí thứ " + i);
                        if (Number.isInteger(Number(number))) {
                            arr.push(Number(number)); // Ép kiểu về số
                            break;
                        } else {
                            alert("Mời bạn nhập lại giá trị số nguyên tại vị trí " + i);
                        }
                    } while (1);
                }
            } else {
                console.log("Số lượng phần tử không hợp lệ!");
            }
            break;

        case 2:
            console.log("Mảng hiện tại:", arr);
            break;

        case 3:
            flag = 0;
            sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    sum += arr[i];
                    console.log(arr[i]);
                    flag = 1;
                }
            }
            arr.sort((a, b) => b - a);
            flag ? console.log("Tổng của tất cả số chẵn trong mảng là " + sum) : console.log("Trong mảng không có số chẵn.");
            console.log(arr)
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let sortedArr = arr.slice().sort((a, b) => a - b);
                console.log(`Giá trị lớn nhất: ${sortedArr[sortedArr.length - 1]} vị trí :${sortedArr.length - 1}, Giá trị nhỏ nhất: ${sortedArr[0]} vị trí :0`);
            }
            break;

        case 5:
            sum = 0;
            let primeNumbers = [];
            for (let i = 0; i < arr.length; i++) {
                let num = arr[i];
                if (num > 1) {
                    let isPrime = true;
                    for (let j = 2; j <= Math.sqrt(num); j++) {
                        if (num % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) {
                        primeNumbers.push(num);
                        sum += num;
                    }
                }
            }
            primeNumbers.length > 0 ? console.log("Số nguyên tố trong mảng:", primeNumbers, "Tổng:", sum) : console.log("Không có số nguyên tố trong mảng.");
            break;

        case 6:
            let number = Number(prompt("Mời bạn nhập vào một số để kiểm tra:"));
            let count = 0;
            if (Number.isInteger(number)) {
                for (let i = 0; i < arr.length; i++) {
                    if (number === arr[i]) {
                        count++;
                    }
                }
            }
            count !== 0 ? console.log(`Số ${number} xuất hiện ${count} lần trong mảng.`) : console.log(`Số ${number} không tồn tại trong mảng.`);
            break;

        case 7:
            let index = Number(prompt("Mời bạn nhập vị trí cần thêm:"));
            let value = Number(prompt("Mời bạn nhập giá trị cần thêm:"));
            if (index >= 0 && index <= arr.length) {
                arr.splice(index, 0, value);
                console.log("Mảng sau khi thêm phần tử:", arr);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;
        case 8:
            flag = 0;
            value = Number(prompt("Mời bạn nhập giá trị cần xóa:"));
            for (let i = 0; i < arr.length; i++){
                if (value === Number(arr[i])) {
                    arr.splice(i, 1);
                    flag = 1;
                }
            }
            flag ? console.log(`phần tử bạn muốn xóa đã đc xóa khỏi mảng`) : console.log(`phần tử bạn muốn xóa không có trong mảng`);
            break;
        case 9:
            let choice2;
            do {
                
            
                console.log("================== MENU ==================");
                console.log("1.xắp xếp tăng dần")
                console.log("2.xắp xếp giảm dần")
                console.log("0. Thoát")
                console.log("=========================================");
                choice2 = Number(prompt("Lựa chọn của bạn:"));
                switch (choice2) {
                    case 1:
                        arr.sort((a, b) => b - a);
                        break;
                    case 2:
                        arr.sort((a, b) => b - a);
                        arr.length > 0 ? console.log("mảng của bạn đã đc xắp xếp") : console.log("mảng của bạn không có phần tử để xắp xếp");
                        break;
                    default:
                        console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 0 đến 2.");
                        break;
                }
            } while (choice===0);
            break;
        
        case 0:
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 0 đến 9.");
            break;
    }
} while (choice !== 0);