var UserName = prompt("Enater Your Name");
var UserGender = prompt("male or female?").toLowerCase();
var UserAge = prompt("How old are you?");


function checkAge(UserAge) {
    while (UserAge <= 0) {
        if (UserAge <= 0) {
            alert("Valid Age, Enater Again");
            UserAge = prompt("How old are you?");
        } 
    } 
    return UserAge
}

UserAge = checkAge(UserAge)



var question = confirm("Do you want to view the greeting message customized for you?");



function userTitle(UserGender) {
    if (UserGender == "male") {
        var title = "Mr.";
    } else if (UserGender == "female") {
        var title = "Ms.";
    } else {
        var title = null;
    }
    return title;
}


if (question == true && (userTitle(UserGender) !== null)) {
    alert("welcome :)" + userTitle(UserGender) + UserName + ".");
} else if(question == true && (userTitle(UserGender) == null)) {
    alert("welcome :)" + UserName + ".");
}



var question2 = prompt("Is javaScript beautiful Language? (answer by Yes or No)");
var question1 = prompt("Do you love to code? (answer by Yes or No)");
var question3 = prompt("Can artificial intelligence really help us? (answer by Yes or No)");

var arr = [question1, question2, question3];


if (arr[i].length == 0) {
    console.log("invalid");
} else {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}