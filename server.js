const express = require('express');
const db  = require('./db');
const BodyParser = require('body-parser');

const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/api/', (req, res) => {
    res.send(db.postList);
});

app.get('/api/post/:id', (req, res) => {
    const post = db.postList.find((post) => {
        return post.id === Number(req.params.id);
    });
    res.send(post);
});

app.listen(3012, function () {
    console.log("listen port: 3012")
});

// app.post('/api/test', (req, res) => {
//     test.push(req.body);
//     res.send(test);
//     res.sendStatus(200);
// });

// PUT - для изменения
// delete - для удаления

// app.get('/test/:id', function (req, res) {
//     const artist = test.find(function(artist) {
//          return artist.id === Number(req.params.id)
//     });
//     res.send(artist);
// });


