import {
    registerAsync,
} from '../../services/account.service.js';

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