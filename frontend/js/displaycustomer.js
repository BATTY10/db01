document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.querySelector(".container")

    fetch("http://localhost:4000/api/customers")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        console.log(data.data)
      const customerid = Object.keys(data.data)
        console.log(Object.values(data.data))
       Object.values(data.data).forEach((customer,index)=>{
        console.log(customerid[index])
            const items = document.createElement("li")
            items.innerHTML =`
            <span>First Name:${customer.firstname}</span>
            <span>Last Name:${customer.lastname}</span>
            <span>Loacation:${customer.location}</span>
            <button onClick="viewCustomerDetail('${customerid[index]}')">View More</button>
            `
        container.appendChild(items)
        })
    }).catch(err=>console.log(err))
})

const viewCustomerDetail =(customerId)=>{
    window.location.href = `customerdetail.html?id=${customerId}`
}