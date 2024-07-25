import {
    addWarehouseAsync,
    allWarehouseAsync,
    anWarehouseAsync
} from '../../services/warehouse.service.js';

export const addWarehouse = async (req, res) => {
    try {
        const result = await addWarehouseAsync(req.body);
        res.status(200).json({
            status: 200,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            error: error
        })        
    }
}

export const allWarehouse = async (req, res) => {
    try {
        const result = await allWarehouseAsync();
        res.status(200).json({
            status: 200,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            error: error
        })  
    }
}

export const anWarehouse = async (req, res) => {
    try {
        const result = await anWarehouseAsync(req.params.slug);
        res.status(200).json({
            status: 200,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            error: error
        })  
    }
}