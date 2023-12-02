const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { errorHandler } = require('../utils/error');

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ msg: "Enter Non Empty Values" });
    try {
        const user = await User.findOne({ email: email });

        if (!user)
            return res.status(404).json({ msg: "User Not Found" });

        const validPass = await bcrypt.compare(password, user.password);

        if (!validPass)
            return res.status(400).json({ msg: "Email or password are invalid" });

        const token = jwt.sign({ _id: user._id, name: user.name }, process.env.TokenSecret, { expiresIn: '30d' });

        const { password: pass, ...rest } = user._doc;

        res.status(200).json({ token, ...rest })
    } catch (err) {
        next(errorHandler());
    }
}

exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(400).json({ msg: "Enter Non Empty Values" });

    const hashedValue = await bcrypt.hash(password, 12);

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist)
            return res.status(400).json({ msg: "User Already Exist" });

        const user = await User.create({ name, email, password: hashedValue });


        const { password: pass, ...rest } = user._doc;


        res.status(201).json(rest)
    } catch (err) {
        console.log(err);
    }
}