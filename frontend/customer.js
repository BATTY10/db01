// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form");
//   let lname = document.querySelector("#lname");
//   let fname = document.querySelector("#fname");
//   let email = document.querySelector("#email");
//   let location = document.querySelector("#location");
//   let phone = document.querySelector("#phone");
//   console.log(form);

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
    // const formData = {
    //   firstname: fname.value,
    //   lastname: lname.value,
    //   email: email.value,
    //   location: location.value,
    //   phone: phone.value,
    // };
    // console.log(formData);
    // const option = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "X-Cassandra-Token":
    //       "eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmtkRm1SR0wwWEVMWjc5SmZ4MkEzcVdBZkNDNXMzVzMtNFpaNlZVWlNrWTQub2FyMTFwMGdodHZaYlhGQU02OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTkzNjA3NjYsImV4cCI6MTY5OTM2NDM2NiwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU3bHJ2MWphUTBJS2pISzY5NyIsInNjcCI6WyJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiLCJlbWFpbCIsIm9wZW5pZCJdLCJhdXRoX3RpbWUiOjE2OTkzNjA3NjUsInN1YiI6Ijc4ODg2NTM1LTUyYzUtNDhmOS1hNjZhLTNlMjdkMjYxZTU5YiIsImVtYWlsIjoiYWJhdGltZWhpbkBnbWFpbC5jb20ifQ.ChJcFUOuvdXAs4y56JP2EM9nRzid0Os7WgxGbzstzPZUeRyxwg8vLrYEDRhcodp-U2dLIIdmb9uUZ73v_5krINE17EjbCCdBsGBysnE46WEFvOAZl1_O3RDvK_kRJPsWo-3vAyMUB_xaEQ4KdwvL7CeIeiTP8EcymDEvSM55wKvpJuuMnkv2o4VrtaM0Nhbo_tGyrKhv6K_QZh-fqoVXvKhf38yyIRcD_QqUoS80E6rSSlWWOEQQLLM-Phiml2jlot4D3UptwGSuaeDHTnKMSpwXNMabJdxme-GIY9pjcEri8vP8y31vnJ7n_rjtPJxNFJHbtzSB6KpQXvlXHpTVfQ",
    //   },
    //   body: JSON.stringify(formData),
    // };

    // fetch("http://localhost:4000/api/customers", option)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => {
    //     console.error("Error " + err);
    //     alert("Error " + err);
    //   });
//   });
// });



document.getElementById("form").addEventListener("submit", async (event) => {
    event.preventDefault();

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
            "eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmtkRm1SR0wwWEVMWjc5SmZ4MkEzcVdBZkNDNXMzVzMtNFpaNlZVWlNrWTQub2FyMTFwMGdodHZaYlhGQU02OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTkzNjA3NjYsImV4cCI6MTY5OTM2NDM2NiwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU3bHJ2MWphUTBJS2pISzY5NyIsInNjcCI6WyJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiLCJlbWFpbCIsIm9wZW5pZCJdLCJhdXRoX3RpbWUiOjE2OTkzNjA3NjUsInN1YiI6Ijc4ODg2NTM1LTUyYzUtNDhmOS1hNjZhLTNlMjdkMjYxZTU5YiIsImVtYWlsIjoiYWJhdGltZWhpbkBnbWFpbC5jb20ifQ.ChJcFUOuvdXAs4y56JP2EM9nRzid0Os7WgxGbzstzPZUeRyxwg8vLrYEDRhcodp-U2dLIIdmb9uUZ73v_5krINE17EjbCCdBsGBysnE46WEFvOAZl1_O3RDvK_kRJPsWo-3vAyMUB_xaEQ4KdwvL7CeIeiTP8EcymDEvSM55wKvpJuuMnkv2o4VrtaM0Nhbo_tGyrKhv6K_QZh-fqoVXvKhf38yyIRcD_QqUoS80E6rSSlWWOEQQLLM-Phiml2jlot4D3UptwGSuaeDHTnKMSpwXNMabJdxme-GIY9pjcEri8vP8y31vnJ7n_rjtPJxNFJHbtzSB6KpQXvlXHpTVfQ",
        },
        body: JSON.stringify(formData),
      };

      try{
const data  =  await fetch("http://localhost:4000/api/customers", option)
           const response = await data.json()
          console.log(response)
      }catch(e){
          console.error("Error " + err);
          alert("Error " + err);
      }     

});