import Role from '../models/role.schema.js';

export const addRoleAsync = async (request) => {
    try {
        const existingRole = await Role.findOne({name: request.name});
        if(existingRole) {
            throw Error('Ton tai');
        }
        const newRole = new Role(request);
        const result = newRole.save();
        return result;
    } catch (error) {
        throw error
    }
}

export const allRoleAsync = async () => {
    try {
        const result = await Role.find();
        return result
    } catch (error) {
        throw error
    }
}

export const deleteRoleAsync = async (slug) => {
    try {
        const result = await Role.findOneAndDelete({slug: slug});
        return result;
    } catch (error) {
        throw error
    }
}