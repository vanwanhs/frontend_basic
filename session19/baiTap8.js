let a=Number(prompt("Mời bạn nhập tháng trong năm"));
if (a<0 || a>13){
    alert("Thangs khong hop le !");
} else {
    if(a<=3){
        alert("Muaf xuana");
    } else if(a<=6 && a>=3) {
        alert("Muaf hef");
    } else if (a>=6 && a<=9) {
        alert("Muaf Thu");
    } else{
        alert("Muaf Dong");
    }
}