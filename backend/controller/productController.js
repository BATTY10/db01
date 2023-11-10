const { client } = require("../config/dbConnect")
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4(); 


const getAllData = async(req, res)=>{
        try {
          const query = "SELECT * FROM tabular.products";
          client.execute(query, []).then((result) => {
            const rows = result.rows;
            res.json(rows);
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: err.message });
        }
}

const getSingleData = async(req, res)=>{
    const { id } = req.params;
    try{
        const query = `SELECT * FROM tabular.products WHERE productId = ${id}`;
          client.execute(query, []).then((result) => {
            const rows = result.rows;
            res.json(rows);
          });
    }catch (err) {
          console.log(err);
          res.status(500).json({ message: err.message 
          });
    }
}


const addDataRow = async (req, res) => {
  try{
    const { productid, name, price, dateadded, description,  } = req.body;
    const imageUrl = req.file.path;

    const query=`INSERT INTO tabular.products (productid, name, price, dateadded, description, imgae) VALUES (?, ?, ?, ?, ?, ?)`;
    await client.execute(query, [uuid, name, price, new Date(), description, imageUrl], {prepare: true});

    res.json({message:"Item added successfully"})

  }catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
  }

}

const deleteRow = async(req, res)=>{
  const { id } = req.params;
  try{
    const query = `DELETE FROM tabular.products WHERE productid = ${id}`;
    client.execute(query, []).then((result)=>{
      const rows = result.rows
      console.log("ROWS: " + rows?.lenght + " items left") 
      res.json({ message: "items deleted" });
    })
  }catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
  }
}

module.exports = { getAllData, getSingleData, addDataRow, deleteRow };