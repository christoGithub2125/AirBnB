var park_btn = document.getElementById("park_btn")
park_btn.addEventListener("click",()=>{
    var cname = document.getElementById("c_name").value
    var c_bike = document.getElementById("c_bike").value
    var c_in = document.getElementById("c_in").value
    var c_out = document.getElementById("c_out").value

    //var r_1 = document.getElementById("r_1").value

    
var tab = document.createElement("table")
document.body.append(tab) 

tab.style.border = "1px solid black"

tab.style.borderCollapse ="collapse"


var thead = document.createElement("thead")

tab.appendChild(thead)

//thead.style.border = "1px solid black"

var trow = document.createElement("tr")

thead.appendChild(trow)

//trow.style.border = "1px solid black"

var th1 = document.createElement("th")

trow.appendChild(th1)

th1.textContent = "S.no"

th1.style.border ="1px solid black"



var th2 =  document.createElement("th")

trow.appendChild(th2)

th2.textContent = "C.Name"


th2.style.border ="1px solid black"

var th3 =  document.createElement("th")

trow.appendChild(th3)

th3.textContent = "C.BikeNo"


th3.style.border ="1px solid black"

var th4 =  document.createElement("th")

trow.appendChild(th4)

th4.textContent = "CheckIn"


th4.style.border ="1px solid black"

var th5 =  document.createElement("th")

trow.appendChild(th5)

th5.textContent = "C.BikeNo"


th5.style.border ="1px solid black"



//body

var tb = document.createElement("tbody")

tab.appendChild(tb)

var tbr1 = document.createElement("tr")
tb.appendChild(tbr1)

var tdata1 = document.createElement("td")
tbr1.appendChild(tdata1)

tdata1.textContent = "1"


tdata1.style.border ="1px solid black"

var tdata2 = document.createElement("td")
tbr1.appendChild(tdata2)

tdata2.textContent = `${cname}`

tdata2.style.border ="1px solid black"

var tdata3 = document.createElement("td")
tbr1.appendChild(tdata3)

tdata3.textContent = `${c_bike}`

tdata3.style.border ="1px solid black"

var tdata4 = document.createElement("td")
tbr1.appendChild(tdata4)

tdata4.textContent = `${c_in}`

tdata4.style.border ="1px solid black"

var tdata5 = document.createElement("td")
tbr1.appendChild(tdata5)

tdata5.textContent = `${c_out}`

tdata5.style.border ="1px solid black"








var result = document.getElementById("result")

result.textContent=`${tab}`

    // var r_2 = document.getElementById("r_2")
    //      r_2.textContent=` ${cname}`

    //      var r_3 = document.getElementById("r_3")
    //      r_3.textContent=` ${c_bike}`

    //      var r_4 = document.getElementById("r_4")
    //      r_4.textContent=` ${c_in}`

    //      var r_5 = document.getElementById("r_5")
    //      r_5.textContent=` ${c_out}`
     console.log(cname)
    



})