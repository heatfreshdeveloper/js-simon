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
alert(numeriRandom());

const timer = setTimeout(() => {
    if(promptNumeri()) {
        isEqual()
    }
}, 3000);

// Sezione Functions del programma 

function numeriRandom() {
    for (var i = 0; i < 5; i++)
    {
      numbs.push(Math.floor(Math.random() * 20) + 1)
    }
    return numbs
}

function promptNumeri() {
    let numero1 = parseInt(prompt("Inserire uno dei numeri che hai visto prima!"));
    let numero2 = parseInt(prompt("Inserire uno dei numeri che hai visto prima!"));
    let numero3 = parseInt(prompt("Inserire uno dei numeri che hai visto prima!"));
    let numero4 = parseInt(prompt("Inserire uno dei numeri che hai visto prima!"));
    let numero5 = parseInt(prompt("Inserire uno dei numeri che hai visto prima!"));

    prompts.push(numero1, numero2, numero3, numero4, numero5);

    return prompts
}

function isEqual() {
    if(numbs.length!=prompts.length) {
        alert("Non sono stati inseriti tutti i numeri!");
    } else {
        for(let i=0;i<numbs.length;i++) {
            if(numbs[i]!=prompts[i]) {
                alert("Tutti i numeri corrispondono!")
            } else {
                alert("I numeri non corrispondono!")
            }
        }
    }
}