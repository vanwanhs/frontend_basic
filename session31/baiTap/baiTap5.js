document.addEventListener('DOMContentLoaded', function () {
    const employees = [
        { id: 1, name: 'John', age: 18, address: 'New York' },
        { id: 2, name: 'Mike', age: 22, address: 'Canada' },
        { id: 3, name: 'Linda', age: 19, address: 'California' },
        { id: 4, name: 'Peter', age: 25, address: 'London' },
        { id: 5, name: 'Tony', age: 17, address: 'New York' }
    ];

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Tạo tiêu đề bảng
    ['STT', 'NAME', 'AGE', 'ADDRESS'].forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    // Thêm dữ liệu nhân viên vào bảng
    employees.forEach(employee => {
        const row = document.createElement('tr');

        Object.values(employee).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    // Hiển thị bảng trong div có id là employeeTable
    document.getElementById('employeeTable').appendChild(table);
});