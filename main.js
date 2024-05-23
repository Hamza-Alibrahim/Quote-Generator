function fetchQuote() {
    fetch("https://api.quotable.io/random").then((res) => res.json()).then((resp) => {
        document.querySelector(".qoute").textContent = resp.content;
        document.querySelector(".author").textContent = resp.author;
    });
};
fetchQuote();
function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${document.querySelector(".qoute").textContent}---- by ${document.querySelector(".author").textContent}`, "tweet window", "width=600,height=300")
};