import { request } from "express";
import Account from "../models/account.schema.js";
import Role from "../models/role.schema.js";
import bcrypt from "bcrypt";


export const registerAsync = async (request) => {
    try {
        const roleCustomer = await Role.findOne({name: 'Customer'})
        // validate email
        const email = request.email
        const existingEmail = await Account.findOne({email: email});
        const existingPhone = await Account.findOne({phone_number: request.phone_number})

        if(existingEmail && existingPhone) {
            throw Error("Email hoac Password ko ton tai")
        }
        const rePassword = request.re_password;
        const password = request.password;

        if(rePassword!=password) {
            throw Error("Mat khau nhap lai ko dung")
        }
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
            role_id: roleCustomer.id
        })
        const result = await newAccount.save();
        console.log(">>>", result)
        return result
    } catch (error) {
        throw error
    }
};

export const loginAsync = async (request) => {
    try {
        const email = request.email;
        const password = request.password;
        // existing email
        const existingEmail = await Account.findOne({email: email});
        if(!existingEmail) {
            throw Error('Khong co tai khoan');
        }
        console.log(">>>", existingEmail);
        const checkPassword = await bcrypt.compare(password, existingEmail.password);
        if(!checkPassword) {
            throw Error("Sai mat khau")
        }
        return existingEmail
    } catch (error) {
        throw error
    }
}

export const allAccountAsync = async (request) => {
    try {
        const result = await Account.find();
        return result;
    } catch (error) {
        throw error
    }
}