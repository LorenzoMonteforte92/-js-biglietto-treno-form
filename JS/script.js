// mettere bottone calcola in ascolto per evento al click
const calcButton = document.querySelector(`#calc-button`);
calcButton.addEventListener(`click`, function() {
    // al click:
        // 1. si trasformano i valori in variabili
        const userKm = parseInt(document.querySelector('#input-km').value);
        const userAge = parseInt(document.querySelector(`#input-age`).value);
        console.log(userKm)
        console.log(userAge)
        
})
    
            // dati numerici convertiti da stringa a numero
        // 2. vengono calcolati i costi del viaggio e applicati sconti
        // 3. viene stampato a div #user-message il messaggio per l utente con prezzo e sconto applicato

        
// mettere bottone svuota campi in ascolto per evento al click
    // al click:
        // 1. si cambia valore degli imput in spazio vuoto selezionando il contenuto
        // 2. si cambia il valore del div con spazio vuoto