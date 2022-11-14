//  Insérer les produits dans la page d’accueil //

fetch("http://localhost:3000/api/products")
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
})

function products(data){
    for (let i = 0; i < data.length; i++) {
        const article = document.createElement("article")

        const productId = document.createElement("a")
        productId.setAttribute("href", "./product.html?id="+data[i]._id)

        const productPicture = document.createElement("img")
        article.appendChild(productPicture)
        productPicture.setAttribute("src", data[i].imageUrl) 
        productPicture.setAttribute("alt", data[i].altTxt)

        const productName = document.createElement("h3")
        article.appendChild(productName)
        productName.innerHTML = data[i].name
        productName.classList.add("productName")

        const productDescription = document.createElement("p")
        article.appendChild(productDescription)
        productDescription.innerHTML = data[i].description 
        productDescription.classList.add("productDescription")
    
        const items = document.querySelector("#items")
        items.appendChild(productId)
        productId.appendChild(article) 
        console.log(items)
    }

}; 

 




