const hours = parseInt(prompt("Nhập giờ (0-23): "));
const minutes = parseInt(prompt("Nhập phút (0-59): "));
const seconds = parseInt(prompt("Nhập giây (0-59): "));

if (
    isNaN(hours) || isNaN(minutes) || isNaN(seconds) ||
    hours < 0 || hours > 23 ||
    minutes < 0 || minutes > 59 ||
    seconds < 0 || seconds > 59
) {
    alert("Giá trị nhập không hợp lệ");
} else {
    let period = hours >= 12 ? "PM" : "AM";
    let hour12 = hours % 12;
    hour12 = hour12 === 0 ? 12 : hour12;    

    alert(`Thời gian: ${hour12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`);
}
