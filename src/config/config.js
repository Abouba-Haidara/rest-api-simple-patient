require('dotenv').config(); // this loads the defined variables from .env
const config = {
 url: "mongodb+srv://yeminidev:yeminidevpasser@cluster0.wncq5.mongodb.net/workshop?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true",
}

module.exports = config;