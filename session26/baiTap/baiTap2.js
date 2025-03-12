let test1=["apple", "banana", "cat", "elephant", "dog"];
let test2=[];
let test3="anh yeu em";
function bai2(arr) {
    if(Array.isArray(arr)){
        if(arr.length==0){
            console.log("Mang rong");
            
        } else {
            let result= arr.filter((item)=>{
                return item.length>5
            })
            console.log(result);
            
        }
    }else {
        console.log("du lieu nhap khogn hop le");
        
    }
}
bai2(test1);
bai2(test2);
bai2(test3);