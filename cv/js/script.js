function phone() { 
    text =  document.getElementById("phone").textContent
        if( text == '+37529 850 65 89') {
            document.getElementById("phone").innerHTML = '<a></a>'
        }
        else{  
            document.getElementById("phone").innerHTML = '<a href="tel:+37529 850 65 89">+37529 850 65 89</a>'
        }
       
     
 }