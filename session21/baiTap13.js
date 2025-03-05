document.write('a.');
document.write("</br>");
count = 10;
for (let i = 0; i < 10; i++){
    
    for (let j = count; j > 0; j--){
        document.write("*");
    }
    count--;
    document.write("</br>")
    
}

document.write('b.');
document.write("</br>");
count = 0;
for (let i = 0; i < 10; i++){
    for (let j = 0; j < count; j++){
        document.write("*");
    }
    count++;
    document.write("</br>")
    
}
document.write('c.');
document.write("</br>");
count = 10;
for (let i = 0; i < count; i++){
    for (let j = 0; j < count - i; j++) {
        document.write("&nbsp;&nbsp;");

    }
    for (let j = 0; j < i; j++){
        document.write("*");
    }
    document.write("</br>")
    
}
document.write('d.');
document.write("</br>");
count = 10;
for (let i = 0; i < count; i++){
    for (let j = 0; j < i; j++) {
        document.write("&nbsp;&nbsp;");

    }
    for (let j = 0; j < count-i; j++){
        document.write("*");
    }
    document.write("</br>")
    
}