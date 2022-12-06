//Afficher le numéro de la commande
var getUrl = window.location.href
console.log(getUrl)
var url = new URL(getUrl)
var urlId = url.searchParams.get("orderId")
console.log(urlId) 

let orderId = document.querySelector("#orderId")
console.log(orderId)
orderId.innerHTML = urlId;

