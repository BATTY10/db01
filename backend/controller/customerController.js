const fetch = require('node-fetch')

const getAllCustomers = (req, res) => {
  const url =
    "https://f77172ab-7745-48ba-bd56-06d70556e5f4-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/document/collections/customers?page-size=19";
  const option = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token":
        "eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlN1bmJoT0VBZGczbldyOGZQVzlUamRHQ0dlLXp0QzhSVXZDQ1kxNUhheEEub2FyMTF4ZnVkaUpObzVwdmQ2OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTk1MzUzNTAsImV4cCI6MTY5OTUzODk1MCwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU3bHJ2MWphUTBJS2pISzY5NyIsInNjcCI6WyJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiLCJlbWFpbCJdLCJhdXRoX3RpbWUiOjE2OTk1MzUzNDgsInN1YiI6Ijc4ODg2NTM1LTUyYzUtNDhmOS1hNjZhLTNlMjdkMjYxZTU5YiIsImVtYWlsIjoiYWJhdGltZWhpbkBnbWFpbC5jb20ifQ.veMOtEysN9FWHjA8JoIy4imKmwDqJMLGQL2c8iYvBLlLfG7d4T9rvBF-ea8p5bo7THFobaSvA2KAaEbaIx1hQ3ovqRHc2NpL1in162YT_0zibIxjTdC2BQL0zqwSF6bNI8hC8E3dI5P0HpP6-WClFHXK0n3cVzFTHGjfFHU1CXG5OUP9dzawiL8q7I1guhwftKWuniKNZYn_y7tsyIs9KQzsmv6Wejf3TNWU1zXn9lFrLiHFBiDAYP3hK73Z9-H7rezeqJt_z3-GPCHwik4kv0TGehuB1f5gifyQCQz84h7VmPS7jdOwgN24bf2dFfNctZhsDgINBPmBjhdYFYOJ-Q",
    },
  };
  fetch(url, option)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => console.error(err));
};

const addCustomer= async (req, res) => {
    const url =
      "https://f77172ab-7745-48ba-bd56-06d70556e5f4-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/document/collections/customers";
const data = req.body;


        const option = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
      Accept: "application/json",
      "X-Cassandra-Token":
        "eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlN1bmJoT0VBZGczbldyOGZQVzlUamRHQ0dlLXp0QzhSVXZDQ1kxNUhheEEub2FyMTF4ZnVkaUpObzVwdmQ2OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTk1MzUzNTAsImV4cCI6MTY5OTUzODk1MCwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU3bHJ2MWphUTBJS2pISzY5NyIsInNjcCI6WyJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiLCJlbWFpbCJdLCJhdXRoX3RpbWUiOjE2OTk1MzUzNDgsInN1YiI6Ijc4ODg2NTM1LTUyYzUtNDhmOS1hNjZhLTNlMjdkMjYxZTU5YiIsImVtYWlsIjoiYWJhdGltZWhpbkBnbWFpbC5jb20ifQ.veMOtEysN9FWHjA8JoIy4imKmwDqJMLGQL2c8iYvBLlLfG7d4T9rvBF-ea8p5bo7THFobaSvA2KAaEbaIx1hQ3ovqRHc2NpL1in162YT_0zibIxjTdC2BQL0zqwSF6bNI8hC8E3dI5P0HpP6-WClFHXK0n3cVzFTHGjfFHU1CXG5OUP9dzawiL8q7I1guhwftKWuniKNZYn_y7tsyIs9KQzsmv6Wejf3TNWU1zXn9lFrLiHFBiDAYP3hK73Z9-H7rezeqJt_z3-GPCHwik4kv0TGehuB1f5gifyQCQz84h7VmPS7jdOwgN24bf2dFfNctZhsDgINBPmBjhdYFYOJ-Q",
    },
    body: JSON.stringify(data),
}
try{
    const data = await fetch(url, option)
    const result = await data.json()
    console.log(result)

}catch(err){
        console.log(err)
    res.status(500).json("error " + err)
}

// .then(response => response.json())
// .then(result => res.json(result))
// .catch(err =>{ 
//     console.log(err)
//     res.status(500).json("error " + err)
// })
}



module.exports = {
  getAllCustomers,
  addCustomer,
};




// curl -X 'GET' \
//   'https://f77172ab-7745-48ba-bd56-06d70556e5f4-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/document/collections/customers?page-size=19' \
//   -H 'accept: application/json' \
//   -H 'X-Cassandra-Token: eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlN1bmJoT0VBZGczbldyOGZQVzlUamRHQ0dlLXp0QzhSVXZDQ1kxNUhheEEub2FyMTF4ZnVkaUpObzVwdmQ2OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTk1MzUzNTAsImV4cCI6MTY5OTUzODk1MCwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU3bHJ2MWphUTBJS2pISzY5NyIsInNjcCI6WyJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiLCJlbWFpbCJdLCJhdXRoX3RpbWUiOjE2OTk1MzUzNDgsInN1YiI6Ijc4ODg2NTM1LTUyYzUtNDhmOS1hNjZhLTNlMjdkMjYxZTU5YiIsImVtYWlsIjoiYWJhdGltZWhpbkBnbWFpbC5jb20ifQ.veMOtEysN9FWHjA8JoIy4imKmwDqJMLGQL2c8iYvBLlLfG7d4T9rvBF-ea8p5bo7THFobaSvA2KAaEbaIx1hQ3ovqRHc2NpL1in162YT_0zibIxjTdC2BQL0zqwSF6bNI8hC8E3dI5P0HpP6-WClFHXK0n3cVzFTHGjfFHU1CXG5OUP9dzawiL8q7I1guhwftKWuniKNZYn_y7tsyIs9KQzsmv6Wejf3TNWU1zXn9lFrLiHFBiDAYP3hK73Z9-H7rezeqJt_z3-GPCHwik4kv0TGehuB1f5gifyQCQz84h7VmPS7jdOwgN24bf2dFfNctZhsDgINBPmBjhdYFYOJ-Q'
