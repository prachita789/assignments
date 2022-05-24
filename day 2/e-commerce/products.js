  
  let proData=JSON.parse(localStorage.getItem("Products"));
  console.log(proData);


  var count=1;

        proData.map(function(el,index){

        document.getElementById("counter").textContent = count++; 

        let div = document.createElement("div");
        div.setAttribute("id","container");

        
        let image = document.createElement("img");
        image.setAttribute("id","image")

        let name = document.createElement("p");
        name.innerText=el.name;

        let category = document.createElement("p");
        category.innerText=el.category;


        image.src=el.image;
       
        
        let price = document.createElement("p");
        price.innerText=el.price;
        

        let gender = document.createElement("p");
        gender.innerText=el.gender;

        let sold = document.createElement("p");
        sold.innerText=el.sold;

        let div1 = document.createElement("div");

        let btn = document.createElement("button")
        btn.setAttribute("id","sold");
        btn.innerText="Sold";
        btn.value = el.sold;

        if(btn.value == "false"){
            btn.style.backgroundColor = "Green";
        }else
        {
            btn.style.backgroundColor = "Red";
        }

        btn.addEventListener("click",function(){
            toggle(el,index)
        })

        function toggle(el,index){
            if(el.sold){
                el.sold = false;
                btn.style.backgroundColor = "green"
                localStorage.setItem("Products",JSON.stringify(proData))
                console.log(el.sold)

            }else{
                el.sold = true;
                btn.style.backgroundColor = "red";
                localStorage.setItem("Products",JSON.stringify(proData))
                console.log(el.sold)
            }
        }

        let removeBtn = document.createElement("button")
        removeBtn.setAttribute("id","remove")
        removeBtn.innerText="Remove";
        removeBtn.addEventListener("click",function(){
            remove(el,index)
        })

        function remove(el,index){
            proData.splice(index,1)
            localStorage.setItem("Products",JSON.stringify(proData))

            window.location.reload();
        }
        div1.append(btn,removeBtn)

        div.append(image,name,category,price,gender,div1)

        document.querySelector("#structure").append(div)

    })

