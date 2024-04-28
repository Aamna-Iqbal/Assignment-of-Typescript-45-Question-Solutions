//Creating a Array
let userNames=["Ayesha", "Fatima", "Admin", "Maham", "Tooba"]
//Using ForEach Loop on Array
userNames.forEach(loginUser=>{
if (loginUser==="Admin") 
console.log(`Hello ${loginUser}, would you like to see a status report?`)
else{
console.log(`Hello ${loginUser}, thank you for logging in again.`)
}
})