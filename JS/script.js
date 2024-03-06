// mettere bottone calcola in ascolto per evento al click
const calcButton = document.querySelector(`#calc-button`);
calcButton.addEventListener(`click`, function() {
    // al click:
    // 1. si trasformano i valori in variabili
        // dati numerici convertiti da stringa a numero
        const userKm = parseInt(document.querySelector('#input-km').value);
        const userAge = parseInt(document.querySelector(`#input-age`).value);
        console.log(userKm)
        console.log(userAge)
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
            userMessage = `Km da percorrere: ${userKm}Km. Prezzo standard per la tratta: ${roundRidePrice}€. Sconto minorenni del 20% applicato. Il prezzo effettivo del suo biglietto è: ${totalUnderPrice.toFixed(2)}€`
        } else if(userAge >=65){
            overDiscount = (ridePrice * 40) / 100;
            totalOverPrice = ridePrice - overDiscount;
            userMessage = `Km da percorrere: ${userKm}Km. Prezzo standard per la tratta: ${roundRidePrice}€. Sconto Over65 del 40% applicato. Il prezzo effettivo del suo biglietto è: ${totalOverPrice.toFixed(2)}€`
        } else{
            userMessage = `Km da percorrere: ${userKm}Km Il prezzo del suo biglietto è: ${roundRidePrice}€`
        }

        console.log(userMessage)
     // 3. viene stampato a div #user-message il messaggio per l utente con prezzo e sconto applicato
     const messageDiv = document.querySelector(`#user-message`) 
     messageDiv.innerHTML = userMessage   
})
    
            
        
       

        
// mettere bottone svuota campi in ascolto per evento al click
    // al click:
        // 1. si cambia valore degli imput in spazio vuoto selezionando il contenuto
        // 2. si cambia il valore del div con spazio vuoto