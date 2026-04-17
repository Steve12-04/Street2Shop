const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

// funciones click

btnIncrement.addEventListener('click', () =>{
    valueByDefault +=1

    inputQuantity.value = valueByDefault
});

btnDecrement.addEventListener('click', () =>{
    if(valueByDefault===1){
        return
    }
    valueByDefault -=1
    
    inputQuantity.value = valueByDefault
});

// toggle
//constantes toggle titles
const toggleDescription = document.querySelector('.title-description');
const toggleAdditionalInformation = document.querySelector('.title-additional-information');
const toggleReviews = document.querySelector('.title-reviews');



//constantes contenido texto
const contentDescription = document.querySelector('.text-description');
const contentAdditionalInformation = document.querySelector('.text-additional-information');
const contentReviews = document.querySelector('.text-reviews');


//funciones toggle
toggleDescription.addEventListener('click', () => {
   contentDescription.classList.toggle('hidden'); 
});
toggleAdditionalInformation.addEventListener('click', () => {
   contentAdditionalInformation.classList.toggle('hidden'); 
});
toggleReviews.addEventListener('click', () => {
   contentReviews.classList.toggle('hidden'); 
});