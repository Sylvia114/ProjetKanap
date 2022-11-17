basket = JSON.parse(localStorage.getItem("product"))
//console.log(basket)


for (let i = 0; i < basket.length; i++) {

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
        newImg.setAttribute("src", basket[i].imageUrl)
        newImg.setAttribute("alt", basket[i].altTxt)
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
            newH2name.innerHTML = basket[i].name
            //console.log(newH2name)

            const newPcolor = document.createElement('p')
            newDivItemDescription.appendChild(newPcolor)
            newPcolor.innerHTML = basket[i].colors
            //console.log(newPcolor)

            const newPprice = document.createElement('p')
            newDivItemDescription.appendChild(newPprice)
            newPprice.innerHTML = basket[i].price
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
                newDivItemQuantity.innerHTML = basket[i].quantity

                const newPquantity = document.createElement('p')
                newDivItemQuantity.appendChild(newPquantity)
                newPquantity.innerHTML = basket[i].quantity
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

