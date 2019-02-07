const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const post  = require('./posts');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

const test = [
    {
        id: 1,
        name: "Amatory"
    },
    {
        id: 2,
        name: "Skrillex"
    },
    {
        id: 3,
        name: "Povar"
    }
];

app.get('/api/', (req, res) => {
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
