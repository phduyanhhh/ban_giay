import Product from "../models/product.schema.js";

//
export const addProductAsync = async (request, images) => {
    try {
        const avatar = images['avatar'][0].path
        // chi tiet anh
        let allImages = []
        images['images'].forEach(image => {
            console.log(image.path);
            const objectImage = {}
            objectImage.url = image.path
            allImages.push(objectImage)    
        });
        const newData = new Product({
            name: request.name,
            description: request.description,
            price: request.price,
            discount: request.discount,
            avatar: images['avatar'][0].path,
            images: allImages,
            brand_id: request.brand_id
        })
        const result = await newData.save();
        if(!result) {
            throw Error("Khong luu duoc")
        }
        return newData;
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
        if(!product) {
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

// update avatar
export const updateAvatarAsync = async (newAvatar, slug) => {
    try {
        console.log(">>>", newAvatar);
        const existingProduct = await Product.findOne({slug: slug});
        const result = await existingProduct.updateOne({$set: {avatar: newAvatar.path}})
        return result
    } catch (error) {
        throw error;
    }
}
//update images
export const updateImageAsync = async (newImage, slug) => {
    try {
        console.log(newImage);
        let allImages = [];
        newImage.forEach(image => {
            const objectImage = {}
            objectImage.url = image.path
            allImages.push(objectImage)
        });
        const existingProduct = Product.findOne({slug: slug});
        const result = existingProduct.updateOne({$set: {images: allImages}})
        return result
    } catch (error) {
        throw error
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

