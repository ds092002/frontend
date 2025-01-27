const UserServices = require('../services/user.service');
const userService = new UserServices();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/user.model');

exports.registerUser = async (req, res) => {
    try {
        const { userName, email, gender, mobileNo } = req.body;

        if (!userName || !email || !gender || !mobileNo) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newUser = new User({
            userName,
            email,
            gender,
            mobileNo
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};



// exports.loginUser = async (req, res) => {
//     try {
//         console.log("Body===>", req.body);
//         let user = await userService.getUser({ email: req.body.email, isDelete: false});
//         console.log(user);
//         if(!user){
//             return res.status(401).json({ message: `User Not Found`})
//         }
//         let checkPassword = await bcryptjs.compare(req.body.password, user.password);
//         if(!checkPassword){
//             return res.status(401).json({ message: `Invalid Password`})
//         }
//         let token = jwt.sign({userId: user._id}, 'User');
//         console.log(token);
//         res.status(200).json({ message: `Login successful`, token})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: `Failed to login ${error.message}`})
//     }
// }

exports.getAllUser = async (req, res) => {
    try {
        let users = await userService.getAllUsers({ isDelete: false, isAdmin: false });
        console.log(users);
        if(!users) {
            return res.status(404).json({ message: `No User Found`})
        }
        res.status(200).json({ message: `All Users`, users})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Failed to get all users from ${error.message}` })        
    }
}

exports.getUser = async ( req, res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        console.log(user);
        if(!user) {
            return res.status(404).json({ message: `No User Found`})
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Failed to get user from ${error.message}` })
    }
}

exports.updateUser = async (req, res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        if(!user) {
            return res.status(404).json({ message: `No User Found`})
        }
        user = await userService.updateUser(user._id, {...req.body})
        res.status(200).json({ message: `User updated`, user})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Failed to update user ${error.message}` })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        if(!user){
            return res.status(404).json({ message: `No User Found`})
        }
        user = await userService.updateUser(user._id, {isDelete: true})
        res.status(200).json({ message: `User deleted`, user})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Failed to update user ${error.message}`})
    }
}

// exports.changePassword = async (req, res) => {
//     try {
//         let { oldPassword, newPassword, confirmPassword } = req.body;
//         let user = await userService.getUserById(req.query.userId);
        
//         if (!user) {
//             return res.status(401).json({ message: `User Not Found` });
//         }

//         let comparePassword = await bcryptjs.compare(
//             oldPassword, // Fixed variable
//             user.password
//         );

//         if (!comparePassword) {
//             return res.status(401).json({ message: `Old password is invalid` });
//         }

//         if (newPassword === oldPassword) {
//             return res.status(400).json({ message: `New Password should not be the same as old password` });
//         }

//         if (newPassword !== confirmPassword) {
//             return res.json({ message: `New Password and Confirm Password do not match. Please try again.` });
//         }

//         let hashpassword = await bcryptjs.hash(newPassword, 10);
//         user = await userService.updateUser(req.query.userId, { password: hashpassword });

//         return res.status(200).json({ message: `Password changed successfully` });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: `Internal Server Error.. ${error.message}` });
//     }
// };
