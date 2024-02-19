//console.log("Test"); 

//- Chiedo all'utente quanti chilometri percorrerá il passeggero
let km = prompt("Chilometri da percorrere");
console.log(Number(km)); //km da percorrere

//- Chiedo all'utente l'etá del passeggero
let age = prompt("Etá del passeggero");
console.log(Number(age)); //etá del passeggero

//- Calcolo il prezzo del biglietto
//prezzo al chilometro
const priceKm = 0.21;

//sconti per fascia di età
const minorsDiscount = 20;
const over65Discount = 40;

//calcolo prezzo biglietto intero con doppia cifra dopo la virgola
let ticketPrice = ((priceKm * km).toFixed(2));
console.log(ticketPrice); //prezzo biglietto

//calcolo i vari sconti applicabili
let ticketMinor = ((ticketPrice / 100) * minorsDiscount);
let ticketOver65 = ((ticketPrice / 100) * over65Discount);
console.log(ticketMinor, ticketOver65); //sconto da applicare al prezzzo base

//- Verifico se il cliente é over 65 o minorenne per applicare i vari sconti
if (age < 18) {
    console.log(Math.round(ticketPrice - ticketMinor)); //prezzo finale per minore
    document.getElementById("ticket-price").innerHTML = `${(ticketPrice - ticketMinor).toFixed(2)} €`;

} else if (age >= 65) {
    console.log(ticketPrice - ticketOver65); //prezzo finale per over 65
    document.getElementById("ticket-price").innerHTML = `${(ticketPrice - ticketOver65).toFixed(2)} €`;

} else {
    console.log(ticketPrice); // prezzo finale intero
    document.getElementById("ticket-price").innerHTML = `${ticketPrice} €`;
}