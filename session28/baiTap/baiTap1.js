const person= {
    name: 'Anh',
    age: 30,
    job: Development,
    greet: function(){
        console.log('Hello, my name is '+this.name+' moi '+this.age+' job: '+this.job);
        
    },

}
person.greet();