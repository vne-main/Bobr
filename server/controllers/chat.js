const chatData = require('../models/chat-func');

class Fetch {

    static async getAllMessage(req, res) {
        const messages = await chatData.getAllMessage();
        res.send(messages);
    }

}

module.exports = Fetch;