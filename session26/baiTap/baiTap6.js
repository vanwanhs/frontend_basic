function convertDateFormat(dates) {
    if (!Array.isArray(dates)) {
        return "Dữ liệu không hợp lệ";
    }

    return dates.map(date => {
        if (typeof date !== "string") {
            return "Dữ liệu không hợp lệ";
        }

        const parts = date.split("-");
        if (parts.length !== 3) {
            return "Dữ liệu không hợp lệ";
        }

        const [year, month, day] = parts.map(Number);

        // Kiểm tra nếu có giá trị NaN hoặc không đúng độ dài
        if (
            isNaN(year) || isNaN(month) || isNaN(day) ||
            year < 1000 || year > 9999 ||
            month < 1 || month > 12 ||
            day < 1 || day > 31
        ) {
            return "Dữ liệu không hợp lệ";
        }

        // Kiểm tra ngày hợp lệ thực tế
        const parsedDate = new Date(year, month - 1, day);
        if (
            parsedDate.getFullYear() !== year || 
            parsedDate.getMonth() + 1 !== month || 
            parsedDate.getDate() !== day
        ) {
            return "Dữ liệu không hợp lệ";
        }

        return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;
    });
}

console.log(convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(convertDateFormat([]));
console.log(convertDateFormat("abc")); 
console.log(convertDateFormat(["2025-02-30"])); 
console.log(convertDateFormat(["invalid-date"]));
console.log(convertDateFormat(["2024-02-29"])); 
console.log(convertDateFormat(["2023-02-29"])); 