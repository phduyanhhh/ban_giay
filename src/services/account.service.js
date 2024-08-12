import Account from "../models/account.schema.js";
import bcrypt from "bcrypt";

export const registerAsync = async (request) => {
    try {
        // validate email
        const email = request.email
        const existingEmail = await Account.findOne({email: email});
        const existingPhone = await Account.findOne({phone_number: request.phone_number})

        if(existingEmail && existingPhone) {
            throw Error("Email hoac Password ko ton tai")
        }

        const password = request.password;
        //
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        const newAccount = new Account({
            email: email,
            password: hashed,
            phone_number: request.phone_number,
            first_name: request.first_name,
            last_name: request.last_name,
            birthday: request.birthday,
            address: request.address,
            role_id: request.role_id
        })
        const result = await newAccount.save();
        console.log(">>>", result)
        return result
    } catch (error) {
        throw error
    }
};