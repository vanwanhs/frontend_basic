// let thanhTao = document.getElementById("thanhTao");
//     let nutTang = document.getElementById("nutTang");
//     let nutGiam = document.getElementById("nutGiam");

//     nutTang.onclick = function () {
//       let chieuRongHienTai = thanhTao.offsetWidth;
//       if (chieuRongHienTai < 300) {
//         thanhTao.style.width = (chieuRongHienTai + 30) + "px";
//       }
//     };

//     nutGiam.onclick = function () {
//       let chieuRongHienTai = thanhTao.offsetWidth;
//       if (chieuRongHienTai > 0) {
//         thanhTao.style.width = (chieuRongHienTai - 30) + "px";
//       }
//     };  
let valueProsess=0;
let opacity = 0.1;
function increase() {
    valueProsess += 10;
    opacity +=0.1
    if(valueProsess>100){
        valueProsess=100;
    }
    if(opacity>1){
        opacity=1;
    }
    document.getElementById("progress").value=valueProsess;
    document.getElementById("progress").value= opacity;
}
function desc() {
    valueProsess -= 10;
    opacity -=0.1;
    if(valueProsess<0){
        valueProsess = 0;
    }

    if(opacity<0.1){
        opacity=0.1;
    }
    document.getElementById("progress").value=valueProsess;
    document.getElementById("progress").value= opacity;
}