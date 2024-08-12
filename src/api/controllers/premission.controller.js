import {
    addPremissionAsync,
    allPremissionAsync,
    deletePremissionAsync
} from '../../services/premission.service.js';

export const addPremission = async (req, res) => {
    try {
        const result = await addPremissionAsync(req.body);
        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        res.status(401).json({
            status: true,
            error: error.message
        })
    }
}

export const allPremission = async (req, res) => {
    try {
        const result = await allPremissionAsync();
        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        res.status(401).json({
            status: true,
            error: error.message
        })
    }
}

export const deletePremission = async (req, res) => {
    try {
        const result = await deletePremissionAsync(req.params.id);
        res.status(200).json({
            status: true,
            result: "delete success",
            data: result
        })
    } catch (error) {
        res.status(401).json({
            status: true,
            error: error.message
        })
    }
}