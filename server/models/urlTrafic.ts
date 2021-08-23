export { };
const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const urlTraficShema = new Shema({
    urlCode: String,
    longUrl: String,
    baseUrl: String,
    date: {
        type: String,
        default: Date.now
    }
},{ timestamps: true });

module.exports = mongoose.model("UrlTrafic", urlTraficShema);