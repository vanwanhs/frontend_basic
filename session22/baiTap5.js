let arr=[];
let chan = 0, le = 0; 
let n = +prompt("Mời bạn nhập số phần tử có trong mảng: ");
if (isNaN(n) || n <= 0) {
    document.write("Dữ liệu không hợp lệ!");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt("Phần tử thứ " + (i + 1) + ": "));
        if (isNaN(arr[i])) { 
            arr[i] = 0;
        }
    }

    for (let i = 0; i < n; i++) {
        arr[i] % 2 == 0 ?
            chan += arr[i] :
            le += arr[i];
    }

    document.write("Tổng số chẵn: " + chan + "<br>");
    document.write("Tổng số lẻ: " + le);
}

