"use strict"

// EX1



// const Account = function({ login, email }) {
//     this.login = login;
//     this.email = email;
  
//     this.getInfo = function() {
//       console.log(` Login: ${this.login}, Email: ${this.email}`);
//     };
//   };
// console.log(Account.prototype.getInfo);// function
// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
//   getInfo(){
//     console.log(`login:${this.login}, email:${this.email}`);
    
//    }
// });


// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof


// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
//   getInfo(){
//       console.log(`login:${this.login}, email:${this.email}`);
      
//   }
  
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


// =======================================================================================================================



// EX2
// const User = function({name,age,followers}){
//     this.name=name;
//     this.age=age;
//     this.followers=followers;

//     this.getInfo = function(){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
        
//     }
// }
// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//   });
  
//   mango.getInfo(); // User Mango is 2 years old and has 20 followers
  
//   const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//   });
  
//   poly.getInfo(); // User Poly is 3 years old and has 17 followers

// EX3

// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//   ]);
  
//   const items = storage.getItems();
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
//   storage.addItem('Дроид');
//   console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem('Пролонгер');
//   console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]