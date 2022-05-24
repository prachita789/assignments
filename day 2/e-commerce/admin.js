




function Myproduct(n,c,i,p,g,s){
    this.name = n;
    this.category = c;
    this.image = i;
    this.price = p;
    this.gender = g;
    this.sold = s;
}

let productdata = JSON.parse(localStorage.getItem("Products")) || [];

function storeProducts(e){
    e.preventDefault();

    let form = document.getElementById('form1')

    let name = form.name.value;
    

    let category = form.category.value;
    
    let image = form.image.value;
    

    let price = form.price.value;
    
    let gender = form.gender.value;
    

    let sold  = form.sold.checked;
    
let p1 = new Myproduct(name,category,image,price,gender,sold);
console.log(p1);
productdata.push(p1);

localStorage.setItem("Products",JSON.stringify(productdata));

}