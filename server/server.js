const logger = require("morgan"),
  BodyParser = require("body-parser"),
  postRouter = require("./routes/post-routes"),
  userRouter = require("./routes/user-routes"),
  chatRouter = require("./routes/chat-routes"),
  express = require("express"),
  cors = require("cors"),
  app = express(),
  io = require("socket.io")();

app.use(
  cors({
    origin: "http://localhost",
    credentials: true,
  })
);
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
postRouter(app);
userRouter(app);
chatRouter(app);

app.listen(3003, function () {
  console.log("listen port: 3003");
});

io.on("connection", function (socket) {
  console.info("User connected");
  socket.on("chat message", function (msg) {
    console.log("Message:", JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

io.listen(3004);
