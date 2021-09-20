"use strict"

//added this comment to create main branch

require("dotenv").config()
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()
const mongoose = require("mongoose")
app.use(cors())

const MONGO_SERVER = process.env.MONGO_SERVER
const {
  Bookscontroller,
  getBooksController,
  AddBookController,
  deleteBookController,
} = require("./controllers/Books.Controller")
const PORT = process.env.PORT
mongoose.connect(`${MONGO_SERVER}/BookStore`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.get("/books", Bookscontroller)
app.get("/find-author", getBooksController)
app.post("/add-book", AddBookController)
app.delete("/delete-book/:id", deleteBookController)

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`)
})
