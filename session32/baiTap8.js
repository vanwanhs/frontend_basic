let jobs=[
    {
        id:1,
        name:"học dom js"
    },
    {
        id:2,
        name:"làm bài tập dom js"
    }
];// lưu công việc
// tạo function hiển thị công việc
let flag=-1;
 function renderJobs() {
     let str="";
     for (let i = 0; i < jobs.length; i++) {
       str+=
       `
        <tr>
         <td>${jobs[i].name}</td> 
        <td><button onclick=updateJob(${jobs[i].id})>Sửa</button> <button onclick=deleteJob(${jobs[i].id})>Xóa</button></td>
        </tr>
       `
    }
    document.getElementsByClassName("jobs")[0].innerHTML=str;
    console.log(str);
 }
 renderJobs();
 // khai báo hàm thêm công việc
 function addJob() {
    let name= document.getElementById("job").value;
    if(flag!=-1){
       // sửa 
       let newUpdate={
        id:jobs[flag].id,
        name:name
       }
       jobs.splice(flag,1,newUpdate);
       document.getElementsByClassName("btn")[0].innerHTML="thêm";
       document.getElementById("job").value="";
       renderJobs();
       flag=-1;
       return;
    }
    // tạo đối tượng
    let id;
    if(jobs.length==0){
        id=1;
    }else{
        id= jobs[jobs.length-1].id+1;
    }
    let newJob={
        id:id,
        name:name
    }
    jobs.push(newJob);
    document.getElementById("job").value="";
    renderJobs();
 }
 // khai báo hàm xóa
//  function deleteJob(id) {
//     console.log("gọi hàm xóa!",id);
//     let index= jobs.findIndex(item=>item.id==id);
//     jobs.splice(index,1);
//     renderJobs();
//  }
//  function updateJob(id) {
//     let item= jobs.find(item=>item.id==id);
//     let index= jobs.findIndex(item=>item.id==id);
//     document.getElementById("job").value= item.name;
//     document.getElementsByClassName("btn")[0].innerHTML="sửa";
//     flag=index;
//  }
function deleteJob(id) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if (confirmDelete) {
        let index = jobs.findIndex(item => item.id == id);
        if (index !== -1) {
            jobs.splice(index, 1);
            renderJobs();
        }
    }
}

function updateJob(id) {
    let item = jobs.find(item => item.id == id);
    let index = jobs.findIndex(item => item.id == id);

    let newName = prompt("Chỉnh sửa công việc:", item.name);
    if (newName !== null && newName.trim() !== "") {
        jobs[index].name = newName;
        renderJobs();
    }
}
