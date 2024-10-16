const newQuoteBtn = document.getElementById('newQuote');
const quoteDisplay = document.getElementById('quoteDisplay');

newQuoteBtn.addEventListener('click', () => {
    const para = document.createElement('p');
    quoteDisplay.appendChild(para);
})

const quotesArray = [
    {"text", "category"}
  ];

  
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const randomQuote = quotesArray[randomIndex];
}

function createAddQuoteForm() {
    const form = document.createElement('form');


}