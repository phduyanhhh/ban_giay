import {
    registerAsync,
    loginAsync
} from '../../services/account.service.js';

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
    try {
        const result = await registerAsync(req.body);
        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error: error.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const result = await loginAsync(req.body);
        const accessToken = await jwt.sign({
            email: result.email,
            role_id: result.role_id
        },
            process.env.ACCESS_TOKEN,
            { expiresIn: '1h' }
        )
        res.cookie(
            'accessToken',
            accessToken,
            { httpOnly: true }
        )
        console.log(accessToken);
        res.status(200).json({
            status: true,
            result: "Login success",
            data: result,
            access_token: accessToken
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error: error.message
        })
    }
}