// Fat Arrow Functions
let number = (num)=> num *10 
console.log(number(20))

let numberOne = (a,b) => a + b 
console.log(numberOne(10,20))

let numberThree = (a,b)=>{
    return a + b
}
console.log(numberThree(30,45))

// object function 
var javascript = {
    name:'javascript',
    libraries:['react','angular','view','react'],
    printLibraries:function(){
        this.libraries.forEach(function(a){
            console.log(`${this.name} loves${a}`)
        })
    }

}
var age = 170;

var type;
    if(age >=18){
        type = 'audlt'
    }else{
        type = 'child'
    }
console.log(type)

// টারনারি অপারেটর ইমপ্লিমেন্ট 
var type=  (age >=18) ? 'audlt': 'child'
console.log(type)