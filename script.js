
    window.onload = function() {
        var d = new Date();
        var h = d.getHours();       
        if (h<12){            
            document.body.style.background = "url('image/back2.jpg') no-repeat center top";
            
            document.getElementsByClassName("event")[0].innerHTML="이벤트중";
            document.getElementsByClassName("event")[0].style.color="yellow";              
        }
        else{
            document.body.style.background = "url('image/back3.jpg') no-repeat center top";            
            document.getElementsByClassName("event")[0].innerHTML="이벤트마감"; 
            document.getElementsByClassName("event")[0].style.color="gray";             
        }
    }
