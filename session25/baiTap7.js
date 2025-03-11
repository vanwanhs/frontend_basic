function inHoa() {
    let chuoi = prompt("Mời bạn nhập một chuỗi:");
    if (!chuoi) return;
    let words = chuoi.split(" "); 
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[1][0].toUpperCase() + words[i].slice(1).toLowerCase()+ " ";
        }
    }

    console.log("Chuỗi sau khi chuyển đổi: " + result);
}

inHoa();
