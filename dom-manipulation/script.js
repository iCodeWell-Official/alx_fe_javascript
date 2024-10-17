// Grabbing the 'Show New Quote' button & display area
const newQuoteBtn = document.getElementById("newQuote");
const quoteDisplay = document.getElementById("quoteDisplay");

// Declaring quotes
const quotesArray = [
  { text: "text", category: "category" },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    category: "Motivation",
  },
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    category: "Love",
  },
  {
    text: "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.",
    category: "Courage",
  },
  {
    text: "The function of leadership is to produce more leaders, not more followers.",
    category: "Leadership",
  },
  {
    text: "A real friend is one who walks in when the rest of the world walks out.",
    category: "Friendship",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    category: "Success",
  },
  {
    text: "In the end, it’s not the years in your life that count, it’s the life in your years.",
    category: "Life",
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    category: "Wisdom",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    category: "Happiness",
  },
  {
    text: "It always seems impossible until it’s done.",
    category: "Perseverance",
  },
];

// Handling 'Show New Quote' button click
newQuoteBtn.addEventListener("click", () => {
  // declaring showRandomQuote function
  function showRandomQuote() {
    quoteDisplay.innerHTML = "";
    const para = document.createElement("p");
    quoteDisplay.appendChild(para);
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const randomQuote = quotesArray[randomIndex];
    para.innerHTML = `Quote: ${randomQuote.text} Category: ${randomQuote.category}`;
  }

  function createAddQuoteForm() {
    // create new div to contain the form inputs and button
    const form = document.createElement("div");

    // create input to add new quote, set class & ID and append it to the form div
    const quoteInput = document.createElement("input");
    quoteInput.id = "newQuoteText";
    quoteInput.type = "text";
    quoteInput.placeholder = "Enter a new quote";
    form.appendChild(quoteInput);

    // create input to add new category, set class & ID and append it to the form div
    const categoryInput = document.createElement("input");
    categoryInput.id = "newQuoteCategory";
    categoryInput.type = "text";
    categoryInput.placeholder = "Enter quote category";
    form.appendChild(categoryInput);

    // create add new quote button & append it to the form div
    const addQuoteBtn = document.createElement("button");
    addQuoteBtn.innerHTML = "Add Quote";
    form.appendChild(addQuoteBtn);

    // append the form div to the display area div
    quoteDisplay.appendChild(form);

    // add function to handle 'Add Quote' button click
    addQuoteBtn.addEventListener("click", () => {
        quotesArray.push({text: quoteInput.value, category: categoryInput.value});
        quoteInput.value = "";
        categoryInput.value = "";
    });
  }

  // Invoke the functions to show random quote & create add quote form
  showRandomQuote();
  createAddQuoteForm();
});
