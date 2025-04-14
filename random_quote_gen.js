// TODO: Array of objects [{quotes, authors}]
quotes =[["You miss 100% of the shots you don't take.","- Wayne Gretzky"],
["You can't use up creativity. The more you use, the more you have.","- Maya Angelou"],["I wanna be the very best.","- Ash Ketchum"],
["No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn't trying.", "- Tony Robbins"],
["If you run into a wall, don't turn around and give up. Figure out how to climb it.","- Michael Jordan"]]

// TODO: Function to pick a random Number
function randomNumber(){
    randoNum = Math.floor(Math.random() * quotes.length)
    return randoNum
    }; 

// TODO: Function to display the quote and authors
function displayQuote(){
    quoteFinder = randomNumber();
    quote= 0;
    author = 1;
    console.log(quotes[quoteFinder][quote] +" "+ quotes[quoteFinder][author]);
}

displayQuote();