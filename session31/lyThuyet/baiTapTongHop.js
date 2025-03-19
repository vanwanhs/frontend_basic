// let arr = ["Lê","Hương","Giang"];
// function showStudent() {
//     let html="";
//     for(let i =0;i<arr.length;i++){
//         html += `<ul>${arr[i]}</ul>`
//     }
//     document.getElementsByTagName("content").innerHTML=html;
// }
// showStudent();
let arr = ["Lê", "Hương", "Giang"];

function showStudent() {
    let html = "<ul>"; // Mở thẻ <ul>
    for (let i = 0; i < arr.length; i++) {
        html += `<li>${arr[i]}</li>`; 
    }
    html += "</ul>"; // Đóng thẻ <ul>

    document.getElementById("content").innerHTML = html;}
showStudent();
