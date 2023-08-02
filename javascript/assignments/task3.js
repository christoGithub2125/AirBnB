var color = document.getElementById("color")
color.addEventListener("change", ()=>{
    let color = document.getElementById("color").value
    let body = document.getElementById("body")
    body.style.backgroundColor = `${color}`
})