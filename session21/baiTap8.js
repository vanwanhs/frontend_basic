for (let i = 1; i < 1000; i++) {
    let a = Math.floor(i / 100);   
    let b = Math.floor((i % 100) / 10);
    let c = i % 10;                
    if (a**3 + b**3 + c**3 === i) {
        document.write(i + "<br>");
    }
}
