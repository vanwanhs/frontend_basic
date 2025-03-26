
function close_add(){
    let container02 = document.getElementById("container02");
    container02.style.display = (window.getComputedStyle(container02).display === "none") ? "block" : "none";
 }
  function add_web(){
    let list_web = JSON.parse(localStorage.getItem("list_web"))||[];
    let container02 = document.getElementById("container02");
    container02.style.display = (window.getComputedStyle(container02).display === "none") ? "block" : "none";
    if(window.getComputedStyle(container02).display ==="block"){
      return;
    }
    let web_name_input = document.getElementById("web_name_input").value.trim();
    let web_url_input = document.getElementById("web_url_input").value.trim();
    if(web_name_input ==="" || web_url_input ===""){
      alert("Bạn có bỏ sót phần nào không...");
      return;
    }
  web_add ={
    web_name : web_name_input,
    web_url : web_url_input,
  }
  list_web.push(web_add);
  localStorage.setItem("list_web",JSON.stringify(list_web));  
  show_web();
  document.getElementById("web_name_input").value="";
  document.getElementById("web_url_input").value="";
  }

  function show_web(){
    let list_web = JSON.parse(localStorage.getItem("list_web"))||[];
    let container01_show_web = document.getElementById("container01_show_web");
    let str ="";
    for (let i = 0; i < list_web.length; i++) {
      str+=`<div id="container01_show_web_div"> <a href="${list_web[i].web_url}">URL</a><span>${list_web[i].web_name}</span> </div>`
    }
      container01_show_web.innerHTML = str;
  }
  show_web();
