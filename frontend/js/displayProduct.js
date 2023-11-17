document.addEventListener("DOMContentLoaded", ()=>{
    

let wrapper = document.querySelector(".wrapper");
const url = "http://localhost:4000/api/products";
let html=''

fetch(url)
.then(res=>res.json())
.then((data) => {
    data.forEach(element => {
        html +=`
        <div style="border:'1px solid red'">
        <img src="${element.imgae}" >   
        <h1>${element.name}</h1>
        <p>$${element.price}</p>
        <button onClick="viewProductDetails('${element.productid}')">more</button>
        </div>
        `
    });
    wrapper.innerHTML = html;
})
})

function viewProductDetails(productId){
    window.location.href = `productdetails.html?id=${productId}`
}