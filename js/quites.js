const quotes = [
{
    quote:"배움이 없는 자유는 언제나 위험하며 자유가 없는 배움은 언제나 헛된 일입니다.",
    author:"존 F. 케네디(John F. Kennedy)",
},
{
    quote:"인생이란 네가 다른 계획을 세우느라 바쁠 때 너에게 일어나는 것이다.",
    author:"존 레논 (John Lennon)",
} ,
{
    quote:"미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
    author:"알랜 케이 (Alan Kay)",
},
{
    quote:"나약한 태도는 성격도 나약하게 만든다.",
    author:"알버튼 아인슈타인(Albert Einstein)",
},
{
    quote:"인생에서 가장 의미없이 보낸 날은 웃지 않고 보낸 날이다.",
    author:"E. E. 커밍스 (E. E. Cummings)",
},
{
    quote:"가장 현명한 사람은 자신만의 방향을 따른다.",
    author:"에우리피데스 (Euripides)",
},
{
    quote:"자신의 능력을 믿어야 한다. 그리고 끝까지 굳세게 밀고 나가라.",
    author:"로잘린 카터 (Rosalynn Carter)",
},
{
    quote:"다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.",
    author:"커트 코베인 (Kurt Cobain)",
},
{
    quote:"할 수 있는 일을 해낸다면, 우리 자신이 가장 놀라게 될 것이다.",
    author:"토마스 A. 에디슨 (Thomas A. Edison)",
},
{
    quote:"성공이 그렇게 달콤한 것은 결코 성공하지 못한 사람들이 있기 때문이다.",
    author:"에밀리 디킨스 (Emily Dickinson)",
}
];

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");

    todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

   
        quote.innerText= todaysQuote.quote;
        author.innerText= todaysQuote.author;


    