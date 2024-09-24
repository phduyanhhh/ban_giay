import Warehouse from "../models/warehouse.schema.js";

// 
export const addWarehouseAsync = async (request) => {
    try {
        //
        const objectType = {};
        objectType.classify_id = request.classify_id
        objectType.size = request.size
        objectType.quanlity = request.quanlity
        
        // existingProductOfWarehpuse TIM SAN PHAM TRONG KHO HANG
        const existingProductOfWarehouse = await Warehouse.findOne({'product_id': request.product_id})
        if(!existingProductOfWarehouse) {
            const newWarehouse = new Warehouse({
                product_id: request.product_id,
                type: objectType
            });
            const result = newWarehouse.save();
            return result
        }
        const arrayTypeWarehouse = existingProductOfWarehouse.type

        // vong lap luu tat ca  size
        const sizes = []
        for (let i = 0; i < arrayTypeWarehouse.length; i++) {
            console.log(sizes);
            sizes.push(arrayTypeWarehouse[i].size)
        }

        for (let i = 0; i < arrayTypeWarehouse.length; i++) {

            if(arrayTypeWarehouse[i].size===request.size && arrayTypeWarehouse[i].classify_id==request.classify_id) {
                objectType.quanlity = await request.quanlity + arrayTypeWarehouse[i].quanlity;
                // arrayTypeWarehouse.
                arrayTypeWarehouse[i] = objectType;
                console.log("fdsfsdgddddddddddd >>>>>>>>>", arrayTypeWarehouse);
                break;
            }
        }

        // CHECK SIZE DE TAO SIZE MOI TRONG ARRAY
        if(!sizes.includes(request.size)) {
            arrayTypeWarehouse.push(objectType);
            console.log("fdsfsdfsdfsd");
        }

        console.log("objject type", arrayTypeWarehouse);

        // await arrayTypeWarehouse.push(objectType);
        const result = await existingProductOfWarehouse.updateOne({"type": arrayTypeWarehouse})
        if(!result) {
            throw Error('Chua duoc luu');
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

export const anWarehouseAsync = async (id) => {
    try {
        const result = await Warehouse.findOne({product_id: id}).populate('product_id');
        console.log(result);
        return result
    } catch (error) {
        throw error
    }
}

// export const updateWarehouseAsync = async (slug) => {
    
// }