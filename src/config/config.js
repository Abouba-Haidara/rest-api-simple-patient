require('dotenv').config(); // this loads the defined variables from .env
const config = {
    url: process.env.DATABASE_URL
}
module.exports = config;