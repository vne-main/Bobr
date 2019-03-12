const users = require('./schema/user-schema');
const md5 = require('md5');

class Place {

    static async getAllUsers() {
        return users.find().catch(err => console.log(err));
    }

    static async signUp(userData) {
        const checkEmail = await users.find({email: userData.email});
        const checkLogin = await users.find({email: userData.login});
        if (checkEmail.length !== 0) return {status: 502, value: "email"};
        if (checkLogin.length !== 0) return {status: 502, value: "login"};
        const newUser = new users({
            login: userData.login,
            email: userData.email,
            password: md5(userData.password),
        });
        return newUser.save().catch(err => console.error(err));
    }

    static async signIn(userData) {
        let user = await users.find({
            password: md5(userData.password),
            $or:[{email: userData.login}, {login: userData.login}]
        });
        if (user.length !== 0) {
            return user[0];
        } else {
            return {status: 502, value: "wrong"};
        }
    }

}

module.exports = Place;