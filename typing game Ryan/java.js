const Random_API_URL = 'https://sentence.underthekey.com/language?language=eng&count=1'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')


quoteInputElement.addEventListener('input',() => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index] 
if (character == null){
    characterSpan.classList.remove('correct')
    characterSpan.classList.remove('inncorrect')
}
        if (character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false

        }
    })

    if (correct) renderNewQuote()
})

function getRandomQuote() {
    return fetch(Random_API_URL)
    .then(response => response.json())
    .then(data=> data[0].content)
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

