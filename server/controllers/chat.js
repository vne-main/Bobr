const chatData = require("../models/chat-func");

class Fetch {
  static async getAllMessage(req, res) {
    const messages = await chatData.getAllMessage();
    res.send(messages);
  }

  static async addMessage(req, res) {
    const messages = await chatData.addMessage(req.body);
    res.send(messages);
  }
}

module.exports = Fetch;
