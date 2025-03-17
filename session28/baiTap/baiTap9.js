// const library = {
//     books: [],

//     addBook(book) {
//         this.books.push(book);
//     },

//     displayBooks() {
//         this.books.forEach(book => {
//             console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Năm: ${book.year}, Giá: ${book.price}, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`);
//         });
//     },
//     searchBookByTitle(title) {
//         return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
//     },

//     updateBookStatus(id, status) {
//         const book = this.books.find(book => book.id === id);
//         if (book) {
//             book.isAvailable = status;
//         }
//     },

//     deleteBook(id) {
//         this.books = this.books.filter(book => book.id !== id);
//     },

//     sortBooksByPrice() {
//         this.books.sort((a, b) => a.price - b.price);
//     }
// };

// library.addBook({ id: 1, title: "Lập trình JS", author: "Nguyễn Văn A", year: 2020, price: 150000, isAvailable: true });
// library.addBook({ id: 2, title: "C++ cơ bản", author: "Trần Văn B", year: 2018, price: 200000, isAvailable: false });
// library.addBook({ id: 3, title: "Python nâng cao", author: "Lê Thị C", year: 2022, price: 180000, isAvailable: true });

// library.displayBooks();
// console.log("Kết quả tìm kiếm:", library.searchBookByTitle("JS"));
// library.updateBookStatus(2, true);
// library.deleteBook(1);
// library.sortBooksByPrice();
// library.displayBooks();
const library = {
    books: [],

    addBook(book) {
        this.books.push(book);
    },

    displayBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện không có sách nào.");
            return;
        }
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Năm: ${book.year}, Giá: ${book.price}, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`);
        });
    },

    searchBookByTitle(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    },

    updateBookStatus(id, status) {
        const book = this.books.find(book => book.id === id);
        if (book) {
            book.isAvailable = status;
            console.log("Cập nhật trạng thái sách thành công.");
        } else {
            console.log("Không tìm thấy sách với ID đã nhập.");
        }
    },

    deleteBook(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.id !== id);
        if (this.books.length < initialLength) {
            console.log("Xóa sách thành công.");
        } else {
            console.log("Không tìm thấy sách với ID đã nhập.");
        }
    },

    sortBooksByPrice() {
        this.books.sort((a, b) => a.price - b.price);
        console.log("Đã sắp xếp sách theo giá.");
    }
};

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\nChọn chức năng:");
    console.log("1. Thêm sách");
    console.log("2. Hiển thị sách");
    console.log("3. Tìm sách theo tiêu đề");
    console.log("4. Cập nhật trạng thái sách");
    console.log("5. Xóa sách");
    console.log("6. Sắp xếp sách theo giá");
    console.log("7. Thoát");

    readline.question("Nhập lựa chọn: ", (choice) => {
        switch (choice) {
            case "1":
                readline.question("Nhập ID: ", (id) => {
                    readline.question("Nhập tiêu đề: ", (title) => {
                        readline.question("Nhập tác giả: ", (author) => {
                            readline.question("Nhập năm xuất bản: ", (year) => {
                                readline.question("Nhập giá: ", (price) => {
                                    library.addBook({ id: Number(id), title, author, year: Number(year), price: Number(price), isAvailable: true });
                                    console.log("Thêm sách thành công.");
                                    showMenu();
                                });
                            });
                        });
                    });
                });
                break;
            case "2":
                library.displayBooks();
                showMenu();
                break;
            case "3":
                readline.question("Nhập tiêu đề sách cần tìm: ", (title) => {
                    console.log("Kết quả tìm kiếm:", library.searchBookByTitle(title));
                    showMenu();
                });
                break;
            case "4":
                readline.question("Nhập ID sách: ", (id) => {
                    readline.question("Nhập trạng thái (true: Có sẵn, false: Đã mượn): ", (status) => {
                        library.updateBookStatus(Number(id), status === "true");
                        showMenu();
                    });
                });
                break;
            case "5":
                readline.question("Nhập ID sách cần xóa: ", (id) => {
                    library.deleteBook(Number(id));
                    showMenu();
                });
                break;
            case "6":
                library.sortBooksByPrice();
                showMenu();
                break;
            case "7":
                console.log("Thoát chương trình.");
                readline.close();
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
                showMenu();
        }
    });
}

showMenu();