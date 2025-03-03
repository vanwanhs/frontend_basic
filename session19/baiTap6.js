let numberA = prompt("Mời bạn nhập số a");
let numberB = prompt("Mời bạn nhập số b");
let numberC = prompt("Mời bạn nhập số C");
let x1;
let x2;
if (Number.isFinite(numberA) && Number.isFinite(numberB) && Number.isFinite(numberC)) {
    let deltal=Math.pow(numberB,2)-(4*(numberA*numberC));
    if (deltal==0){
        x1= x2 =-numberB/2*numberA;
        document.write(x1+ " và " +x2+" Hai nhiệm kép của phương trình bậc 2");
    } else if (deltal>0) {
        x1 = (Math.sqrt(deltal)-numberB)/(2*numberA);
        x2 = (-Math.sqrt(deltal)-numberB)/(2*numberA);
    alert("X1= :"+x1 );
    alert("X2= :"+x2 );
    } else {
        alert("Phuongw trinfh voo nghiem");
    }
} else {
    alert("Ban nhap he so chua dung!");
}