

// let h1=document.getElementById("counter");

// function counter(){
//     let i=0;
    

//     setInterval(function(){
        
//         i=i+1;
//        if(i===60){
//            i=0;
//        }
//         h1.innerText=i;
//         // console.log(i);
//     },100)
// }

// counter();

let h1=document.getElementById("counter");

function counter(){
    let i=60;
    

    let clr=setInterval(function(){
        
        i=i-1;
        h1.innerText=i;
       if(i===0){
           clearInterval(clr);
           alert('Timeout!!!');
       }
      
       
                                // console.log(i);
    },100);
}

counter();

