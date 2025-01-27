const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.userVerifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers['authorization'];
        if (authorization === undefined) {
            return res.status(404).josn({ message: `Invalid Authorization ${console.error()}`})
        }
        let token = authorization.split(" ")[1];
        console.log(token);
        if (token === undefined) {
            return res.status(401).json({ message: `Unauthoraztion ${console.error()}`});
        } else {
            let {userId} = jwt.token(token, 'user');
            console.log(userId);
            let user = await User.findById(userId);
            console.log(user);
            if (user) {
                req.user = user;
                next();
            } else {
                return res.status(401).json({ message: `Invalid User (token) ${console.error()}`})                
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Error: ${error.message}`})
    }
}