// var firstCard = firstNum
// var secondCard = secondNum
var cards = []
var sum = 0
var hasBlackJack = false
var isAlive = false
var message = ""
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")


let player = {
    name: "Ike",
    chips: 145,
  

}


var playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
console.log(cards)

function getRandomCard(){
    var returnRando = Math.floor(Math.random() * 13) + 1
    if (returnRando > 10){
        return 10
    }
    else if(returnRando === 1){
        return 11
    }
    else{
        return returnRando 
    }
}

function startGame(){
    isAlive = true
    var firstCard = getRandomCard()
    var secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if(sum <= 20){
        // console.log("Do you want to draw a new card?")
        message = "Do you want to draw a new card?"
        
    }
    else if (sum === 21){
        // console.log("wwohoo! You have got blackjack!")
        hasBlackJack = true
        message = "wwohoo! You have got blackjack!"
            }
    else{
        // console.log("you are out of the game")
        isAlive = false
        message =  "you are out of the game"
           
   
}
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards:  " 
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
    
}   


}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        console.log(cards)
        sum += card
        renderGame()
    }
    
 
 

}
 