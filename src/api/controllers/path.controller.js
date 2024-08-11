import {
    addPathAsync,
    allPathAsync,
    deletePathAsync
} from '../../services/path.service.js';

export const addPath = async (req, res) => {
    try {
        console.log(req.body);
        const result = await addPathAsync(req.body);
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

export const allPath = async (req, res) => {
    try {
        const result = await allPathAsync();
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

export const deletePath = async (req, res) => {
    try {
        const result = await deletePathAsync(req.params.slug);
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