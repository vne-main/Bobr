const users = require('./schema/user-schema');
const md5 = require('md5');

class Place {

    static async getAllUsers() {
        return users.find().catch(err => console.log(err));
    }

    static async signUp(userData) {
        const checkUser = await users.find({email: userData.email});
        if (checkUser.length === 0) {
            const newUser = new users({
                login: userData.login,
                email: userData.email,
                password: md5(userData.password),
            });
            return newUser.save().catch(err => console.error(err));
        } else {
            return 501;
        }
    }

    static async signIn(userData) {
        let user = await users.find({
            password: md5(userData.password),
            $or:[{email: userData.login}, {login: userData.login}]
        });
        if (user.length !== 0) {
            return user;
        } else {
            return 404;
        }
    }

}

module.exports = Place;