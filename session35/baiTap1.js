
let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function render() {
    let str = "";
    for (let i = 0; i < jobs.length; i++) {
        str += `
        <li>
            ${jobs[i].id} - ${jobs[i].input}
            <button onclick="deleteJob(${jobs[i].id})">Xóa</button> 
            <button onclick="update(${jobs[i].id})">Sửa</button>
        </li>
        `;
    }
    document.getElementById("listUser").innerHTML = str;
}

function addJobs() {
    let inputJobs = document.getElementById("input").value.trim();
    if (!inputJobs) return;

    let newId = jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1;
    let newJobs = { input: inputJobs, id: newId };

    jobs.push(newJobs);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    document.getElementById("input").value = "";
    render();
}

function deleteJob(id) {
    let findIndex = jobs.findIndex(item => item.id === id);
    if (findIndex !== -1) {
        jobs.splice(findIndex, 1);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        render();
    }
}

function update(id) {
    let find = jobs.find(i => i.id === id);
    if (!find) return;

    let newInput = prompt("Mời bạn nhập công việc mới:", find.input);
    if (newInput !== null && newInput.trim() !== "") {
        find.input = newInput.trim();
        localStorage.setItem("jobs", JSON.stringify(jobs));
        render();
    }
}

// Hiển thị danh sách công việc khi trang load
render();
