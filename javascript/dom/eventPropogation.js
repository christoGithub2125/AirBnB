var gp = document.getElementById("grandParent")
gp.addEventListener("click",(element)=>{
    var gp = document.getElementById("grandParent")
    gp.style.backgroundColor = "red"
    console.log("grand parent clicked");
    console.log("event phase" + element.eventPhase)
    
})

var p = document.getElementById("parent")
p.addEventListener("click",(element)=>{
    var p = document.getElementById("parent")
    p.style.backgroundColor = "yellow"
    console.log("parent clicked");
    console.log("event phase" + element.eventPhase)
    element.stopPropagation()

    
})

var c = document.getElementById("child")
c.addEventListener("click",(element)=>{
    var c = document.getElementById("child")
    c.style.backgroundColor = "blue"
    console.log("child clicked");
    console.log("event phase" + element.eventPhase)
    element.stopPropagation()
})

var cheak = document.getElementById("cheak")
cheak.addEventListener("click" , (element)=>
{
   element.preventDefault()
   var result = document.getElementById("result")
   result.textContent = "cheakbox prevented"
   element.stopPropagation()
})