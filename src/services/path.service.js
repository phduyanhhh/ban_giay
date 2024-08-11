import Path from '../models/path.schema.js';

export const addPathAsync = async (request) => {
    try {
        const existingPath = await Path.findOne({path: request.path});
        if(existingPath) {
            throw Error('Ton tai');
        }
        const newPath = new Path(request);
        const result = newPath.save();
        return result;
    } catch (error) {
        throw error
    }
}

export const allPathAsync = async () => {
    try {
        const result = await Path.find();
        return result
    } catch (error) {
        throw error
    }
}

export const deletePathAsync = async (slug) => {
    try {
        const result = await Path.findOneAndDelete({slug: slug});
        return result;
    } catch (error) {
        throw error
    }
}