const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const posts  = require('./posts');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/api/', (req, res) => {
    res.send(posts);
});

app.get('/api/post/:id', (req, res) => {
    const post = posts.array.find((post) => {
        return post.id === Number(req.params.id);
    });
    res.send(post);
});

app.post('/api/test', (req, res) => {
    test.push(req.body);
    res.send(test);
    res.sendStatus(200);
});

// PUT - для изменения
// delete - для удаления


// app.get('/test/:id', function (req, res) {
//     const artist = test.find(function(artist) {
//          return artist.id === Number(req.params.id)
//     });
//     res.send(artist);
// });

app.listen(3012, function () {
   console.log("START port: 3012")
});
