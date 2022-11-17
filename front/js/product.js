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
    };

}; 

// Ajouter des produits dans le panier

const button = document.querySelector ("#addToCart")
button.addEventListener("click", function(click) {
click.preventDefault();

  let productOptions = {
    id : urlId,
    quantity : document.querySelector("#quantity").value,
    colors : document.querySelector("#colors").value,
    name : document.getElementById("title").textContent,
    description : document.getElementById("description").textContent,
    imageUrl : document.querySelector(".item__img img").src,
    altTxt : document.querySelector(".item__img img").alt,
    price : document.querySelector(".item__content__titlePrice p span").textContent,
  };

  //stockInLocal = localStorage.setItem("product", JSON.stringify(productOptions))
  getFromLocal = JSON.parse(localStorage.getItem("product", productOptions))
  
  if (getFromLocal == null){
    let getFromLocal = [];
    getFromLocal.push(productOptions);
    localStorage.setItem("product", JSON.stringify(productOptions));
    console.log(getFromLocal)
  } else {
    let i = 0;
      while (i < localStorage.length){
      i++;   {
        if(getFromLocal.id == urlId) {
          let localQuantity = getFromLocal.quantity
          localQuantity = parseInt(localQuantity) + parseInt(productOptions.quantity)
          console.log("ça marche"+ localQuantity)
          //push la quantity seulement
        } else {
          console.log("ça marche pas vraiment")
        }
      }
  
    }
  }
  });


  //let from = getFromLocal.quantity la quantité dans le local
  //let inU = productOptions.quantity la quantité sur laquelle on a cliqué
  //console.log("ça marche"+from+"&"+inU)

  //let colIn = getFromLocal.colors couleur dans le local
  //let colCh = productOptions.colors couleur sur laquelle on clique
