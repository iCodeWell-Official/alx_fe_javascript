const newQuoteBtn = document.getElementById('newQuote');
const quoteDisplay = document.getElementById('quoteDisplay');

newQuoteBtn.addEventListener('click', () => {
    const para = document.createElement('p');
    quoteDisplay.appendChild(para);
})