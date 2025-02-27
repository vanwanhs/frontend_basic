let r = Number(prompt("Mời bạn nhập bán kính hình cầu"));
let bk_cau=4/3 * Math.PI * Math.pow(r,3);
let bm_cau = 4 * Math.PI * Math.pow(r,2);
let chu_vi = 2 * Math.PI * r;
document.write("<p> thể tích hình cầu: <b>" + bk_cau +"</b> </p>");
document.write("<p> diện tích bề mặt cầu:  <b>" + bm_cau +"</b> </p>");
document.write("<p> Chu vi lớn hình cầu: <b>"+ chu_vi +"</b> </p>");