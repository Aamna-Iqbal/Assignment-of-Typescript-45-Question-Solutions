var current_users = ['Aliza', 'Saba', 'Mehak', 'Fatima', 'Wania', 'Sara'];
var new_users = ['Maryam', 'Sara', 'Tooba', 'Mehak', 'Ayesha'];
//Loop through the new user list to see if each new username has already been used.;
new_users.forEach(function (newly_enroll_user) {
    //Condition For username already exists.
    var our_condition = current_users.some(function (currently_enroll_user) { return currently_enroll_user.toLowerCase() === newly_enroll_user.toLowerCase(); });
    //Print the fifferent message using If-Else statements
    if (our_condition) {
        console.log("Sorry, this Username ".concat(newly_enroll_user, " is already taken."));
    }
    else {
        console.log("This Username ".concat(newly_enroll_user, " is available."));
    }
});
