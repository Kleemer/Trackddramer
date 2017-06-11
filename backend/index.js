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

app.post('/user', (req, res) => {
    const { login } = req.body;
    if (!login)
        return res.sendStatus(500);
    connection.query("INSERT INTO `users` (login) VALUES (" + mysql.escape(login) + ")", (err, result) => {
    if (err)
        return res.sendStatus(500);
    return res.sendStatus(200);
    })
});

app.get('/users', (req, res) => {
    connection.query("SELECT * FROM `users`", (err, result) => {
        if (err)
            return err;
        return res.status(200).send(result);
    })
})

app.get('/user', (req, res) => {
    const { login } = req.query;
    if (!login)
        return res.sendStatus(500);
    connection.query("SELECT * FROM `users` WHERE login LIKE " + mysql.escape(login), (err, result) => {
        if (err)
            return err;
        return res.status(200).send(result);
    })
})

app.listen(4200, () => {
    console.log('Ex app listening on port 4200')
});