"use strict"
const { AuthorModel } = require("../models/Author.Model")
const { BooksModel } = require("../models/Book.Model")

let Bookscontroller = (req, res) => {
  AuthorModel.find().then((data) => {
    res.json(data)
  })
}

let getBooksController = (req, res) => {
  let authorId = req.query.id
  AuthorModel.findOne({ _id: authorId }).then((data) => {
    res.json(data)
  })
}

const AddBookController = async (req, res) => {
  let { books } = req.body
  let newBook = bookModel(books)

  newBook.save()
  let addBook = new BooksModel({ books: newBook })
  addBook.save()
  let bookList = await BooksModel.find({})
  res.status(201).json({ response: bookList })
}

const deleteBookController = (req, res) => {
  let id = req.params.id
  BooksModel.findByIdAndDelete(id, async (err, data) => {
    if (err) {
      res.status(500).send("oops! error occured")
    } else {
      let booksList = await BooksModel.find({})
      res.json(booksList)
    }
  })
}

module.exports = {
  Bookscontroller,
  getBooksController,
  AddBookController,
  deleteBookController,
}
