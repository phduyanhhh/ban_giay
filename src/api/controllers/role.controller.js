import {
    addRoleAsync,
    allRoleAsync,
    deleteRoleAsync
} from '../../services/role.service.js';

export const addRole = async (req, res) => {
    try {
        console.log(req.body);
        const result = await addRoleAsync(req.body);
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

export const allRole = async (req, res) => {
    try {
        const result = await allRoleAsync();
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

export const deleteRole = async (req, res) => {
    try {
        const result = await deleteRoleAsync(req.params.slug);
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