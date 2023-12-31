const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    db_url : process.env.DB_URL,
    db_name : process.env.DB_NAME,
    port : process.env.PORT,
}