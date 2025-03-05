let n=+prompt("Moi ban nhap so tien gui");
let day=+prompt("Moi ban nhap so thang gui");
let sum=n*Math.pow(1+0.01,day);
let lai=sum-n;
document.write("tien lai: "+lai.toFixed(4));
document.write("tong tien: "+sum.toFixed(4));