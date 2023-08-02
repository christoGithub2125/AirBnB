function fun(){
var ename = prompt("enter your Ename")
var Elocation = prompt("enter your location")

var print = document.createElement("p")
document.body.append(print)
print.textContent = "ename: "+ename

var printt = document.createElement("p")
document.body.append(printt)
printt.textContent = "Elocation: "+Elocation +""



}

function list(){
    var ani1 = prompt("enter animal name1")
    var ani2 = prompt("enter animal name2")
    var ani3 = prompt("enter animal name3")

    var res1 = document.getElementById("ani1")
    res1.textContent =""+ ani1+""

    var res2 = document.getElementById("ani2")
    res2.textContent =""+ ani2+""

    var res3 = document.getElementById("ani3")
    res3.textContent = ""+ani3+""
}

function add(){

let num11 = parseInt(document.getElementById("num1").value)
let num22 = parseInt(document.getElementById("num2").value)
let addition = (num11 + num22)
console.log(addition)
}