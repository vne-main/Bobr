const chats = require("./schema/chat-schema");

class Place {
  static async getAllMessage() {
    return chats.find().catch((err) => console.error(err));
  }

  static async addMessage(message) {
    const newMessage = new chats({
      userName: "User",
      text: message.text,
    });
    newMessage.save((err) => console.log(err));
    return newMessage;
  }
}

module.exports = Place;
