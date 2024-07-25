import {
    addClassifyAsync,
    allClassifyAsync,
    anClassifyAsync,
    deleteClassifyAsync,
    updateClassifyAsync
} from '../../services/classify.service.js';

export const addClassify = async (req, res) => {
    try {
        const result = await addClassifyAsync(req.body);
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

export const allClassify = async (req, res) => {
    try {
        const result = await allClassifyAsync();
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

export const anClassify = async (req, res) => {
    try {
        const result = await anClassifyAsync(req.params.slug);
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

export const updateClassify = async (req, res) => {
    try {
        console.log(req.body);
        const result = await updateClassifyAsync(req.body, req.params.slug);
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

export const deleteClassify = async (req, res) => {
    try {
        const result = await deleteClassifyAsync(req.params.slug);
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