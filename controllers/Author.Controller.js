"use strict"
const { AuthorModel } = require("../models/Author.Model")

let authorController = (req, res) => {
  AuthorModel.find().then((data) => {
    res.json(data)
  })
}
const createBookController = (req, res) => {
  let bookData = req.body
  let createNewBook = new AuthorModel(bookData)
  createNewBook.save()
  AuthorModel.find({}).then((data) => {
    res.status(200).json(data)
  })
}
const deleteBookController = (req, res) => {
  // PARAMS
  let bookID = req.params.id
  AuthorModel.findByIdAndDelete(bookID).then(() => {
    AuthorModel.find().then((data) => res.json(data))
  })
}
const updateBookController = async (req, res) => {
  let bookID = req.params.id
  let updatedData = req.body
  AuthorModel.findOne({ _id: bookID }).then((book) => {
    book.title = updatedData.title
    book.description = updatedData.description
    book.status = updatedData.status
    book.email = updatedData.email
    book.save()
  })
  let updatedBookList = await AuthorModel.find({})
  res.status(200).send(updatedBookList)
}

module.exports = {
  createBookController,
  authorController,
  deleteBookController,
  updateBookController,
}
