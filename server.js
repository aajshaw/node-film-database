const express = require('express');
//import Promise from 'bluebird';
const sqlite = require('sqlite');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;
const dbPromise = sqlite.open('./db/films.sqlite', { Promise });

app.set('view engine', 'hbs');

//app.get('/post/:id', async (req, res, next) => {
app.get('/films', async (req, res, next) => {
  try {
    const db = await dbPromise;
    //const [post, categories] = await Promise.all([
      //db.get('SELECT * FROM Post WHERE id = ?', req.params.id),
      //db.all('SELECT * FROM Category')
    //]);
    const [films, collection] = await Promise.all([
      db.all('select * from films'),
      db.get('select * from collections limit 1')
    ]);
    res.render(__dirname + '/views/films', { films, collection });
  } catch (err) {
    next(err);
  }
});

app.listen(port);
