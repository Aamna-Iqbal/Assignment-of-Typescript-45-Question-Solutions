//Creating a Array
var userNames = ["Ayesha", "Fatima", "Admin", "Maham", "Tooba"];
//Using ForEach Loop on Array
userNames.forEach(function (loginUser) {
    if (loginUser === "Admin")
        console.log("Hello ".concat(loginUser, ", would you like to see a status report?"));
    else {
        console.log("Hello ".concat(loginUser, ", thank you for logging in again."));
    }
});
