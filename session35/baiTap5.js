document.addEventListener("DOMContentLoaded", render);

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
    let newCategory = { id, name, status };
    categories.push(newCategory);
    localStorage.setItem("categories", JSON.stringify(categories));
    render();
    closeModal();
}

function render() {
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    let list = document.getElementById("category-list");
    list.innerHTML = "";
    categories.forEach(cat => {
        let statusClass = cat.status === "active" ? "status-active" : "status-inactive";
        let row = `<tr>
                    <td>${cat.id}</td>
                    <td>${cat.name}</td>
                    <td class="${statusClass}">${cat.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</td>
                    <td>
                        <button onclick="deleteCategory('${cat.id}')">Xóa</button>
                        <button onclick="update('${cat.id}')">Sửa</button>
                    </td>
                </tr>`;
        list.innerHTML += row;
    });
}

function deleteCategory(id) {
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories = categories.filter(cat => cat.id !== id);
    localStorage.setItem("categories", JSON.stringify(categories));
    render();
}