//function add(num1,num2){
//    console.log(num1 + num2)
//}
//add(2,5)
function isLoggedIn(username){
    // if(username === undefined){
    //     console.log("plz enter a user name");
    //     return 
    // }
    //do same thing
    if(!username){
        console.log("plz enter a user name");
        return 
    }
    return `${username} just logged in`
}
console.log(isLoggedIn());