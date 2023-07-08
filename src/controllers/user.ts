import {Request, Response} from "express";
import Role from "../models/role.js";



class userController {
    async allUsers(req: Request, res: Response)  {
        const userRole = new Role();
        const adminRole = new Role({value: "ADMIN"})

        await userRole.save();
        await adminRole.save();

        res.end("343");
    }
}

export const userContoller = new userController();

