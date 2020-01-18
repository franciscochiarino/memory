 // Variables
 const cat = document.getElementById('cat');
 degCounter = 0;

 // If both cards have the same class, then that means they have the same image. Here is how you know: <id>.attributes[0].textContent.split(' ')[1]; 

 // Make the card turn after click
 const cardTurner = (id) => {
     degCounter += 180;
     id.style.transform = `rotateY(${degCounter}deg)`;
    //  text = cat.attributes[0].textContent.split(' ')[1];
    console.log('dick')
    }


 // Event listener
 cat.addEventListener('click', function() {
     cardTurner(cat);
    });
