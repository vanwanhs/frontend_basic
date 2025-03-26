document.addEventListener("DOMContentLoaded", () => {
    render();
    document.getElementById("filter-status").addEventListener("change", render);
});

function showModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function addCategory() {
    let id = document.getElementById("category-id").value.trim();
    let name = document.getElementById("category-name").value.trim();
    let status = document.getElementById("category-status").value;

    if (!id || !name) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let categories = JSON.parse(localStorage.getItem("categories")) || [];

    if (categories.some(cat => cat.id === id)) {
        alert("Mã danh mục đã tồn tại!");
        return;
    }

    let newCategory = { id, name, status };
    categories.push(newCategory);
    localStorage.setItem("categories", JSON.stringify(categories));

    render();
    closeModal();
}

function render() {
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    let filterStatus = document.getElementById("filter-status").value;
    let list = document.getElementById("category-list");

    list.innerHTML = "";
    categories
        .filter(cat => filterStatus === "all" || cat.status === filterStatus)
        .forEach(cat => {
            let statusClass = cat.status === "active" ? "status-active" : "status-inactive";
            let row = `<tr>
                        <td>${cat.id}</td>
                        <td>${cat.name}</td>
                        <td class="${statusClass}">${cat.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</td>
                        <td>
                            <button onclick="editCategory('${cat.id}')">Sửa</button>
                            <button onclick="deleteCategory('${cat.id}')">Xóa</button>
                        </td>
                    </tr>`;
            list.innerHTML += row;
        });
}

function deleteCategory(id) {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
        let categories = JSON.parse(localStorage.getItem("categories")) || [];
        categories = categories.filter(cat => cat.id !== id);
        localStorage.setItem("categories", JSON.stringify(categories));
        render();
    }
}

function editCategory(id) {
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    let category = categories.find(cat => cat.id === id);
    
    if (category) {
        document.getElementById("category-id").value = category.id;
        document.getElementById("category-name").value = category.name;
        document.getElementById("category-status").value = category.status;
        showModal();
        let addButton = document.querySelector(".but button:first-child");
        addButton.textContent = "Lưu";
        addButton.setAttribute("onclick", `updateCategory('${id}')`);
    }
}

function updateCategory(id) {
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    let category = categories.find(cat => cat.id === id);

    if (category) {
        category.name = document.getElementById("category-name").value.trim();
        category.status = document.getElementById("category-status").value;
        localStorage.setItem("categories", JSON.stringify(categories));
        render();
        closeModal();
        let addButton = document.querySelector(".but button:first-child");
        addButton.textContent = "Thêm";
        addButton.setAttribute("onclick", "addCategory()");
    }
}
