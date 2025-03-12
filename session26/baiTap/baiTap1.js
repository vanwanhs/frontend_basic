let test1 = [12, 3, 4323, 232, 4, 2232, 2];
let test2 = [];
let test3 = "anh yeu em";

function bai1(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) { 
            console.log
            ("Mảng rỗng<br>");
        } else {
            let result = arr.filter((item) => item >= 10);
            console.log("Các số >= 10:", result);
        }
    } else {
        console.log("Dữ liệu nhập không hợp lệ");
    }
}
bai1(test1);
bai1(test2);
bai1(test3);
