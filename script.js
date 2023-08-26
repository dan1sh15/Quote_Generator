const wrapper = document.getElementById('wrapper');
const text = document.getElementById('text');
const quoteBox = document.getElementById('quote-box');
const author = document.getElementById('author');
const quote = document.getElementById('quote');
const btn = document.querySelector('.btn');
const quoteIcon = document.querySelector('.quote-icon');
const tweet = document.querySelector('.tweet-icon');
const body = document.body;
let news = [
    {
      "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas Edison",
      "color": "rgb(52, 34, 36)"
    },
    {
      "text": "You can observe a lot just by watching.",
      "author": "Yogi Berra",
      "color": "rgb(44, 62, 80)"
    },
    {
      "text": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln",
      "color": "rgb(22, 160, 133)"
    },
    {
      "text": "Difficulties increase the nearer we get to the goal.",
      "author": "Johann Wolfgang von Goethe",
      "color": "rgb(251, 105, 100)"
    },
    {
      "text": "Fate is in your hands and no one elses",
      "author": "Byron Pulsifer",
      "color": "rgb(119, 177, 169)"
    },
    {
      "text": "Be the chief but never the lord.",
      "author": "Lao Tzu",
      "color": "rgb(71, 46, 50)"
    },
    {
      "text": "Nothing happens unless first we dream.",
      "author": "Carl Sandburg",
      "color": "rgb(189, 187, 153)"
    },
    {
      "text": "Well begun is half done.",
      "author": "Aristotle",
      "color": "rgb(39, 174, 96)"
    },
    {
      "text": "Life is a learning experience, only if you learn.",
      "author": "Yogi Berra",
      "color": "rgb(119, 177, 169)"
    },
    {
      "text": "Self-complacency is fatal to progress.",
      "author": "Margaret Sangster",
      "color": "rgb(44, 62, 80)"
    },
    {
      "text": "Peace comes from within. Do not seek it without.",
      "author": "Buddha",
      "color": "rgb(119, 177, 169)"
    },
    {
      "text": "What you give is what you get.",
      "author": "Byron Pulsifer",
      "color": "rgb(231, 76, 60)"
    },
    {
      "text": "We can only learn to love by loving.",
      "author": "Iris Murdoch",
      "color": "rgb(251, 105, 100)"
    },
    {
      "text": "Life is change. Growth is optional. Choose wisely.",
      "author": "Karen Clark",
      "color": "rgb(119, 177, 169)"
    },
    {
      "text": "You'll see it when you believe it.",
      "author": "Wayne Dyer",
      "color": "rgb(39, 174, 96)"
    },
    {
      "text": "Today is the tomorrow we worried about yesterday.",
      "author": "type.fit",
      "color": "rgb(155, 89, 182)"
    }
  ]

function getRandomIndex(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}

btn.addEventListener('click', () => {
    let randomIdx = getRandomIndex(news);
    quote.innerHTML = news[randomIdx].text;
    author.innerHTML = "-by " + news[randomIdx].author;
    wrapper.style.backgroundColor = news[randomIdx].color;
    text.style.color = news[randomIdx].color;
    author.style.color = news[randomIdx].color;
    btn.style.backgroundColor = news[randomIdx].color;
    tweet.style.backgroundColor = news[randomIdx].color;
    quoteIcon.style.color = news[randomIdx].color;
    wrapper.style.transition = "all 1s ease-in-out";
    quoteBox.style.transition = "all 0.5s ease-in-out";
})