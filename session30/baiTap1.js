
let products = [
    { id: 1, name: "Mèn mén", price: 20000, quantity: 20, category: "Món ăn dân tộc Mông" },
    { id: 2, name: "Mút", price: 80000, quantity: 21, category: "Món ăn dân tộc Kinh" },
    { id: 3, name: "Cơm Lam", price: 40000, quantity: 15, category: "Món ăn dân tộc Mông" },
    { id: 4, name: "Bánh đậu xanh", price: 60000, quantity: 30, category: "Món ăn dân tộc Kinh" },
];

let cart = [];

let choice;
do {
    choice = +prompt(
        "1. Hiển thị sản phẩm theo danh mục\n" +
        "2. Chọn sản phẩm để mua\n" +
        "3. Sắp xếp sản phẩm theo giá\n" +
        "4. Tính tiền thanh toán\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn:"
    );

    switch (choice) {
        case 1:
          addProduct();
            break;

        case 2:
            buyProductInShop();
            break;

        case 3:
            let choice=+prompt("Moi ban nhap 1 tăng còn lại là trừ");
            sortProduct(choice,products);
            break;

        case 4:
           Sum();
            break;

        case 5:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 5);

function addProduct() {
    let categoryChoice = +prompt("Nhập 1 để xem món Mông, nhập 2 để xem món Kinh:");
            if (categoryChoice === 1) {
                console.log(products.filter(item => item.category === "Món ăn dân tộc Mông"));
            } else if (categoryChoice === 2) {
                console.log(products.filter(item => item.category === "Món ăn dân tộc Kinh"));
            } else {
                alert("Lựa chọn không hợp lệ!");
            }
}
function buyProductInShop() {
    let findProduct = +prompt("Mời bạn nhập ID muốn tìm kiếm sản phẩm");
    let result = products.findIndex(item => item.id === findProduct);

    if (result !== -1) {
        let buyQuantity = +prompt("Mời bạn nhập số lượng hàng muốn mua");

        if (buyQuantity > products[result].quantity) {
            alert(`Số lượng sản phẩm trong kho không đủ, chỉ còn ${products[result].quantity}`);
        } else {
            products[result].quantity -= buyQuantity;

            let result1 = cart.findIndex(item => item.id === findProduct);

            if (result1 !== -1) {
                cart[result1].quantity += buyQuantity; 
            } else {
                cart.push({
                    id: findProduct,
                    name: products[result].name,
                    price: products[result].price,
                    quantity: buyQuantity
                }); 
            }

            alert(`Bạn đã mua thành công ${buyQuantity} sản phẩm. Số lượng còn lại trong kho: ${products[result].quantity}`);
        }
    } else {
        alert("Không tìm thấy sản phẩm với ID mà bạn muốn tìm kiếm");
    }
}

function sortProduct(number, products) {
    products.sort((a, b) => {
        return number === 1 ? a.price - b.price : b.price - a.price;
    });
}


function Sum() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log("Tổng tiền thanh toán:", total);
}