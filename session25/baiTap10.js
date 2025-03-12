let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

 let cart = [];

// function showProducts() {
//     console.log("Danh sách sản phẩm trong cửa hàng:");
//     for (let i = 0; i < products.length; i++) {
//         console.log(`${products[i][0]} - Số lượng: ${products[i][1]} - Giá: ${products[i][2]} VND`);
//     }
// }

// function addToCart(productName) {
//     let productIndex = -1;
//     for (let i = 0; i < products.length; i++) {
//         if (products[i][0] === productName) {
//             productIndex = i;
//             break;
//         }
//     }
    
//     if (productIndex === -1) return console.log("Sản phẩm không có trong cửa hàng.");
//     if (products[productIndex][1] === 0) return console.log(`Sản phẩm ${productName} đã hết hàng.`);
    
//     products[productIndex][1]--;
    
//     let cartIndex = -1;
//     for (let i = 0; i < cart.length; i++) {
//         if (cart[i][0] === productName) {
//             cartIndex = i;
//             break;
//         }
//     }
    
//     if (cartIndex !== -1) {
//         cart[cartIndex][1]++;
//     } else {
//         cart.push([productName, 1, products[productIndex][2]]);
//     }
    
//     console.log(`Đã thêm ${productName} vào giỏ hàng.`);
// }

// function showCart() {
//     console.log("Giỏ hàng hiện tại:");
//     for (let i = 0; i < cart.length; i++) {
//         console.log(`${cart[i][0]} - Số lượng: ${cart[i][1]} - Giá: ${cart[i][2]} VND`);
//     }
// }

// function checkout() {
//     let total = 0;
//     for (let i = 0; i < cart.length; i++) {
//         total += cart[i][1] * cart[i][2];
//     }
//     console.log("Hóa đơn:");
//     showCart();
//     console.log(`Tổng tiền: ${total} VND`);
// }

// function main() {
//     while (true) {
//         console.log("\nChọn một tùy chọn:");
//         console.log("1. Xem sản phẩm");
//         console.log("2. Mua hàng");
//         console.log("3. Xem giỏ hàng");
//         console.log("4. Thanh toán");
//         console.log("5. Thoát");
        
//         let choice = prompt("Nhập lựa chọn: ");
//         switch (choice) {
//             case "1":
//                 showProducts();
//                 break;
//             case "2":
//                 let productName = prompt("Nhập tên sản phẩm muốn mua: ");
//                 addToCart(productName);
//                 break;
//             case "3":
//                 showCart();
//                 break;
//             case "4":
//                 checkout();
//                 break;
//             case "5":
//                 console.log("Thoát chương trình.");
//                 return;
//             default:
//                 console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
//         }
//     }
// }

// main();
function showProducts() {
    for (let i = 0; i < products.length; i++) {
        document.write(`Sản phẩm thứ ${i + 1} : san pham ${products[i][0]} - so luong ${products[i][1]} - gia ${products[i][2]} </br>`);
    }
}
function addProduct(){
    let flag = -1;
    let productName= prompt("Moi ban nhap san pham muon tim kiem");
    for (let i=0; i<products.length; i++){
        if(productName==products[i][0]){
            flag=i;
        }
    }
    if(flag==-1){
        document.write("San phan khong ton tai");
        return;
    } else {
        let index=-1;
        for ( let i=0; i<cart.length; i++){
            if(productName==products[flag][0]){
                index=i;
                break;
            }
        }
        if(index==-1){
            
        }
    }
}
do {
let choice = +prompt("Lua chon cua ban");
switch(choice){
    case 1:
        showProducts();
        break;
    case 2:
        addProduct();
    default:
        console.log("Moi ban nhap lai");
        break;
        
}
} while(choice != 4)