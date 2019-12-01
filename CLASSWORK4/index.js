"use strict"

// const abc = function(a,b,c){
//     return a+b+c;
// }
// console.log(abc(1,2,3));

// const multi = function(a,b,c){
//     return a*b-c;
// }
// console.log(multi(2,5,3));
//  const fnB= function(){
//      console.log("this is function 2");
//  }
//  const fnA=function(){
//      console.log("this is function 1");
//      fnB();
//         console.log("this is function 2&1");
//     }
 
 
//  console.log(fnA());

//  const count = function(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   };
  
//   console.log(count(5, 20,2)); // countFrom = 1, countTo = 5, step = 1
//   console.log(count(2)); // countFrom = 2, countTo = 10, step = 1
//   count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
//   count(); // countFrom = 0, countTo = 10, step = 1
//   const args= function(){
//       let sum = 0;
//       for(let el of arguments){
//           sum += el

//       }
//       return sum;
//   }
// //   console.log(args(1,2,3));

//   const arrFromArgs=function(){
//    let arr = Array.from(arguments)

//    if(arr.includes(5)){
//        alert("Molodez");
//    }else{
//        alert("Rozbiinik");
//    }
   
//   }
//   arrFromArgs(1,2,67,8,9);

//   const operator = function(...arg){
//      console.log(arg)
//   }

//   operator("a","b","c");

// const withdraw = function(amount, balance) {
//     if (amount === 0) {
//       console.log('Для проведения операции введите сумму больше нуля.');
//       return;
//     } else if (amount > balance) {
//       console.log('Недостаточно средств на счету.');
//       return;
//     } else {
//       console.log('Операция снятия средств проведена.');
//       return;
//     }
//   };
  
//   withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// //   withdraw(500, 300); // Недостаточно средств на счету.
// // //   withdraw(100, 300); // Операция снятия средств проведена.
//   console.log(abc());
// //   const abc=function(){

// // //   }
// // function abc(){};
// const repeat = function (str,n=2) {
//     for(let i=1; i<=n; i++){
//         console.log(str);
//     }
// }
// repeat("dsds");
// repeat(1,4);
// const c=5;
// function a(){
//     const r=5;
//     if(1==1){

//     }
//     function b(){

//     }
// }

// console.log(r);

// const h=10;
// const sum = function( ){
//     let a=5;
//     console.log(a+h);
// }
// sum();

// const hots = function(){
//     let c =5;

//     const fot= function(){
//         let b = 10;
//     console.log(c+b);
//     }
//     return fot();
// }
// hots();

// const sum = function(a,b,c){
// return(a+b+c);
// }
// console.log(sum(1,2,3));
// const sum2 = (a,b,c)=> a+b+c;
// const rgb=function(){
//     console.log(`rgb(${arguments[0]?arguments[0]:0},${arguments[1]?arguments[1]:0},${arguments[2]?arguments[2]:0})`);
// }
// rgb();
// // rgb(200,160,100);
// const avg=function(...arg){
//      console.log( Math.max(...arg));
//     }
 
// // avg(3,5,6,10,100,50);
// const avg=function(num1,num2){
//    console.log(Math.min(num1,num2));

// }
// // avg(1,8);
// const multi=function(arr,num){
// let newArr=arr.slice(0)
// for(let el of newArr){
//     newArr.push(el*num);
// }
// console.log(newArr);
// }
// const number=[5,8,1];
// multi(number,2);
// const remove=function (arr,element) {
//     arr.splice(arr.indexOf(element),1);
//     console.log(arr);
    
// }
// const number=[1,2,3,4,5];
// remove(number,2);
// // const pass=["qwerty","qwerty321","ajax","zxcvs"];
//  const pass = prompt("Enter your pass:")
// const validation=function(pass){
//     if(pass.length>6 && pass.length<12){
//      return true;
//     }else{
//         return false; 
//     }

// }
// console.log(validation(pass));
