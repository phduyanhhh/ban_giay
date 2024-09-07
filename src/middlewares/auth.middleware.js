import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import Role from "../models/role.schema.js";
import Premission from "../models/premission.schema.js";

export const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies?.accessToken
        console.log("token>>>", token);
        if(!token) {
            return res.status(403).json({
                status: 403,
                err: "No token provided"
            });
        }
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN);
        console.log("decode >>>", decode);
        if(decode) return next();
    } catch (error) {
        throw error;
    }
}
export const checkUser = async (req, res, next) => {
    const path = req.path;
    const nonSecurity = ['/account/all', '/register', '/login'];
    if(nonSecurity.includes(path)) return next();
    const token = req.cookies;
    if(!token) {
        return res.status(403).json({
            status: 403,
            err: "no token"
        })
    }
    try {
        const decode = await jwt.verify(token.accessToken, process.env.ACCESS_TOKEN);
        const role_id = decode.role_id;
        const existingRole = await Role.findById(role_id);
        console.log(">>>", existingRole);
        const permissionPaths = [];
        // CHECK PREMISSION
        const premission = await Premission.find({role_id: existingRole.id}).populate('path_id');
        // console.log(">>>>>>>>", premission);
        premission.forEach(e => {
            permissionPaths.push(e.path_id.path);
        });
        console.log(">>>>>>", permissionPaths);
        // CHECK QUYEN
        if(!permissionPaths.includes(path)) {
            return res.status(403).json({
                status: 403,
                err: "Khong co quyen"
            })
        }
        next();
        // if(decode) return next();
    } catch (error) {
        return res.status(401).json({
            status: 401,
            err: "Invalid token or other error",
            message: error.message
        });
    }
}