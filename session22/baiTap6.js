let arr=[1,2,4,5,23,22,534,2,3,1,1,1];
let search=+prompt("Moi ban nhap phan tu muon tim kiem");
let count=0;
for(let i=0;i<arr.length;i++){
    if(search===arr[i]){
        count++;
    }
}
if(count>0){
    document.writeln(search+" co trong va xua hien "+count);
} else {
    document.writeln("Khong xua hieen trong mang");
}

