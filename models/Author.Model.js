"use strict"
const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
})

const AuthorModel = mongoose.model("author", authorSchema)

let seedAuthor = () => {
  let newAuthor1 = new AuthorModel({
    title: "The Great Gatsby",
    description:
      "Published in 1925, Fitzgerald’s The Great Gatsby explores the decadence of the Jazz Age, and one man’s introduction into a world where even those with the most indulgent lives cannot earn love.",
    status: "Available",
    email: "xxxxxx@gmail.com",
  })
  let newAuthor2 = new AuthorModel({
    title: "Pride and Prejudice",
    description:
      "One of the most famous novels of all time, Pride And Prejudice details the courtship of two opposed characters in a world where manners and courtesy are of the utmost importance.",
    status: "Available",
    email: "ooooo@gmail.com",
  })

  let newAuthor3 = new AuthorModel({
    title: "To Kill a Mockingbird",
    description:
      "Published in 1960, this timeless classic explores human behaviour and the collective conscience of The Deep South in the early 20th century.",
    status: "Available",
    email: "sanaishaqat@gmail.com",
  })

  newAuthor1.save()
  newAuthor2.save()
  newAuthor3.save()
}

module.exports = { seedAuthor, AuthorModel }
