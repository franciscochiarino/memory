 // Variables
 flipCardInner = document.getElementById('flip-card-inner');
 // One way to get to the image
 flipCardBack = document.getElementsByClassName('flip-card-back');
 degCounter = 0;

 // Make the card turn after click
 const cardTurner = () => {
     degCounter += 180;
     flipCardInner.style.transform = `rotateY(${degCounter}deg)`;
     console.log(degCounter);
     console.log(flipCardBack[0].firstElementChild);
 }

 // Event listener
 flipCardInner.addEventListener('click', cardTurner);
