"use strict"

const HTTP = require("http")

const app = require("./configs/express")()
const connectionString = require("./configs/environment").mongodb_uri
require("./configs/database")(connectionString)

const port = app.get("port")

HTTP.createServer(app).listen(port, () => {
    console.log(`🚀  api running on port ${port}`)
})
