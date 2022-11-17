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
        if(getFromLocal.id == urlId && getFromLocal.colors == productOptions.colors) {
          let localQuantity = getFromLocal.quantity
          localQuantity = parseInt(localQuantity) + parseInt(productOptions.quantity)
          console.log("ça marche"+ localQuantity)
          //push la quantity seulement
        } else {
          let getFromLocal = [];
          getFromLocal.push(productOptions);
          localStorage.setItem("product", JSON.stringify(productOptions));
          console.log("ça marche aussi")
        }
      }
  
    }
  }
  });

  // TO DO pour l'event click:
  // -ajouter d'autres conditions (si rien n'est selectionné, si la quantité selectionnée est <0 et >100)
  // -chercher comment faire pour que le produit déjà présent dans le localstorage ne s'efface pas quand je clique sur l'event pour en ajouter un autre
  // -chercher comment ajouter la quantité au produit déjà présent dans le localstorage (push & changer la quantité)


