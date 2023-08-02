var submit = document.getElementById("submit")
submit.addEventListener("click" , ()=>{

   
        var table = document.createElement("table")
        document.body.append(table)
        table.style.border = "1px solid black"
        table.style.borderCollapse ="collapse"
        
        var thead = document.createElement("thead")
        table.appendChild(thead)
    
        var tr1 =  document.createElement("tr")
        thead.appendChild(tr1) 
    
        var th1 = document.createElement("th")
        tr1.appendChild(th1)
        th1.textContent = "s.no"

        var th2 = document.createElement("th")
        tr1.appendChild(th2)
        th2.textContent = "name"

        var th3 = document.createElement("th")
        tr1.appendChild(th3)
        th3.textContent = "bikeName"
        
        var th4 = document.createElement("th")
        tr1.appendChild(th4)
        th4.textContent = "cheakIn"

        var th5 = document.createElement("th")
        tr1.appendChild(th5)
        th5.textContent = "cheakOut"

        
        var tr1 =  document.createElement("tr")
        thead.appendChild(tr1) 
    
        var th1 = document.createElement("th")
        tr1.appendChild(th1)
        th1.textContent = "1"

        var th2 = document.createElement("th")
        tr1.appendChild(th2)
        th2.textContent = `${namee.value}`

        var th3 = document.createElement("th")
        tr1.appendChild(th3)
        th3.textContent = `${BikeName.value}`
        
        var th4 = document.createElement("th")
        tr1.appendChild(th4)
        th4.textContent = `${cheakIn.value}`

        var th5 = document.createElement("th")
        tr1.appendChild(th5)
        th5.textContent = `${cheakOut.value}`


      

  
})

var a = document.createElement("h1")
document.body.append(a)
a.textContent = "hello"


