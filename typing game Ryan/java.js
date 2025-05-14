const Random_API_URL = 'https://random-word-api.herokuapp.com/word?number=40'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')


function getRandomQuote() {
    return fetch(Random_API_URL)
    .then(response => response.json())
    .then(data=> data.join(''))
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerText = quote
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = ''
}

renderNewQuote()

