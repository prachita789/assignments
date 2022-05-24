// // this keyword

// /*
// 1.functions
// 2.Global scope
// 3.Methods
// */

// // function func(){
// // console.log(this);
// // }
// // func();

// // let obj={
// //     team:"csk",
// //     print:function func(){
// //         console.log(this);
// //         },

        
// // };

// // obj.print();

// // this will always refer to an object

// // this will refer either to global or window object or custom object which you created;

// // this always refers to its parent objects

// // function myfunction(n,b,p){
// //     let obj={};
// //     obj.name = n;
// //     obj.brand = b;
// //     obj.price = p;
// //     return obj;
// // }
// // console.log(myfunction("tee","nike",1520));



// // function Myfunction(n,b,p){
   
// //     this.name = n;
// //     this.brand = b;
// //     this.price = p;
   
// // }
// // console.log( new Myfunction("tee","nike",1520));




// function divide(a, b) {
//     let a = 20;
//     let b = 30;
//     if(b == 0) {
//        throw 'Division by zero';
//     }
//     return a / b;
// }



function Product(name,brand,price){
    this.name=name;
    this.brand=brand;
    this.price=price;
}

let arr =[];

function submitProduct(e){

    event.preventDefault();

    let form = document.getElementById("products");
    let name = form.name.value;
    let brand = form.brand.value;
    let price = form.price.value;
    
    let p=new Product(name,brand,price);

    arr.push(p);
    console.log(arr);

}