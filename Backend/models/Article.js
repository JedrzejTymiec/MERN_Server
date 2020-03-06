const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let articleSchema = new Schema({
        title: {
            type: String
        },
        author: {
            type: String
        },
        content: {
            type: String
        },
    },
    {
        collection: "articles"

    }
);

module.exports = mongoose.model("Article", articleSchema)