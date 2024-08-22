import { Request, Response } from "express"
import { RegisterUserDto } from "../../domain"
import { AuthServices } from "../services/auth.services";

export default class AuthController  {
    constructor (
        public readonly authServices : AuthServices
    ){}

     registerUser = (req : Request , res : Response) => {

        const [error , registerDTO] = RegisterUserDto.create(req.body)

        if(error) return res.status(400).json({error})

        this.authServices.registerUser(registerDTO!).then((user) => res.json(user))
        
    }

    loginUser = (req : Request , res : Response) => {
        
        return res.json({message : "login"})
    }

    validateEmail = (req : Request , res : Response) => {
        
        return res.json({message : "validate"})
    }


}
