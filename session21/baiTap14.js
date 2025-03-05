let Width = Number(prompt("moi bạn nhập chiều ngang "));
let Column = Number(prompt("moi bạn nhập chiều dọc "));

for (let i = 1; i <= Column; i++){
    if (i === 1 || i === Column) {
        for (let j = 0; j < Width; j++){
            document.write("*");
        }
    } else {
        for (let j = 0; j < Width; j++){
            if (j === 0 || j === Width-1) {
                document.write("*");
            } else {
                document.write("&nbsp;&nbsp;"); 
            }
        }
    }
    document.write("</br>");
}