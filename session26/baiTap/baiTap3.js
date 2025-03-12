function bai3(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    
    if (arr.length === 0) {
        console.log("Mảng rỗng");
        return;
    }
    
    const validEmails = arr.filter(email => typeof email === "string" && email.includes("@") && !email.includes(" "));
    
    console.log("Email hợp lệ:", validEmails);
}

// Test cases
let test1 = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let test2 = [];
let test3 = "anh yeu em";

bai3(test1); 
bai3(test2);
bai3(test3);
