let arr=[];
let sum;
let flag;
do{
    console.log(" 1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Tìm phần tử lớn thứ hai trong mảng");
    console.log("6. Thoát chương trình");
    let choice=+prompt("Mời bạn nhập lựa chọn của mình")
    switch(choice){
        case 1:
            let length=+prompt("Mời bạn nhập độ dài của mảng");
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
           console.log("Mảng hiện tại có trong mảng: "+arr);
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let sortedArr = arr.slice().sort((a, b) => a - b); // Sắp xếp đúng với số
                console.log(`Giá trị lớn nhất: ${sortedArr[sortedArr.length - 1]}, Giá trị nhỏ nhất: ${sortedArr[0]}`);
            }
            break;
        case 4:
            sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("Tổng các phần tử trong mảng: " + sum);
            break;

        case 5:
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
        case 6:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let sortedArr = arr.slice().sort((a, b) => a - b); // Sắp xếp đúng với số
                console.log("Phan tu trong mang sau khi sap xep "+arr);
            }
            break;
        case 7: 
            console.log(`Hẹn gặp lại bạn sau`);
            break;
        default:
            console.log(`Mời bạn nhập lại lựa chọn (1-8)`);
            
            
    }
} while (choice!=7);