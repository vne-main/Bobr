const mongoose = require("../../libs/dbInit");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  id: Schema.Types.ObjectId,
  text: String,
  time: { type: Date, default: Date.now },
  userName: String,
});

const Chat = mongoose.model("chats", chatSchema);
module.exports = Chat;
