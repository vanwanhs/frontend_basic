function check(array){
    let element=0;
    for (let i=0;i<array.length;i++){
        if(array[i]>0){
            element++;
        }
    }
    element?console.log("so lan so nguyen duong xuat hien la "+element): console.log("KHong co so nguyen duong");
    
}
check([1,3,-3,4,-3]);