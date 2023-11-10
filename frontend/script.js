document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector("form");

    form.addEventListener("submit", async(e)=>{
        e.preventDefault();
        const formData = new FormData(form);
        const url = "http://localhost:4000/api/products";
        try{
            const response = await fetch(url, {method:"POST", body:formData})
            if(response.ok){
                const data = await response.json();
                alert(data.message);
                form.reset();
            }else{
                throw new Error("Failed to add row");
            }
        }catch(e){
            console.error(e);
            alert("something went wrong")
        };
    })
})


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
        <button>more</button>
        </div>
        `
    });
    wrapper.innerHTML = html;
})