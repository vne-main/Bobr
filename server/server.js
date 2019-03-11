const logger = require('morgan');
const BodyParser = require('body-parser');
const postRouter = require('./routes/post-routes');
const userRouter = require('./routes/user-routes');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: "http://localhost",
    credentials: true
}));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
postRouter(app);
userRouter(app);
app.listen(3013, function () {
    console.log("listen port: 3013")
});