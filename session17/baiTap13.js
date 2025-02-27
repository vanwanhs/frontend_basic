let input1 = Number(prompt("Mời bạn nhập số tiền gửi"));
let input2 = Number(prompt("Mời bạn nhập số tháng gửi"));
let year = input2 / 12;
let tongTienLai = (input1 * 0.043)*year ;
console.log("Bạn gửi số tiền là: ",input1);
console.log("Bạn gửi: " + input2 + " tháng, tiền lãi là " + tongTienLai.toFixed(4) + " VNĐ.");
