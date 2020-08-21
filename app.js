const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("hello from node");
    console.log(`message sent ${port}`);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



//MONGO_URI=mongodb+srv://Adebaran:sistem32@nodeapi.gfugm.mongodb.net/NodeAPI?retryWrites=true&w=majority
//MONGO_URI=mongodb+srv://Adebaran:sistem32@nodeapi-pbn7j.mongodb.net/nodeapi?retryWrites=truenodeAPI?retryWrites=true