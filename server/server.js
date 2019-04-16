const logger = require('morgan'),
      BodyParser = require('body-parser'),
      postRouter = require('./routes/post-routes'),
      userRouter = require('./routes/user-routes'),
      chatRouter = require('./routes/chat-routes'),
      express = require('express'),
      cors = require('cors'),
      subdomain = require('subdomain'),
      app = express();


app.use(cors({
    origin: "http://localhost",
    credentials: true
}));
app.use(subdomain({base: 'vasenkin.ru', removeWWW: true}));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
postRouter(app);
userRouter(app);
chatRouter(app);

app.listen(3001, function () {
    console.log("listen port: 3001")
});


const WebSocket = require('ws'),
    wss = new WebSocket.Server({ port: 3002});

wss.on('connection', ws => {
    ws.on('message', message => {
        const data = JSON.parse(message);
        if (data === "close"){
            wss.close();
            console.info('close');
        } else {
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN){
                    client.send(data);
                }
            });
        }
    });
});