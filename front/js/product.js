// Faire le lien entre un produit de la page d’accueil et la page Produit //

var getUrl = window.location.href
var url = new URL(getUrl)
var urlId = url.searchParams.get("id")
console.log(urlId)

fetch("http://localhost:3000/api/products/" + urlId)
  .then(function (response) {
    return response.json();
  })

  .then(function(data) { 
    products(data)
})

    .catch(function(err) {
    console.log("Erreur")
});

function products(data){

    const productName = document.getElementById("title");
    productName.innerHTML = data.name;

    const productDescription = document.getElementById("description");
    productDescription.innerHTML = data.description;

    const productPicture = document.getElementsByClassName("item__img")
    let pictureAttribut = "";
    pictureAttribut = pictureAttribut +`<img src="${data.imageUrl}"alt ="${data.altTxt}"></img>`
    productPicture[0].innerHTML = pictureAttribut;

    const productPrice = document.getElementById("price");
    productPrice.innerHTML = data.price;


    const productColor = document.getElementById("colors");
    const colors = data.colors;
    let colorsContent = " ";
    colors.forEach(function(colors){
    colorsContent = colorsContent + `<option value="${colors}">${colors}</option>`})
    productColor.innerHTML = colorsContent
    //A corriger pour que le message "sélectionnez" ne s'efface pas
        
}; 


// Ajouter des produits dans le panier
  
 


