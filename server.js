const http = require('http');

const express = require('express');
const logger = require('morgan');
const BodyParser = require('body-parser');
const app = express();

const cors = require('cors');

app.use(cors({
   origin: "http://localhost",
   credentials: true
}));
const apiRouter = require('./routes/apiRoutes');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
apiRouter(app);

http.createServer((req, res) => {
    switch(req.headers.host) {
        case 'vasenkin.ru':
            app(req, res);
            break;
    }
}).listen(3012);



// app.listen(3012, function () {
//     console.log("listen port: 3012")
// });