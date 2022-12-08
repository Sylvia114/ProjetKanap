// Faire le lien entre un produit de la page d’accueil et la page Produit //

var getUrl = window.location.href
var url = new URL(getUrl)
var urlId = url.searchParams.get("id")
console.log(urlId)

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

const button = document.querySelector ("#addToCart")
button.addEventListener("click", function(click) {

  let productOptions = {
    id : urlId,
    quantity : document.querySelector("#quantity").value,
    colors : document.querySelector("#colors").value,
    name : document.getElementById("title").textContent,
    imageUrl : document.querySelector(".item__img img").getAttribute("src"),
    altTxt : document.querySelector(".item__img img").getAttribute("alt"),
    //price : document.getElementById("price").textContent,
  };

let basket = JSON.parse(localStorage.getItem("product", productOptions));
  
  if (basket == null){
    let basket = [];
    basket.push(productOptions);
    localStorage.setItem("product", JSON.stringify(basket));

  } else {
    //console.log("je rentre dans mon else");

    let i=0;
    while (i < basket.length) {   

      if (basket[i].id != productOptions.id){
        console.log("1e if")
        basket.push(productOptions);
        localStorage.setItem("product", JSON.stringify(basket));
      } 
      else if (basket[i].id == productOptions.id && basket[i].colors != productOptions.colors){
        console.log("2e if")
        basket.push(productOptions);
        localStorage.setItem("product", JSON.stringify(basket));      
      }
      else if (basket[i].id == productOptions.id && basket[i].colors == productOptions.colors){            
        console.log("3e if")
        let totalQuantity =  ""
        totalQuantity = parseInt(basket[i].quantity) + parseInt(productOptions.quantity)
        basket[i].quantity = totalQuantity
        localStorage.setItem("product", JSON.stringify(basket));
          //location.reload()                
      }   

      i++;} 
    
    
  } 
  
  });

  // ATTENTION: Attention à ne pas stocker le prix des articles en local. 
  //Les données stockées en local ne
//sont pas sécurisées et l’utilisateur pourrait alors modifier le prix lui-même.

  
