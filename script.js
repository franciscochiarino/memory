 // Variables
 flipCardInner = document.getElementById('flip-card-inner');
 degCounter = 0;

 // Make the card turn after click
 const cardTurner = () => {
     degCounter += 180;
     flipCardInner.style.transform = `rotateY(${degCounter}deg)`;
     console.log(degCounter);
     console.log(flipCardInner);
 }

 // Event listener
 flipCardInner.addEventListener('click', cardTurner);
