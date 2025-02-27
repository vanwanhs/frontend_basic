let r = Number(prompt("mời bạn nhập bán kính hình trụ"));
let h = Number(prompt("Mời bạn nhập chiều cao của hình trụ"));
let s_xq= 2* 3.14 * r * h;
let s_2day = 2 *(Math.pow(r,2)* 3.14);
let s_tp = s_xq + s_2day;
let v= 3.14 * Math.pow(r,2) * h;
let d= 2* 3.14 * r;
document.write("Diện tính sung quanh: "+s_xq+"<br>");
document.write("Diện tích 2 đáy: "+s_2day+"<br>");
document.write("Diện tích toàn phần: "+s_tp+"<br>");
document.write("Thể tích hình trụ :"+v+"<br>");
document.write("Chu vi đáy của hình truh: "+d+"<br>");
//khi xong kết quả thì cho xuông dòng 
