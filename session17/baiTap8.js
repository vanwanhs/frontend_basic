let input1= prompt("Mời bạn nhập ngày ");
let input2= prompt("Mời bạn nhập ngày ");
let date1= new Date(input1);
let date2= new Date(input2);
let day= Math.abs(date1-date2);
let daycell= Math.ceil(day / (1000 * 60 * 60 * 24));
console.log(`Khoảng cách giữa hai ngày là: ${daycell} ngày.`);
//sao dòng 7*(đã sửa)


