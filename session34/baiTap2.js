// Lấy danh sách khóa học từ localStorage hoặc tạo danh sách mặc định
const courses = JSON.parse(localStorage.getItem("listCourses")) || [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 02', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm Th' },
    { id: 3, content: 'Learn CSS Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Ci ớt ớt' }
];

// Hiển thị danh sách khóa học
function renderData() {
    let rowElement = "";
    for (let i = 0; i < courses.length; i++) {
        rowElement += `
        <tr>
            <td>${courses[i].id}</td>
            <td>${courses[i].content}</td>
            <td>${courses[i].dueDate}</td>
            <td>${courses[i].status}</td>
            <td>${courses[i].assignedTo}</td>
            <td>
                <button onclick="updateCourse(${courses[i].id})" style="backGround:green">Sửa</button>
                <button onclick="deleteCourse(${courses[i].id})" style="backGround:red">Xóa</button>
            </td>
        </tr>
        `;
    }

    // Chỉ thay đổi phần `<tbody>`, giữ nguyên `<thead>`
    document.querySelector("#listUser tbody").innerHTML = rowElement;
}


// Hàm xóa khóa học
function deleteCourse(id) {
    const index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        courses.splice(index, 1);
        localStorage.setItem("listCourses", JSON.stringify(courses));
        renderData();
    }
}

// Hàm thêm khóa học mới
function submit() {
    let inputText = document.getElementById("text").value.trim();
    let inputDate = document.getElementById("date").value.trim();
    let assignedTo = document.getElementById("assignedTo").value.trim();
    let status = document.getElementById("select").value;

    // Kiểm tra dữ liệu nhập vào
    if (!inputText || !inputDate || !assignedTo || !status) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Tạo ID mới
    let newId = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
    let newCourse = {
        id: newId,
        content: inputText,
        dueDate: inputDate,
        status: status,
        assignedTo: assignedTo
    };

    // Thêm vào danh sách và lưu vào localStorage
    courses.push(newCourse);
    localStorage.setItem("listCourses", JSON.stringify(courses));
    renderData();

    // Xóa dữ liệu trong form sau khi thêm xong
    document.getElementById("text").value = "";
    document.getElementById("date").value = "";
    document.getElementById("assignedTo").value = "";
    document.getElementById("select").value = "";
}

// Hàm cập nhật khóa học
function updateCourse(id) {
    let course = courses.find(c => c.id === id);
    if (!course) return;

    let newText = prompt("Nhập nội dung mới:", course.content);
    let newDate = prompt("Nhập ngày mới:", course.dueDate);
    let newAssignedTo = prompt("Gán cho ai:", course.assignedTo);
    let newStatus = prompt("Nhập trạng thái mới:", course.status);

    if (newText && newDate && newAssignedTo && newStatus) {
        course.content = newText;
        course.dueDate = newDate;
        course.assignedTo = newAssignedTo;
        course.status = newStatus;

        localStorage.setItem("listCourses", JSON.stringify(courses));
        renderData();
    }
}

// Gọi hàm render khi trang tải xong
document.addEventListener("DOMContentLoaded", renderData);
