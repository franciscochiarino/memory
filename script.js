 // Variables
 const cat = document.getElementById('cat');
 let card = document.getElementsByClassName('flip-card-inner');

 // If both cards have the same class, then that means they have the same image. Here is how you know: <id>.attributes[0].textContent.split(' ')[1]; 

 // Make the card turn after click
 const cardTurner = (id) => {
     id.style.transform = `rotateY(180deg)`;
     console.log(id)
    //  text = cat.attributes[0].textContent.split(' ')[1];
    }


 // Event listener
//  card.addEventListener('click', function() {
//      cardTurner(cat);
//     });

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
        let id = document.getElementById(`${card[i].id}`)
        cardTurner(id);
    })
}

