// var array = [ "family1" , "family2" , "family3"]
// console.log(array[0])

// let bag1 = ["java"]
// let bag2 = ["java", "sql", "webTech"]
// console.log(bag1)
// console.log(bag2)

// let object = {

//     webTech : 2,
//     java : 1,
//     sql : 2,
    
// }
// console.log(object.webTech)


// console.log(bag.length)

// for(i=0; i < bag.length ; i++)
// {
//     console.log(bag[i])
//     console.log (bag[bag.length-1])

// }
// let bag = ["java", "sql", "webTech"]
// for(let y in bag){
// console.log(y + ":index value , element : " +bag[y])
// }




// let arr = [
//    "smith",
//    true,
//    99,
//    99n,
//    function() {
//     console.log("am inside array")
//    },
//    null,
//    {ename: "smith",
// }
// ];

// let temp = 0
// for (y in arr)
//     if( typeof y == "Boolean"){
//         temp++
        
//     }
//     else{
//         console.log("none")
//     }
//     console.log("booliean type array present inside ="+temp )


// function add (a,b,...a1){
//     console.log(a1);
// }
// add(10,2,-4,2,-5)

var subjects = ["subjects","sql","webtech","java"]
function table(a,...a1){
    console.log(a1)
}
table("subjects","sql","webtech","java")