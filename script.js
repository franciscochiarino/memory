// Variables
// Store the HTML collection in 'cards':
const cards = document.getElementsByClassName('flip-card-inner');
// Set up a counter to only let the player turn the cards twice:
let counter = 0;
// Let the script know which images are being turned (these variables are gonna carry the img's class):
let turnedCards = [];


// If both cards have the same class, then that means they have the same image. Here is how you know: <id>.attributes[0].textContent.split(' ')[1]; 

// Make the card turn after click
const cardTurner = (id) => {
    id.style.transform = `rotateY(180deg)`;
    // Push each card to turned cards array:
    turnedCards.push(id.attributes[0].textContent.split(' ')[1]);
}


// Apply click event listener for all cards:
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        let id = document.getElementById(`${cards[i].id}`)
        // Run functions:
        cardTurner(id);

    })
}

console.log(cards)

