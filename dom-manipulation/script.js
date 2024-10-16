const newQuoteBtn = document.getElementById('newQuote');
const quoteDisplay = document.getElementById('quoteDisplay');

newQuoteBtn.addEventListener('click', () => {
   

    const quotesArray = [
        {text: "text", category: "category"},
        {text: "text", category: "category"},
        {text: "text", category: "category"},
        {text: "text", category: "category"}
      ];
    
      
    function showRandomQuote() {
        const para = document.createElement('p');
        quoteDisplay.appendChild(para);
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        const randomQuote = quotesArray[randomIndex];
        para.innerHTML = `Quote: ${randomQuote.text} Category: ${randomQuote.category}`;
    }

    function createAddQuoteForm() {
        const form = document.createElement('div');
        quoteDisplay.appendChild(form);
    }

    showRandomQuote();
    createAddQuoteForm();

})
