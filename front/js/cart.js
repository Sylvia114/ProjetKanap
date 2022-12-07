let basket = JSON.parse(localStorage.getItem('product'));
//console.log("je suis ds le panier" +basket);

for (let i = 0; i < basket.length; i++) {

   let section = document.getElementById("cart__items")        

    // 1e niveau Container article
    const article = document.createElement("article")
    section.appendChild(article)
    article.classList.add("cart__item")
    article.setAttribute("data-id", basket[i].id)
    article.setAttribute("data-color", basket[i].colors)

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
            newPprice.innerHTML = basket[i].price+" €"
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

                const newPquantity = document.createElement('p')
                newDivItemQuantity.appendChild(newPquantity)
                newPquantity.innerHTML = "Qté : "
                //console.log(newPquantity)

                const newInput = document.createElement('input')
                newDivItemQuantity.appendChild(newInput)
                newInput.setAttribute("type", "number")
                newInput.classList.add("itemQuantity")
                newInput.setAttribute("name", "itemQuantity")
                newInput.setAttribute("min", "1")
                newInput.setAttribute("max", "100")
                newInput.setAttribute("value", basket[i].quantity)

                // 4e niveau 2_Supprimer
                const newDivItemDelete = document.createElement('div')
                newDivItemSettings.appendChild(newDivItemDelete)
                newDivItemDelete.classList.add("cart__item__content__settings__delete")

                const newPdelete = document.createElement('p')
                newDivItemDelete.appendChild(newPdelete)
                newPdelete.classList.add("deleteItem")
                newPdelete.innerHTML = ("Supprimer")

        article.appendChild(newDivImg)
        article.appendChild(newDivItemContent)
        //console.log(article)
        //console.log(section)
  
};


//Changer la quantité 
let buttonQuantity = document.querySelectorAll(".itemQuantity")

for (let i = 0; i < buttonQuantity.length; i++){
    buttonQuantity[i].addEventListener('change', function(){
        let quantitySelected = buttonQuantity[i].value
        //console.log("ça marche "+ quantitySelected);

        let cartArticle = buttonQuantity[i].closest('article')
        let dataId = cartArticle.dataset.id
        let dataColor = cartArticle.dataset.color

            for (let i = 0; i < basket.length; i++){

                    if (dataId == basket[i].id && dataColor == basket[i].colors){
                        console.log("je suis ds le if")
                        basket[i].quantity = quantitySelected
                        localStorage.setItem("product", JSON.stringify(basket))
                        location.reload()
                    }              
            }
            if (quantitySelected == 0){
                alert("Veuillez sélectionner une quantité supérieure à 0 ou utiliser le bouton supprimer pour supprimer le produit")
            }
       })
};

//Supprimer un produit
const buttonDelete = document.querySelectorAll(".deleteItem")

for (let i = 0; i < buttonDelete.length; i++){
    buttonDelete[i].addEventListener('click', function(){
        //console.log("j'ai appuyé sur supprimer")

        let cartArticle = buttonDelete[i].closest('article')
        let dataId = cartArticle.dataset.id
        let dataColor = cartArticle.dataset.color

        for (let i = 0; i < basket.length; i++){
            let index = basket.indexOf(basket[i])
            if (dataId == basket[i].id && dataColor == basket[i].colors){
                basket.splice(index, 1)
                cartArticle.remove()
                localStorage.setItem("product", JSON.stringify(basket))
            }
        }
        if (basket.length == 0 || basket == []){
            localStorage.clear()
        }
        location.reload()                           
    })
};


//Afficher la quantité totale
let sumQuantity = 0
for (let i = 0; i < basket.length; i++){
    let basketQuantity = parseInt(basket[i].quantity)
    sumQuantity += basketQuantity
    //console.log(sumQuantity)
    let displayQuantity = document.getElementById("totalQuantity")
    displayQuantity.innerHTML = sumQuantity    
};

//Afficher le prix total
let sumPrice = 0
for (let i = 0; i < basket.length; i++){
    let basketQuantity = parseInt(basket[i].quantity)
    let basketPrice = parseInt(basket[i].price)
    sumPrice += (basketQuantity * basketPrice)
    let displayPrice = document.getElementById("totalPrice")
    displayPrice.innerHTML = sumPrice
};


//Validation du formulaire

//Formulaire - Prénom
let firstName = document.querySelector("#firstName");
let firstNameErrorMsg = document.querySelector("#firstNameErrorMsg");
firstName.addEventListener("change", function(){

    let RegExpFirstName = new RegExp("^[a-zA-Z -]{2,}$", "g");

    if (RegExpFirstName.test(firstName.value)){
        firstNameErrorMsg.innerHTML = "Format de prénom valide";
        return true;
            
    }else{
        firstNameErrorMsg.innerHTML = "Format de prénom invalide"; 
        return false;       
    }  
});



//Formulaire - Nom de famille
let lastName = document.querySelector("#lastName");
let lastNameErrorMsg = document.querySelector("#lastNameErrorMsg");
lastName.addEventListener("change", function(){

    let RegExpLastName = new RegExp("^[a-zA-Z -]{2,}$", "g");

    if (RegExpLastName.test(lastName.value)){
        lastNameErrorMsg.innerHTML = "Format de nom valide";
        return true;
    }else{
        lastNameErrorMsg.innerHTML = "Format de nom invalide";
        return false;
    }
});

//Formulaire - Adresse
let address = document.querySelector("#address");
let addressErrorMsg = document.querySelector("#addressErrorMsg");
address.addEventListener("change", function(){

    let RegExpAddress = new RegExp("^[a-zA-Z0-9 -]+$", "g");

    if (RegExpAddress.test(address.value)){
        addressErrorMsg.innerHTML = "Format d'adresse valide";
        return true;
    }else{
        addressErrorMsg.innerHTML = "Format d'adresse invalide";
        return false;
    }
});

//Formulaire - Ville
let city = document.querySelector("#city");
let cityErrorMsg = document.querySelector("#cityErrorMsg");
city.addEventListener("change", function(){

    let RegExpCity = new RegExp("^[0-9a-zA-Z -]+$", "g");

    if (RegExpCity.test(city.value)){
        cityErrorMsg.innerHTML = "Format de ville valide";
        return true;
    }else{
        cityErrorMsg.innerHTML = "Format de ville invalide";
        return false;
    }
});

//Formulaire - Email
let email = document.querySelector("#email");
let emailErrorMsg = document.querySelector("#emailErrorMsg");
email.addEventListener("change", function(){

    let RegExpEmail = new RegExp ("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g");
 
    if (RegExpEmail.test(email.value)){
        emailErrorMsg.innerHTML = "Format de d'email valide";
        return true;

    }else{
        emailErrorMsg.innerHTML = "Format de d'email invalide";
        return false;
    }
});

// Afficher le numéro de commande
let buttonOrder = document.querySelector("#order");
buttonOrder.addEventListener("click", function(e){

    let firstName = document.querySelector("#firstName").value
    let lastName = document.querySelector("#lastName").value
    let address = document.querySelector("#address").value
    let city = document.querySelector("#city").value
    let email = document.querySelector("#email").value

    const products = basket.map((product) => product.id);
    //console.log(products)

    let order = {
    contact : {
        firstName,
        lastName,
        address,
        city,
        email,
    },    products
    };   
    //console.log(order)

fetch("http://localhost:3000/api/products/order", {
        method: 'POST',
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(order)
      })
      //console.log(JSON.stringify(order))
      .then(function(res) {
        if (res.ok) {
          return res.json();
        }
      })
     .then(function(confirm){
       window.location.href = `./confirmation.html?orderId=${confirm.orderId}`
     })

      .catch(function(err) {
        console.log("Erreur")
        alert("Veuillez compléter le formulaire")
    }) 


});

