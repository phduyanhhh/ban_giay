import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/db_shop_ban_giay');
        console.log("Connect database MongoDB success");
    } catch(error) {
        console.log("Connect database MongoDB fail");
    };
};

export default { connect };