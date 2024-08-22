import { Router } from 'express';
import AuthController from './controller';
import { AuthServices } from '../services/auth.services';

export class AuthRoutes {


  static get routes(): Router {

    const router = Router();
    const authService = new AuthServices()
    const controller = new AuthController(authService)
    
    // Definir las rutas
    router.post("/register" , controller.registerUser)
    router.post("/login" , controller.loginUser)
    router.post("/validate-email/:token" , controller.validateEmail)

    return router;
  }


}

