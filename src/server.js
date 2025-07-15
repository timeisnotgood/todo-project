const app = require("./app")
require('dotenv')

const port = process.env.PORT || 3002

app.listen(port, (req, res) =>{
    console.log("Listering", port);
})