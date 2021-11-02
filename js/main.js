/* 1 - Creiamo per prima cosa la funzione che crei numeri random dividendo lo script tra funzioni e codice vero e proprio 
   2 - Salviamo questa funzione all'interno di una variabile così da poterla assegnare ad un alert 
   3 - Assegnamo la variabile all'interno di un alert semplice
   4 - Al click dopo aver chiuso l'alert parte una funzione timer da 30 secondi 
   5 - Scaduto il timeOut comparirà un prompt che chiederà l'inserimento dei 5 numeri precedentemente visti 
   6 - L'utente inserisce i numeri e i valori vengono salvati all'interno delle variabili dei prompt e poi inseriti in un array 
   7 - Questi cinque valori devono essere comparati con i numeri randomici, il tutto avviene comparando l'array dei 5 numeri randomici
   8 - Mediante un alert vengono mostrati quali e quanti numeri sono stati indovinati. 
*/

let numbs = [];
let prompts = [];
let numbsToWin = [];

const numbsRandom = numeriRandom();
alert("Memorizza questi numeri entro 30 secondi" + numbsRandom);

setTimeout(promptNumeri, 3000);

// Sezione Functions del programma 

function numeriRandom() {
    let numbs = [];
    for (var i = 0; i < 5; i++)
    {
        const numbers = (Math.floor(Math.random() * 20) + 1)
        numbs.push(numbers)
    }
    return numeriRandom
}

function promptNumeri() {
    let prompts = [];
    let rightNumbs = [];
    for (let i = 0; i < 5; i++) {
        const promptUser = parseInt(prompt("Inserisci i numeri che hai memorizzato!"));
        prompts.push(promptUser)
    }
    prompts.forEach(numUser => {
        if(numbsRandom.includes(numUser)) {
            rightNumbs.push(numUser)
        }
    })

    alert(`Hai indovinato ${rightNumbs.length} numeri su 5!`)
}