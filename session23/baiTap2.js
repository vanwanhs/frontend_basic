let arr=[];
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt("Moi ban nhap phan tu " + (i + 1) + " vao trong mang");
}
let flag=0;
let max = arr[0];
let maxIndex = 0;
for (let i = 1; i < 10; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
        flag=1;
    }
}
if(arr.length === 0){
   flag = 0;
}
flag ==1? document.writeln("Phan tu lon nhat trong mang la " + max + " o vi tri " + (maxIndex + 1)): document.writeln("Khong co phan tu lon nhat trong mang");
