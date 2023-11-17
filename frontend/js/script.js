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
