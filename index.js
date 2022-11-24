 // ##### IMPORT Modules #####
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require("./src/app/database/db");

const cors = require('cors');

const corsOptions  =  {
    origin: "*"
}


// ##### CONNECTION TO DATABASE #####
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
 });


app.use(cors(corsOptions));
app.use(express.json());

app.get('/test', (req, res) => {
    res.send({message: 'test'});
})

// ####### Import routes ##############
require("./src/app/api/routes/routes")(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log("Le serveur est démarré sur le port: " + PORT ); });
