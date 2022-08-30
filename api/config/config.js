const { resolve } = require("path");
require("dotenv").config({ path: resolve(__dirname, "../.env") });

module.exports={
    secretToken:process.env.TOKEN_SECRET,
    dbName: process.env.DB_NAME,
    passwordPostgres: process.env.ASSWORD_POSTGRES,
    userPostgres: process.env.USER_POSTGRES,
    port: process.env.port
}