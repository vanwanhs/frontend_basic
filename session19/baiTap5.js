let a = prompt("Mời bạn nhập một chuỗi");
let hasSpace = false;

for (let i = 0; i < a.length; i++) {
    if (a[i] == ' ') {
        hasSpace = true;
        break;
    }
}

if (hasSpace) {
    document.write("Chuỗi có dấu cách");
} else {
    document.write("Chuỗi không có dấu cách");
}
