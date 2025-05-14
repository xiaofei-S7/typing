const RandomAPIURL = "https://api.quotable.io"
const quoteDisplayElement = document.getElementById("quoteDisplay")
const quoteInputElement = document.getElementById('quoteInput')


function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data=> data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerText = quote
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
}