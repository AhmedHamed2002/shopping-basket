let  cnt  =  document.getElementById("cnt") ; 
let total  =  document.getElementById("TotalNumber") ;  
let  basket = document.getElementById("action") ; 

function add(num ,count)
{
total.innerHTML = Number(total.innerHTML)+ num ;  
cnt.innerHTML = Number(cnt.innerHTML)+1 ; 
addToBasket(count) ;  
}

function addToBasket(count)
{
    let div = document.createElement("div") ; 
    if (basket.innerHTML === "Your Cart Is Empty" )
        {
            basket.innerHTML = "";    
        }
        div.className = "product" ; 
        if(count===1)
        {
            const imageUrl = "../image/laptop.png";
            const image = new Image();
            image.src = imageUrl; 
            image.className = "m" ;  
            div.appendChild(image) ; 
            
            let txt1  =  document.createElement("p") ;  
            txt1.appendChild(document.createTextNode("ASUS FHD Gaming Laptop")) ;   
            div.appendChild(txt1);

            let txt2  =  document.createElement("p") ;  
            txt2.appendChild(document.createTextNode("$500.00")) ;   
            div.appendChild(txt2);

            var icon = document.createElement("i");
            icon.className = "fa-solid fa-trash";
            div.appendChild(icon); 
            div.id = "500" ;
            
            basket.appendChild(div) ;
        }
        else  if(count ===2 )
        {
            const imageUrl = "../image/keyboard.pngg";
            const image = new Image();
            image.src = imageUrl; 
            image.className = "m" ;  
            div.appendChild(image) ; 
            
            let txt1  =  document.createElement("p") ;  
            txt1.appendChild(document.createTextNode("AK-900 Wired Keyboard")) ;   
            div.appendChild(txt1);

            let txt2  =  document.createElement("p") ;  
            txt2.appendChild(document.createTextNode("$80.00")) ;   
            div.appendChild(txt2);

            var icon = document.createElement("i");
            icon.className = "fa-solid fa-trash";
            div.appendChild(icon); 
            div.id = "80" ;  
            
            basket.appendChild(div) ;
        }
        else if (count===3)
        {
            const imageUrl = "../image/cam.png";
            const image = new Image();
            image.src = imageUrl; 
            image.className = "m" ;  
            div.appendChild(image) ; 
            
            let txt1  =  document.createElement("p") ;  
            txt1.appendChild(document.createTextNode("CANON DSLR Camera")) ;   
            div.appendChild(txt1);

            let txt2  =  document.createElement("p") ;  
            txt2.appendChild(document.createTextNode("$220.00")) ;   
            div.appendChild(txt2);

            var icon = document.createElement("i");
            icon.className = "fa-solid fa-trash";
            div.appendChild(icon);
            div.id = "220" ; 
            
            basket.appendChild(div) ;
        }
        else 
        {
            const imageUrl = "../image/monitor.png";
            const image = new Image();
            image.src = imageUrl; 
            image.className = "m" ;  
            div.appendChild(image) ; 
            
            let txt1  =  document.createElement("p") ;  
            txt1.appendChild(document.createTextNode("IPS LCD Gaming Monitor")) ;   
            div.appendChild(txt1);

            let txt2  =  document.createElement("p") ;  
            txt2.appendChild(document.createTextNode("$200.00")) ;
            div.appendChild(txt2);

            var icon = document.createElement("i");
            icon.className = "fa-solid fa-trash";
            div.appendChild(icon); 
            div.id = "200" ;
            
            basket.appendChild(div) ;
        }
}


basket.addEventListener("click",(e)=>
{
    if(e.target.classList.contains("fa-solid"))
    {
        // Remove Element From  Page 
        cnt.innerHTML = Number(cnt.innerHTML)-1 ; 
        total.innerHTML = Number(total.innerHTML)- Number(e.target.parentElement.id);   
        e.target.parentElement.remove() ;         
    }
}) ; 
