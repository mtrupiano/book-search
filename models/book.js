const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: 'Book title required.'
        },
        authors: [
            {
                type: String,
                required: 'Provide at least one author.'
            }
        ],
        description: String,
        image: String,
        link: String
    }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;