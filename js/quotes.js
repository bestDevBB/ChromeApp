"use strict";

const quotes = [
    {
        quote: "나는 바보가 된 기분입니다. 나는 기회를 놓쳤다 생각했는데, 우리는 이를 만회하기 위하여 더욱 열심히 일을 했습니다.",
        author: "스티브 잡스"
    },
    {
        quote: "인생은 스스로 알아서 하지 않으면 아무도 아무것도 가르쳐 주지 않는다.",
        author: "빌 게이츠"
    },
    {
        quote: "게으른 행동에 대해 하늘이 주는 벌은 두가지이다. 하나는 자신의 실패이고, 또 다른 하나는 내가 하지 않은 일을 해낸 옆사람의 성공이다.",
        author: "줄스 레나드"
    },
    {
        quote: "아침에 눈을 떠서 어제보다 나은 하루를 만들지 않으면 실패한 것이다.",
        author: "로버트 나델리"
    },
    {
        quote: "아무리 가까운 길이라도 가지 않으면 도달하지 못하고 아무리 쉬운 길이라도 하지 않으면 이루지 못한다.",
        author: "채근담"
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author: "파울로 코엘료"
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
        author: "앙드레 말로"
    },
    {
        quote: "절대로, 절대로, 절대로, 절대로, 포기하지 말라.",
        author: "윈스턴 처칠"
    },
    {
        quote: "누구나 마음 속에 생각의 보석을 지니고 있다. 다만, 캐내지 않아 잠들어 있을 뿐이다.",
        author: "이어령"
    },
    {
        quote: "사랑하는 것은 천국을 살짝 엿보든 것이다.",
        author: "카렌 선드"
    }
]

const quote = document.querySelector("#quote span:first-child"); // id가 quote, span tag 첫 번째꺼
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;