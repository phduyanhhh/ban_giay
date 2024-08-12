import Premission from '../models/premission.schema.js';

export const addPremissionAsync = async (request) => {
    try {
        console.log(request);
        const existingPremissionCheckRoleAndPath = await Premission.findOne({
            role_id: request.role_id,
            path_id: request.path_id
        });
        console.log(">>>", existingPremissionCheckRoleAndPath);
        if(existingPremissionCheckRoleAndPath) {
            throw Error('da ton tai')
        };
        const newPremission = new Premission({
            role_id: request.role_id,
            path_id: request.path_id
        });
        const result = await newPremission.save();
        return result;
    } catch (error) {
        throw error;
    }
}

export const allPremissionAsync = async () => {
    try {
        const result = await Premission.find();
        return result
    } catch (error) {
        throw error
    }
}

export const deletePremissionAsync = async (id) => {
    try {
        const result = await Premission.findByIdAndDelete(id);
        return result;
    } catch (error) {
        throw error
    }
}