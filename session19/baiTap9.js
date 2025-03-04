let result_01 = "javascript" + 5;
//  Khi bạn sử dụng toán tử + với một chuỗi và một số, JavaScript sẽ nối chúng lại thành một chuỗi duy nhất. Vì vậy, số 5 được chuyển thành chuỗi và ghép vào "javascript".
let result_02 = "javascript" - 1;
// Toán tử - không được định nghĩa cho chuỗi, nên JavaScript cố gắng chuyển chuỗi "javascript" thành số, nhưng thất bại và kết quả là NaN.
let result_03 = "3" + 2;
// Tương tự như trường hợp đầu tiên, toán tử + nối chuỗi "3" và số 2 thành một chuỗi duy nhất "32".
let result_04 = "5" - 4;
// Toán tử - buộc JavaScript chuyển chuỗi "5" thành số, nên phép trừ được thực hiện là 5 - 4, kết quả là 1.
let result_05 = isNaN("123");
// Hàm isNaN kiểm tra nếu tham số của nó không phải là số. Chuỗi "123" có thể được chuyển thành số, nên isNaN trả về false.
let result_06 = isNaN("hello");
// Chuỗi "hello" không thể được chuyển thành số, nên isNaN trả về true.
let result_07 = Number.isNaN("123");
// Hàm Number.isNaN kiểm tra nghiêm ngặt nếu tham số của nó là NaN. Vì "123" là chuỗi và không phải NaN, nên trả về false.
let result_08 = Number.isNaN(NaN);
// Hàm Number.isNaN kiểm tra nếu tham số của nó chính xác là NaN, điều này đúng trong trường hợp này.