const fetch = require('node-fetch')

const token = "eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnAwY1lBcmZVdS1OWWpVZ0lyM2dpLTltOVVkOHFaZFRXUTVhbWNJMklwUlkub2FyMTJ3ZjBqeDNJWWJuT0Y2OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3MDAyMzA5MDYsImV4cCI6MTcwMDIzNDUwNiwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU3bHJ2MWphUTBJS2pISzY5NyIsInNjcCI6WyJvZmZsaW5lX2FjY2VzcyIsImVtYWlsIiwicHJvZmlsZSIsIm9wZW5pZCJdLCJhdXRoX3RpbWUiOjE3MDAyMzA5MDQsInN1YiI6Ijc4ODg2NTM1LTUyYzUtNDhmOS1hNjZhLTNlMjdkMjYxZTU5YiIsImVtYWlsIjoiYWJhdGltZWhpbkBnbWFpbC5jb20ifQ.dS97WkiLmTpzaVvX-_gVBHjmaSx2OpQhSpyIBXPvf8zuzMG12iQGhqxK5y0FI8fX1rKJAOe_DK5kuUoAg_nZhLN_RLsN4A8JHB1FkhTbv4DwRADjOAueaKFf5eTUPBOZWcfx4NfmticY2Yw0TEwDmEc7OSuhQ40yLVjR6fofpyvtAzut75dBvdX2B8DG_Nk3oDszjLQHQJ_iqdZFymycYlz6GDq_7YsOOqkZeuzd6E2CaFJxg7BWI95o3ROlphi-wXQj2CpvdeylcgGtxQNRX4x4SS-Y16qxFnnDxUkEuYMiB7aXXPaGXGGq20bIdjIir1YeuaiLa8ujJ5NiHUpJBQ"

const getAllCustomers = (req, res) => {
  const url =
    "https://f77172ab-7745-48ba-bd56-06d70556e5f4-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/document/collections/customers?page-size=15";
  const option = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": token,
    },
  };
  fetch(url, option)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => console.error(err));
};


const getSingleCustomer = async (req, res) => {
  const { id } = req.params;
  const url = `https://f77172ab-7745-48ba-bd56-06d70556e5f4-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/document/collections/customers/${id}`

  const option = {
    method: "GET",
    headers: {
      Accept: 'application/json',
      'X-Cassandra-Token': token
    }
  }
  fetch(url, option)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => console.log("error " + err))
};


const addCustomer = async (req, res) => {
  const url =
    "https://f77172ab-7745-48ba-bd56-06d70556e5f4-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/document/collections/customers";
  const data = req.body;


  const option = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
      "X-Cassandra-Token": token,
    },
    body: JSON.stringify(data),
  }
  try {
    const data = await fetch(url, option)
    const result = await data.json()
    console.log(result)

  } catch (err) {
    console.log(err)
    res.status(500).json("error " + err)
  }

}


const deleteCustomer = async(req, res)=>{
  const { id } = req.params
  const url = `https://f77172ab-7745-48ba-bd56-06d70556e5f4-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/document/collections/customers/${id}`
  const option ={
    method: "DELETE",
    headers: {
      Accept:'*/*',
      'X-Cassandra-Token':token,
    }
  }

  fetch(url, option)
  .then(response=>response.json())
  .then(data=>res.json({meassage:"Item delete succesfully"}))
  .catch(err=>console.log(err))

}



module.exports = {
  getAllCustomers,
  addCustomer,
  getSingleCustomer,
  deleteCustomer
};





