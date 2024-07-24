import Warehouse from "../models/warehouse.schema.js";

// 
export const addWarehouseAsync = async (request) => {
    try {
        //
        const objectType = {};
        objectType.classify_id = request.classify_id
        objectType.size = request.size
        objectType.quanlity = request.quanlity
        
        // existingProductOfWarehpuse
        const existingProductOfWarehouse = await Warehouse.findOne({'product_id': request.product_id})
        if(!existingProductOfWarehouse) {
            const newWarehouse = new Warehouse({
                product_id: request.product_id,
                type: objectType
            });
            const result = newWarehouse.save();
            return result
        }
        // if(request.size===existingProductOfWarehouse.type.size)
        // console.log();
        const arrayTypeWarehouse = existingProductOfWarehouse.type
        // console.log(arrayTypeWarehouse);

        for (let i = 0; i < arrayTypeWarehouse.length; i++) {
            const sizes = []
            console.log("fcds");
            const size = arrayTypeWarehouse[i].size;
            console.log(size);
            await sizes.push(size)
            console.log(sizes);
        }

        console.log(sizes.includes(request.size));
        

        for (let i = 0; i < arrayTypeWarehouse.length; i++) {
            console.log(arrayTypeWarehouse[i]);
            

            if(arrayTypeWarehouse[i].size===request.size && arrayTypeWarehouse[i].classify_id==request.classify_id) {
                objectType.quanlity = request.quanlity + arrayTypeWarehouse[i].quanlity;
                // arrayTypeWarehouse.
                arrayTypeWarehouse[i] = objectType;
                console.log("fdsfsdgddddddddddd >>>>>>>>>", arrayTypeWarehouse);
                break;
            }
        }

        console.log("objject type", arrayTypeWarehouse);

        // await arrayTypeWarehouse.push(objectType);
        const result = await existingProductOfWarehouse.updateOne({"type": arrayTypeWarehouse})
        if(!result) {
            throw Error('Chua duoc luu')
        }
        return arrayTypeWarehouse;
    } catch (error) {
        throw error;
    }
}


export const allWarehouseAsync = async () => {
    try {
        const result = await Warehouse.find();
        return result;  
    } catch (error) {
        throw error
    }
}