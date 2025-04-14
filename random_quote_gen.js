// Random Quote Generator
//  What it does (Do not google this):
// Displays a random quote every time the user clicks a button.

// Quotes are stored in an array.

// You can spice it up by showing the author too.

//  What you’ll use (You can google this):
// Arrays (to store the quotes)

// Functions (to get a random quote)

// Strings (for the quotes)

// Numbers (to pick a random index)
// Extra credit if you can You can spice it up by showing the author too. I wont give you any hints here. How would you associate a quote to an author? 




console.log("Hello World X");

// TODO: Array of quotes and authors

quotes =[["You miss 100% of the shots you don't take. ","- Wayne Gretzky"],
["You can't use up creativity. The more you use, the more you have. ","- Maya Angelou"],["I wanna be the very best. ","- Ash Ketchum"],
["No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn't trying. ", "- Tony Robbins"],
["If you run into a wall, don't turn around and give up. Figure out how to climb it. ","- Michael Jordan"]]

//console.log(quotes.length);

//console.log(quotes[0][0]);

// TODO: Function to pick a random Number
function randomNumber(){
    randoNum = Math.floor(Math.random() * quotes.length)
    return randoNum
    }; 

//console.log(randomNumber());
// TODO: Function to display the quote and authors

function displayQuote(){
    quoteFinder = randomNumber();
    console.log(quotes[quoteFinder][0] + quotes[quoteFinder][1]);
}

displayQuote();