document.addEventListener("DOMContentLoaded", ()=>{
    const customerDetail = document.querySelector(".customerdetails")
    let urlParams = new URLSearchParams(window.location.search);
    let customerId = urlParams.get("id")

    const token =`eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnAwY1lBcmZVdS1OWWpVZ0lyM2dpLTltOVVkOHFaZFRXUTVhbWNJMklwUlkub2FyMTJ3ZjBqeDNJWWJuT0Y2OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3MDAyMzA5MDYsImV4cCI6MTcwMDIzNDUwNiwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU3bHJ2MWphUTBJS2pISzY5NyIsInNjcCI6WyJvZmZsaW5lX2FjY2VzcyIsImVtYWlsIiwicHJvZmlsZSIsIm9wZW5pZCJdLCJhdXRoX3RpbWUiOjE3MDAyMzA5MDQsInN1YiI6Ijc4ODg2NTM1LTUyYzUtNDhmOS1hNjZhLTNlMjdkMjYxZTU5YiIsImVtYWlsIjoiYWJhdGltZWhpbkBnbWFpbC5jb20ifQ.dS97WkiLmTpzaVvX-_gVBHjmaSx2OpQhSpyIBXPvf8zuzMG12iQGhqxK5y0FI8fX1rKJAOe_DK5kuUoAg_nZhLN_RLsN4A8JHB1FkhTbv4DwRADjOAueaKFf5eTUPBOZWcfx4NfmticY2Yw0TEwDmEc7OSuhQ40yLVjR6fofpyvtAzut75dBvdX2B8DG_Nk3oDszjLQHQJ_iqdZFymycYlz6GDq_7YsOOqkZeuzd6E2CaFJxg7BWI95o3ROlphi-wXQj2CpvdeylcgGtxQNRX4x4SS-Y16qxFnnDxUkEuYMiB7aXXPaGXGGq20bIdjIir1YeuaiLa8ujJ5NiHUpJBQ`

    fetch(`http://localhost:4000/api/customers/single_customer/${customerId}`)
    .then(response => response.json())
    .then((singleCustomer)=>{
        console.log(singleCustomer.documentId)
        const customer = (singleCustomer.data)
            customerDetail.innerHTML=`
            <h2>Name: ${ customer.firstname} ${customer.lastname}</h2>
            <h2>Email: ${customer.email}</h2>
            <h3>Location: ${customer.location}</h3>
            <h3>Telephone: ${customer.phone}</h3>
            <button onClick="deleteCustomer('${singleCustomer.documentId}')" >Delete Customer </button>
            `
        // })
    })
    .catch(err=>console.log(err))
})

const deleteCustomer=(customerId)=>{
    // console.log(`http://localhost:4000/api/customers/delete_customer/${customerId}`)
    if(confirm("Are you sure you want to delete the customer?")){
        fetch(`http://localhost:4000/api/customers/delete_customer/${customerId}`, {
            method: 'DELETE',
            headers: {
                // "Content-Type": "*/*",
                Accept: "application/json",
                "X-Cassandra-Token":
                "eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnAwY1lBcmZVdS1OWWpVZ0lyM2dpLTltOVVkOHFaZFRXUTVhbWNJMklwUlkub2FyMTJ3ZjBqeDNJWWJuT0Y2OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3MDAyMzA5MDYsImV4cCI6MTcwMDIzNDUwNiwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU3bHJ2MWphUTBJS2pISzY5NyIsInNjcCI6WyJvZmZsaW5lX2FjY2VzcyIsImVtYWlsIiwicHJvZmlsZSIsIm9wZW5pZCJdLCJhdXRoX3RpbWUiOjE3MDAyMzA5MDQsInN1YiI6Ijc4ODg2NTM1LTUyYzUtNDhmOS1hNjZhLTNlMjdkMjYxZTU5YiIsImVtYWlsIjoiYWJhdGltZWhpbkBnbWFpbC5jb20ifQ.dS97WkiLmTpzaVvX-_gVBHjmaSx2OpQhSpyIBXPvf8zuzMG12iQGhqxK5y0FI8fX1rKJAOe_DK5kuUoAg_nZhLN_RLsN4A8JHB1FkhTbv4DwRADjOAueaKFf5eTUPBOZWcfx4NfmticY2Yw0TEwDmEc7OSuhQ40yLVjR6fofpyvtAzut75dBvdX2B8DG_Nk3oDszjLQHQJ_iqdZFymycYlz6GDq_7YsOOqkZeuzd6E2CaFJxg7BWI95o3ROlphi-wXQj2CpvdeylcgGtxQNRX4x4SS-Y16qxFnnDxUkEuYMiB7aXXPaGXGGq20bIdjIir1YeuaiLa8ujJ5NiHUpJBQ",
              },
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error("Problem fetch data")
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            const jsonData = JSON.parse(data);
            window.history.back()
            alert(jsonData)
            goBack()
        })
        .catch((err)=>console.log('Error deleting product ' + err))

    }
}

const goBack =()=>{
    window.history.back()
}