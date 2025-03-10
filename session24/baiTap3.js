let arr=[];
let sum;
let flag;
do{
    console.log(" 1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Tìm phần tử lớn thứ hai trong mảng");
    console.log("6. Thoát chương trình");
    let choice=+prompt("Mời bạn nhập lựa chọn của mình")
    switch(choice){
        case 1:
            let length=+prompt("Mời bạn nhập độ dài của mảng");
            if (length > 0) {
                for (let i = 1; i <= length; i++) {
                    do {
                        let number = prompt("Mời bạn nhập vào giá trị vị trí thứ " + i);
                        if (Number.isInteger(Number(number))) {
                            arr.push(Number(number));
                            break;
                        } else {
                            alert("Mời bạn nhập lại giá trị số nguyên tại vị trí " + i);
                        }
                    } while (1);
                }
            } else {
                console.log("Số lượng phần tử không hợp lệ!");
            }
            break;

        case 2:
           console.log("Mảng hiện tại có trong mảng: "+arr);
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let maxDigit = arr[0];
                let maxIndex = 0;
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > maxDigit) {
                        maxDigit = arr[i];
                        maxIndex = i;
                    }
                }
            
                console.log("Giá trị lớn nhất:", maxDigit);
                console.log("Vị trí của nó:", maxIndex);
            }            
            break;
        case 4:
            sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if(arr[i]>0){
                    sum += arr[i];
                }
            }
            let sumTB=sum/3;
            console.log("Tổng các phần tử trong mảng: " + sum);
            console.log("Trung bình cộng phần tử có trong mảng: "+sumTB);
            break;
        case 5:
            for (let i=0;i<arr.length/2;i++){
                let temp=arr[i];
                arr[i]=arr[arr.length-i-1];
                arr[arr.length-i-1]=temp
            }
            console("Mảng sau khi đảo ngược lại: "+arr);
            break;
        case 6:
            flag=1;
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                for(let i=0;i<arr.length/2;i++){
                    if(arr[i]!==arr[arr.length-i-1]){
                        flag=0;
                        break;
                    }
                }
                flag==1? console.log("Mảng này là mảng đối xứng") : console.log("Mảng này không phải là mảng đối xứng"); 
            }
            break;
        case 7: 
            console.log(`Hẹn gặp lại bạn sau`);
            break;
        default:
            console.log(`Mời bạn nhập lại lựa chọn (1-8)`);
            break;
            
    }
} while (choice!=7);