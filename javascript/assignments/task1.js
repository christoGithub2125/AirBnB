
function add(){
    var inp1 = parseInt(document.getElementById("inp1").value)
var inp2 = parseInt(document.getElementById("inp2").value)
var addR = inp1 + inp2;
document.getElementById("res").innerHTML = addR
}

function sub(){
    var inp1 = parseInt(document.getElementById("inp1").value)
var inp2 = parseInt(document.getElementById("inp2").value)
var addR = inp1 - inp2;
document.getElementById("res").innerHTML = addR
}
function div(){
    var inp1 = parseInt(document.getElementById("inp1").value)
var inp2 = parseInt(document.getElementById("inp2").value)
var addR = inp1 / inp2;
document.getElementById("res").innerHTML = addR
}
function multi(){
    var inp1 = parseInt(document.getElementById("inp1").value)
var inp2 = parseInt(document.getElementById("inp2").value)
var addR = inp1 * inp2
document.getElementById("res").innerHTML = addR
}

