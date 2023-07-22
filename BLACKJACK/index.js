let cards = []
let Sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageElement = document.getElementById("message-el")
let sumElement = document.getElementById("sum-el")
let cardsElement = document.getElementById("cards-el")
let playerElement = document.getElementById("player-el")
let player = {
    name: "Per",
    chips: 200,
}

playerElement.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    Sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsElement.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsElement.textContent += cards[i] + " "
    }
    
    sumElement.textContent = "Sum: " + Sum
    if (Sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (Sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageElement.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        Sum += card
        cards.push(card)
        renderGame()        
    }
}

// Objects - store data in-depth - composite / complex data type
// key-value pairs

 // Only allow the player to get a new card if she IS alive and does NOT have Blackjack

 // if 1     -> return 11
// if 11-13 -> return 10

//let sumElement = document.querySelector("body")