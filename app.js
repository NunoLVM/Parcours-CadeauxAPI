const express = require('express');
require('dotenv').config();
const db = require("./config/db");
const giftsRoutes = require("./routes/gifts.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

(async () => {
  try {  
    await db.query("SELECT 1");
    console.log("Connection MySQL reussie");
  } catch (err) {  
    console.error("Erreur connection MySQL", err);
  }
})();    

app.use(express.json());

app.get('/', (req, res)=> {
    res.send('On est là pour offrir des cadeaux 🎁')
})
app.use('/gifts', giftsRoutes);

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
