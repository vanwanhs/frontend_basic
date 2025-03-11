function check(){
    let number=+prompt("Moi ban nhap vao so nguyen");
    if(isNaN(number)||number<1||!Number.isInteger(number)){
        console.log("Du lieu nhap vao khong hop le");
        return;
    } 
    let nguyenTo=true;
    if(number===1){
        console.log("1 khong phai la so nguyen to");   
    } else {
        for (let i=2;i<number;i++){
            if (number%2==0){
                nguyenTo=false;
                return;
            }
        }
    }
    nguyenTo==true ? console.log(number+" la so nguyen to")
    : console.log(number+" Khong phai la so nguyen to");
}
check();
