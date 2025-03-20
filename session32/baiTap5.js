let job=[];
function renderTodoList() {
    let str = "";
    for (let i = 0; i < job.length; i++) {
        str += `
        <tr style="color: green;">
            <td>
                ${job[i].name} 
            </td>
            <td>
                <button onclick="deleteJob(${job[i].id})" style="background-color: red; color: white;">Xóa</button>
            </td>
        </tr>
        <tr><td colspan="2"><hr></td></tr>`;
    }
    document.getElementsByClassName("job")[0].innerHTML = str;
}
function addJob() {
    let jobName = document.getElementById("content").value;
    if (jobName === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    let newJob = { name: jobName, id: job.length > 0 ? job[job.length - 1].id + 1 : 1 };
    job.push(newJob);
    document.getElementById("content").value = "";
    renderTodoList();
}

function deleteJob(id) {
    let index = job.findIndex(item => item.id === id);
    if (index !== -1) {
        job.splice(index, 1);
        renderTodoList();
    }
}
renderTodoList();
