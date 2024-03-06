// mettere bottone calcola in ascolto per evento al click
const calcButton = document.querySelector(`#calc-button`);
calcButton.addEventListener(`click`, function() {
    // al click:
    // 1. si trasformano i valori in variabili
        // dati numerici convertiti da stringa a numero
        const userName = document.querySelector('#input-name').value;
        const userKm = parseInt(document.querySelector('#input-km').value);
        const userAge = parseInt(document.querySelector(`#input-age`).value);
    
    // 2. vengono calcolati i costi del viaggio e applicati sconti
        // prezzo della tratta per km
        const kmPrice = 0.21
        const ridePrice = userKm * kmPrice
        const roundRidePrice = ridePrice.toFixed(2)

        // sconto under e over
        let totalUnderPrice;
        let totalOverPrice;
        let userMessage
        
        if(userAge < 18){
            underDiscount = (ridePrice * 20) / 100;
            totalUnderPrice = ridePrice - underDiscount;
            userMessage = `Salve ${userName}, deve percorrere: ${userKm}Km. Il prezzo standard per la tratta è: ${roundRidePrice}€. Le verrà applicatoSconto uno sconto minorenni del 20% . Il prezzo effettivo del suo biglietto è: ${totalUnderPrice.toFixed(2)}€`
        } else if(userAge >=65){
            overDiscount = (ridePrice * 40) / 100;
            totalOverPrice = ridePrice - overDiscount;
            userMessage = `Salve ${userName}, deve percorrere: ${userKm}Km. il prezzo standard per la tratta è: ${roundRidePrice}€. Le verrà applicato uno sconto Over65 del 40%. Il prezzo effettivo del suo biglietto è: ${totalOverPrice.toFixed(2)}€`
        } else{
            userMessage = `Salve ${userName}, deve percorrere: ${userKm}Km Il prezzo del suo biglietto è: ${roundRidePrice}€`
        }

     // 3. viene stampato a div #user-message il messaggio per l utente con prezzo e sconto applicato
     const messageDiv = document.querySelector(`#user-message`) 
     messageDiv.innerHTML = userMessage   
})
            
// mettere bottone svuota campi in ascolto per evento al click
const eraseButton = document.querySelector(`#erase-button`);
eraseButton.addEventListener(`click`, function(){
    // al click:
    // 1. si cambia valore degli imput in spazio vuoto selezionando il contenuto
    const userName = document.querySelector('#input-name').value = '';
    const userKm = document.querySelector('#input-km').value = '';
    const userAge = document.querySelector(`#input-age`).value = '';

    // 2. si cambia il valore del div con spazio vuoto
    const messageDiv = document.querySelector(`#user-message`) 
    messageDiv.innerHTML = ''  
})
    