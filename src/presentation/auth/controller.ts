import { Request, Response } from "express"

export default class AuthController  {
    constructor (){}

     registerUser = (req : Request , res : Response) => {
        
        return res.json({message : "register"})
    }

    loginUser = (req : Request , res : Response) => {
        
        return res.json({message : "login"})
    }

    validateEmail = (req : Request , res : Response) => {
        
        return res.json({message : "validate"})
    }


}
