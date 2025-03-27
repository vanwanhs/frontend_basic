document.addEventListener("DOMContentLoaded", function () {
    let savedName = localStorage.getItem("userName");

    if (savedName) {
        showGreeting(savedName);
    }
});

function saveName() {
    let name = document.getElementById("nameInput").value.trim();
    
    if (name) {
        localStorage.setItem("userName", name);
        showGreeting(name);
    } else {
        alert("Vui lòng nhập tên!");
    }
}

function showGreeting(name) {
    document.getElementById("displayName").textContent = name;
    
    document.getElementById("form-container").style.display = "none";
    document.getElementById("greeting-container").style.display = "block";
}

function changeName() {
    localStorage.removeItem("userName");
    
    document.getElementById("greeting-container").style.display = "none";
    document.getElementById("form-container").style.display = "block";
}
