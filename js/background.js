"use strict";

const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// console.log(bgImage); // <img>

bgImage.src = `img/${chosenImage}`;

// console.log(bgImage); // <img src="/img/x.jpeg">

// body에 추가
document.body.appendChild(bgImage);