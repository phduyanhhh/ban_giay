import {
    addBrandAsync,
    allBrandAsync,
    anBrandAsync,
    deleteBrandAsync,
    updateBrandAsync
} from '../../services/brand.service.js';

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

export const anBrand = async (req, res) => {
    try {
        const result = await anBrandAsync(req.params.slug);
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

export const updateBrand = async (req, res) => {
    try {
        console.log(req.body);
        const result = await updateBrandAsync(req.body, req.params.slug);
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

export const deleteBrand = async (req, res) => {
    try {
        const result = await deleteBrandAsync(req.params.slug);
        res.status(200).json({
            status: true,
            result: "delete success",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error: error
        })
    }
}