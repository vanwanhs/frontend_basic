// Tạo một hệ thống quản lý menu cho nhà hàng trong đó:

// Mỗi danh mục sẽ có một số món ăn.
// Mỗi món ăn trong danh mục sẽ có thông tin: tên món ăn, giá và mô tả.
// Các chức năng:

// Thêm món ăn vào danh mục.
// Xóa món ăn theo tên khỏi danh mục.
// Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
// Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
// Tìm kiếm món ăn theo tên trong toàn bộ menu.
// Thoát
 let list={}
 function showMenu() {
    console.log("1. Thêm món ăn vào danh mục");
    console.log("2. Xóa món ăn theo tên khỏi danh mục");
    console.log("3. Cập nhật thông tin món ăn theo tên");
    console.log("4. Hiển thị toàn bộ menu");
    console.log("5. Tìm kiếm món ăn theo tên");
    console.log("6. Thoát");
}
function addDish() {
    let DanhMuc=prompt("Mời bạn nhập tên của danh mục muốn thêm");
    let name=prompt("Mời ban nhập tên món ăn");
    let price=+prompt("Mời bạn nhập giá của sản phẩm");
    let text=prompt("Mời bạn nhập mô tả món ăn");
    list[DanhMuc].push({name,price,text});
}
let choice;
do{
    showMenu();
    choice=+prompt("lựa chọn của bạn là gì");
}while(choice!=6)

