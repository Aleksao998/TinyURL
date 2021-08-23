const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const urlShema = new Shema({
    urlCode: String,
    longUrl: String,
    baseUrl: String,
});

module.exports = mongoose.model("Url", urlShema);