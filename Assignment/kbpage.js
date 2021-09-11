
    var i =0;
    var txt = "Mechanical Keyboard Portfolio"
    var speed= 100;
    function type(){
        document.getElementById("info").innerHTML
            +=txt.charAt(i);
    
        i++;
        setTimeout(type,speed);
    
    }
    type()


    
  