const express = require('express');
const dbJSON  = require('./dbJSON');
const BodyParser = require('body-parser');
const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    res.send(dbJSON.postList);
});

app.post('/api/publish', (req, res) => {
    const postList = dbJSON.postList;
    const lastID = postList[postList.length - 1].id + 1;
    let currentDate = new Date().toISOString();
    currentDate = currentDate.split('T')[0].replace(/-/g, ':');
    const newPost = {
        "id": lastID,
        "author_name": "Admin Admin",
        "author_img": "https://storage.googleapis.com/vasenking/user_icon/user_0.jpg",
        "time": currentDate,
        "title": req.body.title,
        "tags": req.body.tags,
        "text": req.body.text,
        "likes": "0",
        "favorites": "0",
        "views": "1",
        "comment": "0"
    };
    dbJSON.postList.unshift(newPost);
    res.sendStatus(200);
});

app.get('/api/post/:id', (req, res) => {
    const post = dbJSON.postList.find((post) => {
        return post.id === Number(req.params.id);
    });
    res.send(post);
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

app.listen(3012, function () {
    console.log("listen port: 3012")
});


