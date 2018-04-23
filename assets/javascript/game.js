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
function userGuess() {
    var compRanPick = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    if (userGuess === compRanPick) {
        console.log('You win!');
    } else {
        console.log('You lose!');
    }
    return this.compRanPick
};
userGuess('n');    

