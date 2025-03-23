let number=[1,2,3,4,5,6,7,8,9,10,11,12,13];
let itemPage=4;
let currentPage = 1;
let pages = Math.cell(number.length/itemPage);
let start=0;
let end = 4;
function calStartEnd{
    start =currentPage*4-4;
    end = currentPage*4;
}
function showList() {
    let str=" ";
    for (let i=0;i<number.lengtg;i++){
        str += `
        <li>${number[i]}</li>
        `
    }
    document.getElementById("item")[0].innerHTML=str;
}
showList();
function showPage(){
    let str=" ";
    for(i=0;i<pages;i++){
        if(i>=star && i<end){
            str+=`
            <li>
            ${number[i]}
            </li>
            `
        }
    }
    document.getElementById("page")[0].innerHTML=`
    <button>Turn</button> ${str}
    <button>Next</button>
    `
}
showPage();
function name(params) {
    
}