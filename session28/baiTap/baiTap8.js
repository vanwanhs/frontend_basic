const user = {};
let id = 1;
let choice = 1;

const menu = {
  1: () => {
    const [name, position, salary] = userInput();
    user[id] = { id, name, position, salary };
    id++;
    console.table(users);
  },
};
function main() {}
function showMenu() {
  let choice = +prompt(`
                Thêm nhân viên mới.
                Xóa nhân viên theo id.
                Cập nhật mức lương của nhân viên theo id
                Tìm kiếm nhân viên theo tên.`);
}
function userInput() {
  name = prompt("mời bạn nhập tên ");
  position = prompt("mời bạn nhập vị trí trong công ty");
  salary = prompt("mời bạn nhập bảng lương");
  return [, name, position, salary];
}
menu[choice];
 