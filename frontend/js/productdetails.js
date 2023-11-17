document.addEventListener("DOMContentLoaded", ()=>{
    const productDetailsContainer = document.getElementById('productDetails')

    let urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get("id")
    console.log(productId)

    fetch(`http://localhost:4000/api/products/${productId}`)
    .then((res)=>res.json())
    .then((product)=>{
        console.log(product)
        productDetailsContainer.innerHTML =`
        <div style="border:'1px solid red'">
        <img src="${product[0].imgae}" >   
        <h1>${product[0].name}</h1>
        <p>$${product[0].price}</p>
        <button onClick="goBack()">Go back</button>
        // <button onClick="deleteProduct('${product[0].productid}')">Delete</button>
        </div>
        `
    }).catch((err)=>{
        console.error("Error fetching data " + err)
    })
})


const deleteProduct =(productId)=>{
    if(confirm("Are you sure you want to delete the product?")){
        fetch(`http://localhost:4000/api/products/delete/${productId}`, {
            method: 'DELETE'
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert(data?.message)
            goBack()
        })
        .catch((err)=>console.log('Error deleting product ' + err))

    }
}



const goBack=()=>{
    window.history.back();
}
