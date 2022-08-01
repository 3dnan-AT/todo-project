var UserName = prompt("Enater Your Name");
var UserGender = prompt("Are you a male or female?").toLowerCase();
var UserAge = prompt("How old are you? (Ex: 25)");


function checkAge(UserAge) {
    while (UserAge <= 0) {
        if (UserAge <= 0) {
            alert("Kindly enter a valid age!");
            UserAge = prompt("How old are you? (Ex: 25)");
        } else {
            break
        }
    } 
    return UserAge
}

UserAge = checkAge(UserAge)



var viewGreeting = confirm("Do you want to view the greeting message customized for you?");



function userInitials(UserGender) {
    if (UserGender == "male") {
        var initialz = "Mr.";
    } else if (UserGender == "female") {
        var initialz = "Ms.";
    } else {
        var initialz = null;
    }
    return initialz;
}


if (viewGreeting == true && (userInitials(UserGender) !== null)) {
    alert("Hello and welcome onboard " + userInitials(UserGender) + UserName + ".");
} else if(viewGreeting == true && (userInitials(UserGender) == null)) {
    alert("Hello and welcome onboard " + formatName(UserName) + ".");
}



var question2 = prompt("Is javaScript beautiful Language? (answer by Yes or No)");
var question1 = prompt("Do you love to code? (answer by Yes or No)");
var question3 = prompt(" Can artificial intelligence really help us? (answer by Yes or No)");

var answerArr = [question1, question2, question3];

for (var i = 0; i < answerArr.length; i++){
    if (answerArr[i].length == 0){
        answerArr[i] = "invalid";
    }
    console.log(answerArr[i]);
}