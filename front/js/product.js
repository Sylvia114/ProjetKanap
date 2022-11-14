// Faire le lien entre un produit de la page d’accueil et la page Produit //

var getUrl = window.location.href
var url = new URL(getUrl)
var urlId = url.searchParams.get("id")
console.log(urlId)

fetch("http://localhost:3000/api/products/"+urlId)
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
    }

}; 


// Ajouter des produits dans le panier

const button = document.querySelector ("#addToCart")
button.addEventListener("click", function() {

let productOptions = {
  id : urlId,
  quantity : document.querySelector("#quantity").value,
  color : document.querySelector("#colors").value,
}

let basketLocal = JSON.parse(localStorage.getItem("product"))

if (basketLocal == null){
  let basketLocal = [];
  basketLocal.push(productOptions);
  localStorage.setItem("product", JSON.stringify(basketLocal));
  console.log(basketLocal)
} else {
  let i = 0;
    while (i < localStorage.length){
    i++;    {  
    if (productOptions.id==urlId && productOptions.color==colors.value){ //Corriger les conditions pour que ce soit currentId==localStorageId et non pas currentId==currentId
      let localQuantity = basketLocal.quantity;
      localQuantity = parseInt(localQuantity) + parseInt(quantity.value);
      localStorage.setItem("product", JSON.stringify(basketLocal)); //Chercher comment push la nouvelle valeur quantité dans le local storage
      console.log(localQuantity)
    } else {
        basketLocal.push(productOptions);
        localStorage.setItem("product", JSON.stringify(basketLocal));
    }
  }

  }
}
});