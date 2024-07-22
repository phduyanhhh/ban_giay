import {
    addProductAsync,
    allProductAsync,
    anProductAsync,
    deleteProductAsync,
    updateProductAsync
} from '../../services/product.service.js';

export const addProduct = async (req, res) => {
    try {
        const result = await addProductAsync(req.body);
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

export const allProduct = async (req, res) => {
    try {
        const result = await allProductAsync();
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

export const anProduct = async (req, res) => {
    try {
        const result = await anProductAsync(req.params.id);
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

export const updateProduct = async (req, res) => {
    try {
        console.log(req.body);
        const result = await updateProductAsync(req.body, req.params.id);
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

export const deleteProduct = async (req, res) => {
    try {
        const result = await deleteProductAsync(req.params.id);
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