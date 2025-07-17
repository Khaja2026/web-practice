// var sum= 10 + 15;
// console.log(sum);
// var amount=1000;
// var shoes=5000;
// if (shoes<=amount){
//     amount-=shoes;
//     console.log("yes you can buy!!!!")
//     console.log(amount);
// }
// else{
//     console.log("you cant!!!!")
// }
// var age1=23;
// var age2=2;
// if(age1 != age2){
//     console.log("yes")
// }
// if(1==1 && 2==2 || "k"=="s"){
//     console.log("truee")
// }
// var college=["south","east","west"];
// var university=[];
// university.push(college[2])
// var index=university.indexOf("west");
// console.log(university);
// if (index > -1){
//     university.splice(index, 1);

// }
// console.log(university);
// var a=10;
// for(var x=0;x<a;x++){
//     console.log(x);
// }
// var students=["khaja","aman","sunil"];
// for(var std=0;std<students.length;std++){
//     console.log(students[std]);
// }
// function area(length,width ){
//     return length*width;
// }
// var area1=area(12,12);
// console.log(area1);
// var customer={name:"aman",college:"mits",age:18};
// // console.log(customer.name);
// // console.log(customer["college"]);
// var customer1=new Object();
// customer1.name="khaja";
// customer1.college="mits";
// customer1.age=18;
// console.log(customer1);
var students=[]
function student(first,last,age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.greeting=function(){
        return "hi"+this.firstName;
    };
}
var s1=new student("khaja","hussain",18);
console.log(s1);
