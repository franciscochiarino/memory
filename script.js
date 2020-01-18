// Variables
// Store the HTML collection in 'cards':
const cards = document.getElementsByClassName('flip-card-inner');
// Let the script know which images are being turned (these variables are gonna carry the img's id):
let turnedCards = [];


// If both cards have the same class, then that means they have the same image. Here is how you know: <id>.attributes[0].textContent.split(' ')[1]; 

// Make the card turn after click
const cardTurner = (id) => {
    id.style.transform = `rotateY(180deg)`;
    // Push each card to turned cards array:
    turnedCards.push(id);
    // turnedCards.push(id.attributes[0].textContent.split(' ')[1]);
}

const checkMatchingPairs = () => {
    // Store each card's class into variables:
    let cardClass1 = turnedCards[0].attributes[0].textContent.split(' ')[1];
    let cardClass2 = turnedCards[1].attributes[0].textContent.split(' ')[1];
    // Compare them:
    if (cardClass1 === cardClass2) {
        return true;
    } else {
        return false;
    }
}

const turnCardsBack = () => {
    console.log('Hi there');
    
}

// Apply click event listener for all cards:
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        let id = document.getElementById(`${cards[i].id}`)

        // Turn card:
        cardTurner(id);

        // If two cards are turned, compare them:
        if (turnedCards.length === 2) {

            // If checkMatchingPairs returns true, then the cards are goint to keep facing up.
            checkMatchingPairs();

            // If its false, then the cards are going to turn back after 2 seconds:
            if (checkMatchingPairs() === false) {
                setTimeout(() => {
                    console.log("World!"); 
                    turnCardsBack();
                }, 2000);
            }
        }
        
    })
}


