const express = require('express')
const app = express()
const port = 3000
const MOVIES = [{
    _id: 1,
    name: 1,
}]

app.get('/', function (req, res) {
     res.send(MOVIES);
});


app.post('/', function (req, res) {
    res.send('Got a POST request');
});


app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});


app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
