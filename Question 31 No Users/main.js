var userNames = ["Ayesha", "Fatima", "Admin", "Maham", "Tooba"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your list is empty, We need to find some users!");
}
else {
    //Using ForEach Loop on Array
    userNames.forEach(function (loginUser) {
        if (loginUser === "Admin")
            console.log("Hello ".concat(loginUser, ", would you like to see a status report?"));
        else {
            console.log("Hello ".concat(loginUser, ", thank you for logging in again."));
        }
    });
}
