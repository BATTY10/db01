const { Client } = require("cassandra-driver");

const client = new Client({
  cloud: {
    secureConnectBundle: "secure-connect-dbtutorial.zip",
  },
  credentials: {
    username: "vtPHCIZJAGdNKgWZEFdqXfvm",
    password:
      "pEoE2ytpJDHhcM.YNEnXiL4Lin_Z0FEi2,QZep8FHurzK8BY,12HO2ePFfC,qIxCCg0OR.RhkZqOjmFhKQgZdZ0TP8iJF6kmUWCz,n6mGCGmT0C7-1iFs+o_K9utaFS7",
  },
});

const dbConnect = async () => {

    try{
        await client.connect();
        // // Execute a query
        // const rs = await client.execute("SELECT * FROM system.local");
        // console.log(`Your cluster returned ${rs.rowLength} row(s)`);

        //   await client.shutdown();
        console.log('Database connection successful')
    }catch(error){
        console.error("database connection error: " + error)
        throw error;
    }


}

module.exports = { dbConnect, client}
