
let cards = []// array - ordered list of items
let sum = 0
let isAlive = false
let blackjack = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let playerId = document.getElementById("player-id")
let player = {
    name: 'Hanna',
    tips: 250
}

playerId.textContent = player.name + ": $" + player.tips

function getRandomCard() {
    let result = Math.floor(Math.random() * 13) + 1 //1-13
    if (result == 1) {
        return 11
    }
    else if (result > 10) {
        return 10
    } else {
        return result
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if ((sum === 21)) {
        message = "Wohoo! You've got Blackjack!"
        blackjack = true

    } else {
        message = "You're out of the game!"
        isAlive = false

    }
    messageEl.textContent = message
}
function newCard() {
    if (blackjack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}

