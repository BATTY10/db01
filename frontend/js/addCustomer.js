

document.getElementById("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  try {

  //   const form = document.querySelector("form");
  let lname = document.querySelector("#lname").value;
  let fname = document.querySelector("#fname").value;
  let email = document.querySelector("#email").value;
  let location = document.querySelector("#location").value;
  let phone = document.querySelector("#phone").value;

  const formData = {
    firstname: fname,
    lastname: lname,
    email: email,
    location: location,
    phone: phone,
  };

  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Cassandra-Token":
      "eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnAwY1lBcmZVdS1OWWpVZ0lyM2dpLTltOVVkOHFaZFRXUTVhbWNJMklwUlkub2FyMTJ3ZjBqeDNJWWJuT0Y2OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3MDAyMzA5MDYsImV4cCI6MTcwMDIzNDUwNiwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU3bHJ2MWphUTBJS2pISzY5NyIsInNjcCI6WyJvZmZsaW5lX2FjY2VzcyIsImVtYWlsIiwicHJvZmlsZSIsIm9wZW5pZCJdLCJhdXRoX3RpbWUiOjE3MDAyMzA5MDQsInN1YiI6Ijc4ODg2NTM1LTUyYzUtNDhmOS1hNjZhLTNlMjdkMjYxZTU5YiIsImVtYWlsIjoiYWJhdGltZWhpbkBnbWFpbC5jb20ifQ.dS97WkiLmTpzaVvX-_gVBHjmaSx2OpQhSpyIBXPvf8zuzMG12iQGhqxK5y0FI8fX1rKJAOe_DK5kuUoAg_nZhLN_RLsN4A8JHB1FkhTbv4DwRADjOAueaKFf5eTUPBOZWcfx4NfmticY2Yw0TEwDmEc7OSuhQ40yLVjR6fofpyvtAzut75dBvdX2B8DG_Nk3oDszjLQHQJ_iqdZFymycYlz6GDq_7YsOOqkZeuzd6E2CaFJxg7BWI95o3ROlphi-wXQj2CpvdeylcgGtxQNRX4x4SS-Y16qxFnnDxUkEuYMiB7aXXPaGXGGq20bIdjIir1YeuaiLa8ujJ5NiHUpJBQ",
    },
    body: JSON.stringify(formData),
  };

    const data = await fetch("http://localhost:4000/api/customers", option)
    console.log(data)
      const response = await data.json()
      document.querySelector('.hid').style.display = 'block'
      console.log(response)
      alert("Form submited successfully")
      // window.location.reload()
  
  } catch (e) {
    console.error("Error " + err);
    alert("Error " + err);
  }

});


