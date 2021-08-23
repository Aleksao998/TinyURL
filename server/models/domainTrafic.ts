export { };
const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const domainTraficShema = new Shema({
    domain: String,
    date: {
        type: String,
        default: Date.now
    }
},{ timestamps: true });

module.exports = mongoose.model("DomainTrafic", domainTraficShema);