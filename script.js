
console.log("javascript connected");

const quotes = [
    "look at hard work as a gift not a burden.",
"Don't let yesterday take up too much of today.",
"If you are working on something that you really care about, you don't have to be pushed.",
"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
"You are soooooooo awsome",
"Dont let other people tell you your worth",
]

function motivate() {
    let numberQuotes = quotes.length;
    let randomDecimal = Math.random();
    let randomNumberwithDecimal = randomDecimal * numberQuotes
    let randomInterger = Math.floor(randomNumberwithDecimal);
    document.getElementById("displayText").innerHTML = quotes[randomInterger];
}

// let numberQuotes = quotes.length;

// let randomDecimal = Math.random();

// let randomNumberwithDecimal = randomDecimal * numberQuotes;

// let randomInterger = Math.floor(randomNumberwithDecimal);


// console.log(quotes[1]);

// document.getElementById("displayText").innerHTML = quotes[1];


// console.log(Math.floor(Math.random() * quotes.length));

