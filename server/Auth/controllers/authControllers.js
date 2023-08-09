const User = require("../models/Auth");
const bcryptJs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const tokenGen = (user) => {
    const payload = {
        userId: user.id,
        email: user.email
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    return token;
};

const registerCtrl = async (req, res) => {
    // Request data
    const { email, password, username } = req.body;

    try {
        // checking user is already register
        const isAlredayExists = await User.findOne({ email });

        if (isAlredayExists) {
            res.status(400).json({ message: "User already exists" });
        }

        // Hashing password
        const hashedPassword = await bcryptJs.hash(password, 10);

        // Creating User object
        const user = new User({
            username: username,
            email: email,
            password: hashedPassword
        });

        // saving to DB
        await user.save();

        // creating token
        const token = await tokenGen(user);

        return res.status(201).json({ token, user });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred" });
    }
};

const loginCtrl = async (req, res) => {
    // request data
    const { email, password } = req.body;

    try {
        // checking email is already exists if yes return object
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const validPassword = await bcryptJs.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = tokenGen(user);

        return res.status(200).json({ token, user });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred" });
    }
};

module.exports = {
    registerCtrl,
    loginCtrl,
};
