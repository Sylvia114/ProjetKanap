// Faire le lien entre un produit de la page d’accueil et la page Produit //

var getUrl = window.location.href
var url = new URL(getUrl)
var urlId = url.searchParams.get("id")
//console.log(urlId)

fetch("http://localhost:3000/api/products/"+urlId)
  .then(function(res) {
    if (res.ok) {
    return res.json()
    }
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

    const productPicture = document.querySelector(".item__img img")
    productPicture.setAttribute("src", data.imageUrl) 
    productPicture.setAttribute("alt", data.altTxt)

    const productPrice = document.getElementById("price");
    productPrice.innerHTML = data.price;

    const productColor = document.getElementById("colors");
    const colors = data.colors;
    for (let i = 0; i < colors.length; i++){
    const productContainer = document.createElement("option")
    productContainer.setAttribute("value", colors[i])
    productContainer.innerHTML = colors[i]
    productColor.appendChild(productContainer)
    };

}; 

// Ajouter des produits dans le panier
const basketButton = document.querySelector('#addToCart');
basketButton.addEventListener('click', function addCart() {

    let mykanap = {
      id : urlId,
      quantity : document.querySelector("#quantity").value,
      color : document.querySelector("#colors").value,
      name : document.getElementById("title").textContent,
      imageUrl : document.querySelector(".item__img img").getAttribute("src"),
      altTxt : document.querySelector(".item__img img").getAttribute("alt"),
    };

    let basketSaved = JSON.parse(localStorage.getItem('product'));

    if (mykanap.color != "" && mykanap.quantity > 0 && mykanap.quantity <= 100){

        if (basketSaved) {

            const idColorSaved = basketSaved.map((article) => article.id + article.color);
              
                let foundProductIndex = idColorSaved.findIndex(element => element == urlId + mykanap.color);

                if (foundProductIndex >= 0) {
                    let addquantity = parseInt(basketSaved[foundProductIndex].quantity)+ parseInt(mykanap.quantity);
                    basketSaved[foundProductIndex].quantity = JSON.stringify(addquantity);
                    localStorage.setItem('product', JSON.stringify(basketSaved));
                }
                else {
                    basketSaved.push(mykanap);
                    localStorage.setItem('product', JSON.stringify(basketSaved));
                }
        } 
        else {
            basketSaved = [];
            basketSaved.push(mykanap);
            localStorage.setItem('product',JSON.stringify(basketSaved));
        }
    }
    else {
        alert("Veuillez choisir une couleur et une quantité entre 0 et 100");
    }
})





  
