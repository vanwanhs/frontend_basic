let num=parseInt(prompt("Mời bạn nhập ngày bất kì "));
if (isNaN(num) || num < 0 || num >= 13) {
    alert("Ngày không hợp lệ!");
} else {
    if(num==1|| num==3|| num==5 || num==7|| num==8 || num==10 || num==12){
        alert( "Tháng"+num+ "này có 31 ngày");
    }
    else if(num==2){
    alert( "tháng" +num+ "này có 28 ngày nếu năm nhuận có 29 ngày");
    }
    else {
        alert( " Thangs " +num+" này có 30 ngày");
    }
}