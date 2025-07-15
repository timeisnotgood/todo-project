const jwt = require('jsonwebtoken');
const knex = require('../config/db');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (user) => {
    return jwt.sign({ id : user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const loginUser = async (req, res) => {
    try {
        const { number } = req.body;

        if (!number) {
            return res.status(400).json({ message: 'Phone number is required' });
        }

        // Check if user already exists
        let user = await knex('users').where({ number }).first();

        // If user doesn't exist, insert it
        if (!user) {
            await knex('users').insert({ number });
            user = await knex('users').where({ number }).first();

        }

        // Generate JWT token
        const token = generateToken(user);

        return res.status(200).json({
            message: 'Login successful',
            number,
            token
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { loginUser };
