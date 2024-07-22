import Product from "../models/product.schema.js";

//
export const addProductAsync = async (request) => {
    try {
        console.log(request);
        const newProduct = new Product(request);
        const result = await newProduct.save();
        if(!result) {
            throw Error("Chua luu duoc", request)
        }
        return result
    } catch (error) {
        throw error
    }
};

export const allProductAsync = async () => {
    try {
        const allProduct = await Product.find();
        if(!allProduct) {
            throw Error("Khong co nhieu Product");
        }
        return allProduct;
    } catch (error) {
        throw error;
    }
};

export const anProductAsync = async (id) => {
    try {
        const Product = await Product.findById(id);
        return Product
    } catch (error) {
        throw error;
    }
}

export const updateProductAsync = async (newData, id) => {
    try {
        const Product = await Product.findById(id);
        console.log(newData);
        const updateProduct = await Product.updateOne(newData);
        if(!updateProduct) {
            throw Error("Luu du lieu moi khong thanh cong")
        }
        return updateProduct;
    } catch (error) {
        throw error;
    }
}

export const deleteProductAsync = async (id) => {
    try {
        const brandDelete = await Brand.findByIdAndDelete(id);
        if(!brandDelete) {
            throw Error("khong xoa duoc");
        }
        return brandDelete;
    } catch (error) {
        throw error;
    }
}