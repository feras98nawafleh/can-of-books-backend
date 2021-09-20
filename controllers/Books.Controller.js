"use strict"
const { AuthorModel } = require("../models/Author.Model")
const { BooksModel } = require("../models/Book.Model")

let Bookscontroller = (req, res) => {
  AuthorModel.find().then((data) => {
    res.json(data[0])
  })
}

let getBooksController = (req, res) => {
  let authorId = req.query.id
  AuthorModel.findOne({ _id: authorId }).then((data) => {
    res.json(data)
  })
}

module.exports = { Bookscontroller, getBooksController }
