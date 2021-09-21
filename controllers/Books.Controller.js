"use strict"
const { AuthorModel } = require("../models/Author.Model")
const { BooksModel } = require("../models/Book.Model")

let Bookscontroller = (req, res) => {
  AuthorModel.find().then((data) => {
    res.json(data)
  })
}

let getBookController = (req, res) => {
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

const updateBookController = async (req, res) => {
  let bookId = req.params.id
  let updatedBook = req.body
  BooksModel.findOne({ _id: bookId }).then((book) => {
    book.title = updatedBook.title
    book.description = updatedBook.description
    book.status = updatedBook.status
    book.email = updatedBook.email
    book.save()
  })
  let updatedList = await BooksModel.find()
  await res.status(200).send(updatedList)
}

module.exports = {
  Bookscontroller,
  getBookController,
  AddBookController,
  deleteBookController,
  updateBookController,
}
