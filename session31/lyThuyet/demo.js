// job = [
//     {name: "học dom", id:1},
//     {name: "học js cơ bản", id:2}
// ]
// function renderTodoList(){
//     let str= "";
//     for (let i=0;i<job.length;i++){
//         str +=
//         `<li> 
//         <button ${job[i].name} >thêm</button> 
//         <button onclick="deleteJob">xóa ${job[i].id}</button>
//         <button ${job[i]=id} >thêm</button> 
//         </li>`
//     }
//     document.getElementsByClassName("job")[0].innerHtML=str;
//     console.log(str);
// } 

// function addJob() {
//     let jobName =document.getElementById("content").value;
    
//     if (jobName === "") {
//         alert("Vui lòng nhập công việc!");
//         return;
//     }

//     let newJob = { name: jobName, id: job[job.length-1].id+1 };
//     job.push(newJob);
//     document.getElementById("content").value = "";
//     renderTodoList();
   
    
// }

// function deleteJob(id) {
// //    console.log();
//    let index = job.findIndex(item=>item.id==id);
//    job.splice(item,1);
//    renderTodoList();
// }
// function update(id){
//     let item = job.find(item=>item.id);
//     console.log();

//     let index = job.findIndex(item=>item.id==id);
    
// }
let job = [
    { name: "học DOM", id: 1 },
    { name: "học JS cơ bản", id: 2 }
];

function renderTodoList() {
    let str = "";
    for (let i = 0; i < job.length; i++) {
        str += `
        <li>
            ${job[i].name} 
            <button onclick="deleteJob(${job[i].id})">Xóa</button>
        </li>`;
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
