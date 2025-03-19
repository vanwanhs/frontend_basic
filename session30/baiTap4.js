let courses = [];
let users = [];

function menu() {
    alert("==== ỨNG DỤNG QUẢN LÝ KHÓA HỌC VÀ NGƯỜI DÙNG ====\n" +
          "1. Quản lý khóa học\n" +
          "2. Quản lý người dùng\n" +
          "0. Thoát");
}

function courseManagementMenu() {
    alert("==== QUẢN LÝ KHÓA HỌC ====\n" +
          "1. Thêm khóa học\n" +
          "2. Tìm kiếm khóa học theo tên\n" +
          "3. Xóa khóa học\n" +
          "0. Thoát");
}

function userManagementMenu() {
    alert("==== QUẢN LÝ NGƯỜI DÙNG ====\n" +
          "1. Thêm người dùng mới\n" +
          "2. Đăng ký khóa học\n" +
          "3. Hủy đăng ký khóa học\n" +
          "4. Hiển thị danh sách khóa học của một người dùng\n" +
          "0. Thoát");
}


function addCourse() {
    let id = +prompt("Nhập ID khóa học:");
    let name = prompt("Nhập tên khóa học:");
    let instructor = prompt("Nhập tên giáo viên:");
    let newCourse = { id, name, instructor, students: [] };
    courses.push(newCourse);
    console.log("Thêm khóa học thành công!");
}

function searchCourseByName() {
    let keyword = prompt("Nhập tên khóa học cần tìm:");
    let result = courses.filter(course => course.name.toLowerCase().includes(keyword.toLowerCase()));
    if (result.length > 0) {
        console.log("Kết quả tìm kiếm:");
        result.forEach(course => console.log(course));
    } else {
        console.log("Không tìm thấy khóa học nào phù hợp.");
    }
}

function deleteCourse() {
    let id = +prompt("Nhập ID khóa học cần xóa:");
    let index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        // Xóa khóa học khỏi danh sách đăng ký của người dùng
        users.forEach(user => {
            user.registeredCourses = user.registeredCourses.filter(courseId => courseId !== id);
        });
        courses.splice(index, 1);
        console.log("Xóa khóa học thành công!");
    } else {
        console.log("Không tìm thấy khóa học với ID này.");
    }
}

function addUser() {
    let id = +prompt("Nhập ID người dùng:");
    let name = prompt("Nhập tên người dùng:");
    let newUser = { id, name, registeredCourses: [] };
    users.push(newUser);
    console.log("Thêm người dùng thành công!");
}

function registerCourse() {
    let userId = +prompt("Nhập ID người dùng:");
    let courseId = +prompt("Nhập ID khóa học:");

    let user = users.find(user => user.id === userId);
    let course = courses.find(course => course.id === courseId);

    if (user && course) {
        if (!user.registeredCourses.includes(courseId)) {
            user.registeredCourses.push(courseId);
            course.students.push(userId);
            console.log("Đăng ký khóa học thành công!");
        } else {
            console.log("Người dùng đã đăng ký khóa học này.");
        }
    } else {
        console.log("Không tìm thấy người dùng hoặc khóa học.");
    }
}

function unregisterCourse() {
    let userId = +prompt("Nhập ID người dùng:");
    let courseId = +prompt("Nhập ID khóa học:");

    let user = users.find(user => user.id === userId);
    let course = courses.find(course => course.id === courseId);

    if (user && course) {
        if (user.registeredCourses.includes(courseId)) {
            user.registeredCourses = user.registeredCourses.filter(id => id !== courseId);
            course.students = course.students.filter(id => id !== userId);
            console.log("Hủy đăng ký khóa học thành công!");
        } else {
            console.log("Người dùng chưa đăng ký khóa học này.");
        }
    } else {
        console.log("Không tìm thấy người dùng hoặc khóa học.");
    }
}

function showUserCourses() {
    let userId = +prompt("Nhập ID người dùng:");
    let user = users.find(user => user.id === userId);
    if (user) {
        let registeredCourses = courses.filter(course => user.registeredCourses.includes(course.id));
        if (registeredCourses.length > 0) {
            console.log(`Danh sách khóa học của người dùng ${user.name}:`);
            registeredCourses.forEach(course => console.log(course));
        } else {
            console.log("Người dùng chưa đăng ký khóa học nào.");
        }
    } else {
        console.log("Không tìm thấy người dùng.");
    }
}

let mainChoice;
do {
    menu();
    mainChoice = +prompt("Lựa chọn của bạn:");
    switch (mainChoice) {
        case 1:
            let courseChoice;
            do {
                courseManagementMenu();
                courseChoice = +prompt("Lựa chọn của bạn:");
                switch (courseChoice) {
                    case 1:
                        addCourse();
                        break;
                    case 2:
                        searchCourseByName();
                        break;
                    case 3:
                        deleteCourse();
                        break;
                    case 0:
                        console.log("Thoát quản lý khóa học.");
                        break;
                    default:
                        console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
                }
            } while (courseChoice !== 0);
            break;
        case 2:
            let userChoice;
            do {
                userManagementMenu();
                userChoice = +prompt("Lựa chọn của bạn:");
                switch (userChoice) {
                    case 1:
                        addUser();
                        break;
                    case 2:
                        registerCourse();
                        break;
                    case 3:
                        unregisterCourse();
                        break;
                    case 4:
                        showUserCourses();
                        break;
                    case 0:
                        console.log("Thoát quản lý người dùng.");
                        break;
                    default:
                        console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
                }
            } while (userChoice !== 0);
            break;
        case 0:
            console.log("Thoát chương trình. Tạm biệt!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (mainChoice !== 0);