import Brand from "../models/brand.schema.js";

//
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
        if(!allBrand) {
            throw Error("Khong co nhieu brand");
        }
        return allBrand;
    } catch (error) {
        throw error;
    }
};

export const anBrandAsync = async (slug) => {
    try {
        console.log(slug);
        const brand = await Brand.findOne({slug: slug});
        return brand
    } catch (error) {
        throw error;
    }
}

export const updateBrandAsync = async (newData, slug) => {
    try {
        const brand = await Brand.findOne({slug: slug});
        console.log(newData);
        const updateBrand = await brand.updateOne(newData);
        if(!updateBrand) {
            throw Error("Luu du lieu moi khong thanh cong")
        }
        return updateBrand;
    } catch (error) {
        throw error;
    }
}

export const deleteBrandAsync = async (slug) => {
    try {
        const brandDelete = await Brand.findOneAndDelete({slug: slug});
        if(!brandDelete) {
            throw Error("khong xoa duoc");
        }
        return brandDelete;
    } catch (error) {
        throw error;
    }
}