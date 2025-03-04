let str = prompt("Mời bạn nhập một chuỗi:");
let search = prompt("Mời bạn nhập một ký tự:");
let flag = 0; 

for (let i = 0; i < str.length; i++) {
    if (str[i] === search) { 
        document.write(search + " có trong chuỗi");
        flag = 1;
        break;
    }
}
if (flag === 0) {
    document.write(search + " không có trong chuỗi");
}
