const express = require('express');

const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());


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
    connection.query("INSERT INTO `user` SET ?", { login: login }, (err, result) => {
        if (err)
            return res.sendStatus(500, err);
    })
    return res.sendStatus(200);
});

app.listen(4200, () => {
    console.log('Ex app listening on port 4200')
});