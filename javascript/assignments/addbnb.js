


var signinButton =  document.getElementById("signinButton")

signinButton.addEventListener("click", fun)
function fun (){
    var popup = document.getElementById("popup")
    if(popup.style.display == "none")
    {
        popup.style.display = "block"
    } 
    else{
        popup.style.display = "none"
    }

    }



