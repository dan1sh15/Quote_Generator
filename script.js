const wrapper = document.getElementById('wrapper');
const text = document.getElementById('text');
const quoteBox = document.getElementById('quote-box');
const author = document.getElementById('author');
const quote = document.getElementById('quote');
const btn = document.querySelector('.btn');
const quoteIcon = document.querySelector('.quote-icon');
const tweet = document.querySelector('.tweet-icon');
const body = document.body;
let colorsArr = [
    {
      "color": "rgb(52, 34, 36)"
    },
    {
      "color": "rgb(44, 62, 80)"
    },
    {
      "color": "rgb(22, 160, 133)"
    },
    {
      "color": "rgb(251, 105, 100)"
    },
    {
      "color": "rgb(119, 177, 169)"
    },
    {
      "color": "rgb(71, 46, 50)"
    },
    {
      "color": "rgb(189, 187, 153)"
    },
    {
      "color": "rgb(39, 174, 96)"
    },
    {
      "color": "rgb(119, 177, 169)"
    },
    {
      "color": "rgb(44, 62, 80)"
    },
    {
      "color": "rgb(119, 177, 169)"
    },
    {
      "color": "rgb(231, 76, 60)"
    },
    {
      "color": "rgb(251, 105, 100)"
    },
    {
      "color": "rgb(119, 177, 169)"
    },
    {
      "color": "rgb(39, 174, 96)"
    },
    {
      "color": "rgb(155, 89, 182)"
    }
  ]


function getRandomIndex(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}


// function to fetch quote from the API
async function fetchQuote() {
  let response = await fetch(`https://api.quotable.io/quotes/random?maxLength=100`);
  let data = await response.json();
  // console.log(data);
  // console.log(data[0].content);
  // console.log(data[0].author);

  return data;
}

btn.addEventListener('click', async () => {

    let data = await fetchQuote();
    let newQuote = data[0].content;
    let newAuthor = data[0].author;

    let randomIdx = getRandomIndex(colorsArr);
    quote.innerHTML = newQuote;
    author.innerHTML = "-by " + newAuthor;
    wrapper.style.backgroundColor = colorsArr[randomIdx].color;
    text.style.color = colorsArr[randomIdx].color;
    author.style.color = colorsArr[randomIdx].color;
    btn.style.backgroundColor = colorsArr[randomIdx].color;
    tweet.style.backgroundColor = colorsArr[randomIdx].color;
    quoteIcon.style.color = colorsArr[randomIdx].color;
    wrapper.style.transition = "background-color 0.8s ease-in-out";
    quoteBox.style.transition = "color 0.5s ease-in-out";
});