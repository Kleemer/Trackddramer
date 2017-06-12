const express = require('express');

const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'trackddramer_db'
});

connection.connect();

app.get('/users', (req, res) => {
    connection.query("SELECT * FROM `users`", (err, result) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(result);
    })
})

app.post('/user', (req, res) => {
    const { login } = req.body;
    if (!login)
        return res.sendStatus(500);
    connection.query("INSERT INTO `users` (login) VALUES (" + mysql.escape(login) + ")", (err, result) => {
    if (err)
            return res.status(500).send(err);
    return res.status(200).send(JSON.stringify({ "id": result.insertId }));
    })
});

app.get('/user', (req, res) => {
    const { login } = req.query;
    if (!login)
        return res.sendStatus(500);
    connection.query("SELECT * FROM `users` WHERE login LIKE " + mysql.escape(login), (err, result) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(result);
    })
})

app.get('/shows', (req, res) => {
    connection.query("SELECT * FROM `shows`", (err, result) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(result);
    })
})

app.get('/watchlistsByUserId', (req, res) => {
    const { user } = req.query;
    if (!user)
        return res.sendStatus(500);
    connection.query("SELECT * FROM `watchlists` WHERE user_id = " + user, (err, result) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(result);
    })
})

app.get('/watchlist', (req, res) => {
    const { id } = req.query;
    if (!id)
        return res.sendStatus(500);
    connection.query("SELECT * FROM `watchlists` WHERE id = " + id, (err, result) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(result);
    })
})

app.get('/watchlistContent', (req, res) => {
    const { id } = req.query;
    if (!id)
        return res.sendStatus(500);
    connection.query("SELECT * FROM `watchlist_shows` WHERE watchlist_id = " + id, (err, result) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(result);
    })
})

app.post('/watchlist', (req, res) => {
    const { user_id, name } = req.body;
    if (!(user_id && name))
        return res.sendStatus(500);
    connection.query("INSERT INTO `watchlists` (user_id, name) VALUES (" + user_id + ", " + mysql.escape(name) + ")", (err, result) => {
    if (err)
            return res.status(500).send(err);
    return res.status(200).send(JSON.stringify({ "id": result.insertId }));
    })
});

app.post('/addshowtowatchlist', (req, res) => {
    const { watchlist_id, show_id, show_name } = req.body;
    if (!(watchlist_id && show_id && show_name))
        return res.sendStatus(500);
    connection.query("INSERT INTO `watchlist_shows` (watchlist_id, show_id, show_name) VALUES (" + watchlist_id + ", " + show_id + ", " + mysql.escape(show_name) + ")", (err, result) => {
        if (err)
            return res.status(500).send(err);
    return res.status(200).send(JSON.stringify({ "id": result.insertId }));
    })
});

app.listen(4200, () => {
    console.log('Ex app listening on port 4200')
});