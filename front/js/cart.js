let basket = JSON.parse(localStorage.getItem("product"))
console.log(basket);
//console.log(getBasket)

function products(basket){
  let baskettest = [{"productId":"107fb5b75607497b96722bda5b504926","productQuantity":"3","productColor":"Blue"}]
  const section = document.getElementById("cart__items")

 // for (let i = 0; i < basket.length; i++) {

    const article = document.createElement("article")
    section.appendChild(article)
    article.classList.add("cart__item")
    
    const divImg = document.createElement("div")
    article.appendChild(divImg)

    const productPicture = document.createElement("img")
    divImg.appendChild(productPicture)
    //productPicture.setAttribute("src", basket[i].imageUrl) 
    //productPicture.setAttribute("alt", basket[i].altTxt)
    console.log(article)

  //}

};


  

