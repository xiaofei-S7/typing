const Random_API_URL = 'https://sentence.underthekey.com/random?count=1'
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

