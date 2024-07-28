const accountId = 133444;  // const can not be changed 

let accountEmail = "jk066726@gmail.com"

var accountPassword = "12345"
 let accountState;


/*
    prefer not to use var beacuse of an issue  in block and functional scope
*/

accountCity = "jaipur"

//accountId = 2;  // Error: Cannot assign a new value to a constant

console.log(accountId)

accountEmail = "john.doe@example.com";



accountPassword = "password123";
 
accountCity = "delhi";

console.table([accountId, accountEmail, accountPassword,  accountState, accountCity])