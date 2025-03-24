 
function getEmployees() {  
    const employees = localStorage.getItem('employees');  
    return employees ? JSON.parse(employees) : [];  
}  

function displayEmployees() {  
    const employees = getEmployees();  
    const employeeList = document.getElementById('employeeList');  
    employeeList.innerHTML = '';

    employees.forEach((employee, index) => {  
        const row = document.createElement('tr');  
        row.innerHTML = `  
            <td>${index + 1}</td>  
            <td>${employee.name}</td>  
            <td>${employee.role}</td>  
        `;  
        employeeList.appendChild(row);  
    });  
}  
 
function addEmployee() {  
    const name = document.getElementById('employeeName').value.trim();  
    const role = document.getElementById('employeeRole').value.trim();  

    if (name === '' || role === '') {  
        alert('Vui lòng nhập tên và chức vụ!');  
        return;  
    }  

    const employees = getEmployees();  
    employees.push({ name, role });  
    localStorage.setItem('employees', JSON.stringify(employees));  
    displayEmployees();  
    document.getElementById('employeeName').value = '';  
    document.getElementById('employeeRole').value = '';  
}  
 
window.onload = displayEmployees;  