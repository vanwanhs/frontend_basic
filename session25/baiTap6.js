function isPalindrome(inputString){
    let string=prompt("Moi ban nhap vao mot chuoi");
    let flag=1;
    for (let i=0;i<string.length/2;i++){
        if(string[i]!=string[string.length-i-1]){
            flag=0;
           break;
        }
    }
    flag?console.log("day la chuoi doi xung"):console.log("Day khong phai la chuoi doi xung");
}
isPalindrome();