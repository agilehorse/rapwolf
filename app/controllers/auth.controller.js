const config = require("../config/auth.config");
let jwt = require("jsonwebtoken");

exports.signIn = (req, res) => {
    if (req.body.passwordHash === process.env.ADMIN_PASSWORD_HASH) {
        const token = jwt.sign({name: req.body.name}, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        return res.status(200).send({accessToken: token});
    } else {
        return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
        });
    }
};