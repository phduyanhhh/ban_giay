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

export const anProductAsync = async (slug) => {
    try {
        const product = await Product.findOne({slug: slug});
        if(!Product) {
            throw Error("Loi ko thay id")
        }
        return product;
    } catch (error) {
        throw error;
    }
}

export const updateProductAsync = async (newData, slug) => {
    try {
        const product = await Product.findOne({slug: slug});
        console.log(newData);
        const updateProduct = await product.updateOne(newData);
        if(!updateProduct) {
            throw Error("Luu du lieu moi khong thanh cong")
        }
        return updateProduct;
    } catch (error) {
        throw error;
    }
}

export const deleteProductAsync = async (slug) => {
    try {
        const productDelete = await Product.findOneAndDelete({slug: slug});
        if(!productDelete) {
            throw Error("khong xoa duoc");
        }
        return productDelete;
    } catch (error) {
        throw error;
    }
}