let basket = localStorage.getItem("product");

let productBasket = JSON.parse(basket);
for (let getBasket of productBasket){
        let getId = getBasket.id;
        let getData = getBasket;
};

fetch (`http://localhost:3000/api/products/${getId}`)
    .then(function(res){
        if (res.ok){
            return response.json();
        }
    })
    .then(function(data) { 
        products(data, getData)
    })

    .catch(function(err) {
        console.log("Erreur")
    });


function products(data, getData){

   let section = document.getElementById("cart__items")
        
//ajouter un if pour ne pas ajouter pls fois le même article (même id + même couleur),

    // 1e niveau Container article
    const article = document.createElement("article")
    section.appendChild(article)
    article.classList.add("cart__item")
    article.setAttribute("data-id", "{product-ID}")
    article.setAttribute("data-color", "{product-color}")

      // 2e niveau 1_Image
        const newDivImg = document.createElement('div')
        newDivImg.classList.add("cart__item__img")
        //console.log(newDivImg)

        const newImg = document.createElement('img')
        newDivImg.appendChild(newImg)
        newImg.setAttribute("src", data.imageUrl)
        newImg.setAttribute("alt", data.altTxt)
        //console.log(newImg)

        // 2e niveau 2_Container éléments contenus dans le panier
        const newDivItemContent = document.createElement('div')
        newDivItemContent.classList.add("cart__item__content")
        //console.log(newDivItemContent)

            // 3e niveau 1_Eléments contenus dans le panier - description
            const newDivItemDescription = document.createElement('div')
            newDivItemContent.appendChild(newDivItemDescription)
            newDivItemDescription.classList.add("cart__item__content__description")
            //console.log(newDivItemDescription)

            const newH2name = document.createElement('h2')
            newDivItemDescription.appendChild(newH2name)
            newH2name.innerHTML = data.name
            console.log(newH2name)

            const newPcolor = document.createElement('p')
            newDivItemDescription.appendChild(newPcolor)
            newPcolor.innerHTML = getData.colors
            //console.log(newPcolor)

            const newPprice = document.createElement('p')
            newDivItemDescription.appendChild(newPprice)
            newPprice.innerHTML = data.price
            //console.log(newPcolor)

            // 3e niveau 2_Eléments contenus dans le panier - settings
            const newDivItemSettings = document.createElement('div')
            newDivItemContent.appendChild(newDivItemSettings)
            newDivItemSettings.classList.add("cart__item__content__settings")
            //console.log(newDivItemSettings)

                // 4e niveau 1_Quantité
                const newDivItemQuantity = document.createElement('div')
                newDivItemSettings.appendChild(newDivItemQuantity)
                newDivItemQuantity.classList.add("cart__item__content__settings__quantity")
                newDivItemQuantity.innerHTML = getData.quantity

                const newPquantity = document.createElement('p')
                newDivItemQuantity.appendChild(newPquantity)
                newPquantity.innerHTML = getData.quantity
                //console.log(newPquantity)

                const newInput = document.createElement('input')
                newDivItemQuantity.appendChild(newInput)
                newInput.setAttribute("type", "number")
                newInput.classList.add("itemQuantity")
                newInput.setAttribute("name", "itemQuantity")
                newInput.setAttribute("min", "1")
                newInput.setAttribute("max", "100")
                newInput.setAttribute("value", "42")

                // 4e niveau 2_Supprimer
                const newDivItemDelete = document.createElement('div')
                newDivItemSettings.appendChild(newDivItemDelete)
                newDivItemDelete.classList.add("cart__item__content__settings__delete")

                const newPdelete = document.createElement('p')
                newDivItemDelete.appendChild(newPdelete)
                newPdelete.classList.add("deleteItem")
                //newPdelete.innerHTML("supprimer")

        article.appendChild(newDivImg)
        article.appendChild(newDivItemContent)
        //console.log(article)
        console.log(section)

};

// TO DO: comment mettre les valeurs du le localstorage dans la boucle JS (tout ce qui est dans la boucle fonctionne, testée avec un autre tableau mais ce sont les valeurs du localstorage que je n'arrive pas à récupérer)

const buttonQuantity = document.querySelector(".itemQuantity")
buttonQuantity.addEventListener('change', function(){
    const quantity = document.querySelector(".itemQuantity").value
    console.log("ça marche"+ quantity)
    
});