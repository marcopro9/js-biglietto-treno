// variables
var totalKm = parseInt( prompt("quanti km devi percorrere in totale?", ""));
var passengerAge = parseInt( prompt("quanti anni hai?"));
var regularPrice = (totalKm * 0.21);
var juniorPrice = regularPrice - ((regularPrice * 20) /100);
var seniorPrice = regularPrice - ((regularPrice * 40) /100);
var ticketPrice = regularPrice;

// conditions
if ( passengerAge > 64 ){
  ticketPrice = seniorPrice;
}
else if( passengerAge < 18 ){
  ticketPrice = juniorPrice;
}

// result in HTML
document.getElementById('price').innerHTML =
"il prezzo del biglietto è " + ticketPrice.toFixed(2) + " €";
