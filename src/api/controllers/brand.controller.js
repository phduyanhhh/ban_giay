import {
    addBrandAsync,
    allBrandAsync
} from '../../sevices/brand.sevice.js';

export const addBrand = async (req, res) => {
    try {
        const result = await addBrandAsync(req.body);
        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error: error
        })
    }
};

export const allBrand = async (req, res) => {
    try {
        const result = await allBrandAsync();
        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error: error
        })
    }
}