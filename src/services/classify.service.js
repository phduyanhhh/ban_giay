import Classify from "../models/classify.schema.js";

//
export const addClassifyAsync = async (request) => {
    try {
        console.log(request);
        const newClassify = new Classify(request);
        const result = await newClassify.save();
        if(!result) {
            throw Error("Chua luu duoc", request)
        }
        return result
    } catch (error) {
        throw error
    }
};

export const allClassifyAsync = async () => {
    try {
        const allClassify = await Classify.find();
        if(!allClassify) {
            throw Error("Khong co nhieu Classify");
        }
        return allClassify;
    } catch (error) {
        throw error;
    }
};

export const anClassifyAsync = async (slug) => {
    try {
        const classify = await Classify.findOne({slug: slug});
        return classify
    } catch (error) {
        throw error;
    }
}

export const updateClassifyAsync = async (newData, slug) => {
    try {
        const classify = await Classify.findOne({slug: slug});
        console.log(newData);
        const updateClassify = await classify.updateOne(newData);
        if(!updateClassify) {
            throw Error("Luu du lieu moi khong thanh cong")
        }
        return updateClassify;
    } catch (error) {
        throw error;
    }
}

export const deleteClassifyAsync = async (slug) => {
    try {
        const classifyDelete = await Classify.findOneAndDelete({slug: slug});
        if(!classifyDelete) {
            throw Error("khong xoa duoc");
        }
        return classifyDelete;
    } catch (error) {
        throw error;
    }
}