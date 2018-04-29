/*this will be the javascript of the psychic game */
// this was a long way to randomly pick a letter. Didnt actually test it...
// function compRanPick() {
//     var chars = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
//     var string_length = 8; 
//     var compRanPick = '';
//     for (var i=0; i < string_length; i++) {
//         var rnum = math.floor(math.random() * chars.length);
//         compRanPick += chars.substring(rnum, rnum + 1);
//     }
//     document.randform.randomfield.value = compRanPick;
// } 


// Basically, the userGuess function is what the user will be invoking or executing.  Once 
// the user chooses the letter it will run through the function
// compRanPick is declared and will also have a random letter picked. String.fromCharCode
// actually picks a letter from UTF-16 and then the math.floor selects an integer and math.random
// randomizes it.  Not sure of why *26 (possibly alphabet?) also not sure why + 97 is there.
// the if statement is straightforward. if the usersguess === compRanPick then the user
// wins otherwise you lose. For debugging purposes I used a return (also not sure if I should do that... 
// seemed appropriate.) I then called the function and input the user's choice -- in this
// case the user chose the letter n.
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses = 0;


document.onkeyup = function (event) {
    var userGuess = event.key;
    var compRanPick = letters[Math.floor(Math.random() * letters.length)];
    if (userGuess === compRanPick && turns < 5) {
        new Audio("assets/sounds/winner.mp3").play();
        wins++;
        
        alert("Great, you guess right!");
        
        console.log('You win!');
        console.log('my choice was ' + userGuess );
        console.log('Computer choice ' + compRanPick);
    } else if (userGuess !== compRanPick){
        new Audio("assets/sounds/loser.mp3").play();
        losses++;
        
        alert("Sorry you didnt pick the right letter.");
        console.log('You lose!');
        console.log('User choice was ' + userGuess );
        console.log('Computer choice ' + compRanPick);
        } 
        var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + compRanPick + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>";
        
        document.querySelector("#display").innerHTML = html;
    };
       
    
        
 


      
            
      
            
      
            
      
            
      
//// Be sure to test that your code works for this major task, before proceeding to the next one!
      
//// MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
//// =================================================================================
      
//// 12. Create an "on-click" event attached to the "#clear" button id.
//$("#clear").click(function() {
//    // $(this).slideUp(); this is a event test
//    $("#display").empty();
            
//  });
//// Inside the on-click event...
      
//// 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
      
//;
        

