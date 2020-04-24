const userData = require("../models/user-func");

class Fetch {
  static async getAllUsers(req, res) {
    const users = await userData.getAllUsers();
    res.send(users);
  }

  static async signUp(req, res) {
    const user = await userData.signUp(req.body);
    res.send(user);
  }

  static async signIn(req, res) {
    const user = await userData.signIn(req.body);
    res.send(user);
  }

  static async check(req, res) {
    const user = await userData.check(req.body.token);
    res.send(user);
  }
}

module.exports = Fetch;
