const joi = require('joi');

// Login validation middleware
const loginvalidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error });
    }
    next();
}

// Signup validation middleware with additional fields
const signvalidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required(),
        confirmPassword: joi.string().min(4).max(100).required(),
        mobileNumber: joi.string().pattern(/^[0-9]{10}$/).required().messages({
            'string.pattern.base': 'Mobile number must be exactly 10 digits'
        }),
        dateOfBirth: joi.date().less('now').required().messages({
            'date.less': 'Date of birth must be in the past'
        }),
        gender: joi.string().valid('male', 'female', 'other').required(),
        country: joi.string().min(2).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error });
    }
    next();
}

module.exports = { loginvalidation, signvalidation };
