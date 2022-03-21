const quotes = [
    {
        quote: "aaaaa",
        author: "a"
    },
    {
        quote: "bbbbb",
        author: "b"
    },
    {
        quote: "ccccc",
        author: "c"
    },
    {
        quote: "ddddd",
        author: "d"
    },
    {
        quote: "eeeee",
        author: "e"
    },
    {
        quote: "fffff",
        author: "f"
    },
    {
        quote: "ggggg",
        author: "g"
    },
    {
        quote: "hhhhh",
        author: "h"
    },
    {
        quote: "iiiii",
        author: "i"
    },
    {
        quote: "jjjjj",
        author: "j"
    }
]

const quote = document.querySelector("#quote span:first-child"); // id가 quote, span tag 첫 번째꺼
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;