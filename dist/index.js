
function fetchQuote() {
	fetch("https://favqs.com/api/qotd")
	.then((response) => response.json())
	.then((data) => (
		(document.getElementById("quote").innerHTML = data.quote.body),
		(document.getElementById("author").innerHTML = data.quote.author)
		)
	);
}
