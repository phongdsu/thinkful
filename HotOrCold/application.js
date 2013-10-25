//Program generate a random number from 1 to 100
//Create a variable name randomNumber and put that number in
//prompt a user and ask for their input
//Do a comparison between the user number and program number
//program number minus user number if it is less than 10, prompt hot, else prompt cold.


$(document).ready(function(){
    var randomNumber = Math.random()*10;
    randomNumber = Math.round(randomNumber);
    
    $("button").click(function(){
        var userInput = prompt("Please input any number from 0 to 9","");
        if (randomNumber == userInput) {
        alert("you got it, thank you for playing");
        }
        else if (randomNumber - userInput == 1 || userInput - randomNumber == 1) {
        alert("hotter");
        }
        else if (randomNumber - userInput == 2 || userInput - randomNumber == 2) {
        alert("hot");
        }
        else if (userInput > 10 || isNaN(userInput)) {
        alert("please use number from 0 to 9 only");
        }
        else {
        alert("cold");    
        }
        
    
    });
});