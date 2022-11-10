// Faire le lien entre un produit de la page d’accueil et la page Produit //

var getUrl = window.location.href
console.log(getUrl)
var url = new URL(getUrl)
console.log(url)
var urlId = url.searchParams.get("id")
console.log(urlId)



