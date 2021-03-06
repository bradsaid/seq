// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");
let Sequelize = require("sequelize")
const Op = Sequelize.Op


// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.findAll({}).then(function (results) {
      return res.json(results)
    })

  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function(req, res) {
    Book.fineOne({
      where: {
        title: req.params.book
      }
    }).then(function (results) {
      return res.json(results)
    })

  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    Book.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(function (results) {
      return res.json(results)
    })

  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    Book:findAll({
      where: {
        author: req.params.author
      }
    }).then(function (results) {
      return res.json(results)
    })

  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {
    Book.findAll({
      where: {
        pages: {
          [Op.gt]: 150,
        }
      }
    }).then(function (results) {
      return res.json(results)
    })


  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    Book.findAll({
      where: {
        pages: {
          [Op.lt]: 150,
        }
      }
    }).then(function (results) {
      return res.json(results)
    })
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages
    }).then(function (results) {
      res.end()
    })

  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function(req, res) {
    Book.destroy({
      where: {
        title: req.params.title
      }
    }).then(function (results) {
      res.end()
    })
  });

};