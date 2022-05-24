function myArray(){
    Object.defineProperty(this,"length" ,{
        value:0,
        writable:true,
        enumerable:false,
    });

    this.length = arguments.length;

    for(let i=0;i<this.length;i++){
        this[i] = arguments[i];
    }
}

let a1= new myArray("1","2","3","4");

  

  myArray.prototype.push = function (value){

    let index = this.length
    this[index] = value;
    this.length++;
  };

  myArray.prototype.pop = function () {
      let index = this.length -1;

      delete this[index];
      this.length--;

  }
  myArray.prototype.top = function(){
      let index = this.length-1;

      return this[index];
  }

  myArray.prototype.print = function(){
      let p = [];
      for(let i=0;i<this.length;i++)
      {
          p[i] = this[i]
      }
      return p;
  }
  myArray.prototype.printReverse = function(){
    
    let ar= new myArray();
     for(let i=this.length-1;i>=0;i--){
        ar.push(this[i]);
       }
       let revarr = [];
       for(let i=0;i<ar.length;i++){
           revarr[i] = ar[i];
       }
       return revarr;
  }

  myArray.prototype.size = function(){
      return this.length;

  }

  a1.push('8');
  a1.push('7');
  a1.pop();
  


 console.log(a1);
 console.log("a1:", Object.values(a1));
 console.log("a1:", a1.top());
 console.log("Array a1 :", a1.print());
 console.log("Reverse Array a1:", a1.printReverse());
 console.log("Size of array a1:", a1.size());