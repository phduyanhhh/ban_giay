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

export const anClassifyAsync = async (id) => {
    try {
        const classify = await Classify.findById(id);
        return classify
    } catch (error) {
        throw error;
    }
}

export const updateClassifyAsync = async (newData, id) => {
    try {
        const classify = await Classify.findById(id);
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

export const deleteClassifyAsync = async (id) => {
    try {
        const classifyDelete = await Classify.findByIdAndDelete(id);
        if(!classifyDelete) {
            throw Error("khong xoa duoc");
        }
        return classifyDelete;
    } catch (error) {
        throw error;
    }
}