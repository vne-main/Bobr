const express = require('express');
const app = express();
const BodyParser = require('body-parser');
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

app.get('/api/test/', (req, res) => {
    res.send(test);
});

app.post('/api/test', (req, res) => {
    test.push(req.body);
    return res.send(test);
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
