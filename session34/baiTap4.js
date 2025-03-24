let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function renderJobs() {
    let list = document.getElementById("listJobs");
    list.innerHTML = ""; 

    jobs.forEach((job, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${job} 
            <button onclick="deleteJob(${index})" style="background: red; color: white; border: none; padding: 5px; cursor: pointer;">
                Xóa
            </button>
        `;
        list.appendChild(li);
    });
}

function addJobs() {
    let input = document.getElementById("input").value.trim();
    if (!input) {
        alert("Vui lòng nhập công việc!");
        return;
    }

    jobs.push(input); 
    localStorage.setItem("jobs", JSON.stringify(jobs));
    document.getElementById("input").value = ""; 
    renderJobs(); 
}

function deleteJob(index) {
    jobs.splice(index, 1); 
    localStorage.setItem("jobs", JSON.stringify(jobs)); 
    renderJobs(); 
}
