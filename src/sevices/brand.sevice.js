import Brand from "../models/brand.schema.js";

export const addBrandAsync = async (request) => {
    try {
        console.log(request);
        const newBrand = new Brand(request);
        const result = await newBrand.save();
        if(!result) {
            throw Error("Chua luu duoc", request)
        }
        return result
    } catch (error) {
        throw error
    }
};

export const allBrandAsync = async () => {
    try {
        const allBrand = await Brand.find();
        return allBrand;
    } catch (error) {
        throw error;
    }
};