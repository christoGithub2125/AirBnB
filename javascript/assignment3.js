console.log("start")



function operation (addition,multiplication,divition){
var op =  prompt("choose from +, * , /")
if(op == "+"){
    function addition (a,b)
    {
        console.log(a+b);
    }
    addition( Number(prompt("enter the first number ")) , Number(prompt("enter the second number")) )
}
else if(op == "*")
{
    function multiplication (a,b)
{
    console.log(a*b);
}
multiplication( prompt("enter the first number ") , prompt("enter the second number") )
}
else if(op == "/"){
    function divition (a,b)
{
    console.log(a/b);
}
divition( prompt("enter the first number ") , prompt("enter the second number") )
}
else {
    alert("enter the correct operator");
}
}

operation ("+","*","/")


console.log("stop")





