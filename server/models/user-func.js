const users = require('./schema/user-schema');
const md5 = require('md5');

class Place {

    static async getAllUsers() {
        let usersArray = [];
        const defaultUsersArray = await users.find().catch(err => console.log(err));
        defaultUsersArray.forEach(el => {
            usersArray.push({
                login: el.login,
                photo: el.photo,
                status: el.status,
                rating: el.rating,
                posts: el.posts,
            });
        });
        return usersArray;
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
            token: md5(userData.login) + md5(userData.email)
        });
        return newUser.save().catch(err => console.error(err));
    }

    static async signIn(userData) {
        let user = await users.find({
            password: md5(userData.password),
            $or: [{email: userData.login}, {login: userData.login}]
        });
        if (user.length !== 0) {
            return {
                _id: user[0]._id,
                token: user[0].token,
                login: user[0].login,
                email: user[0].email,
                status: user[0].status,
                gender: user[0].gender,
                photo: user[0].photo,
                favorites: user[0].favorites,
                likes: user[0].likes,
                posts: user[0].posts,
                subscribe: user[0].subscribe,
                following: user[0].following,
                dateRegistration: user[0].dateRegistration,
                rating: user[0].rating
            };
        } else {
            return {status: 502, value: "wrong"};
        }
    }

    static async check(token) {
        const checkUser = await users.find({token: token});
        if (checkUser.length === 0) {
            return "notUser";
        } else {
            return checkUser[0];
        }
    }

}

module.exports = Place;