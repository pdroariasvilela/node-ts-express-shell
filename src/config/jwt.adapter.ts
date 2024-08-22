import jwt from "jsonwebtoken"
import { envs } from "./envs";


const SEED_JWT = envs.JWT_SEED

export class JwtAdapter {

    static async generateToken( payload:any, duration: string = '2h' ) {

        return new Promise((resolve) => {
          jwt.sign(payload, SEED_JWT , { expiresIn: duration }, (err, token) => {
      
            if ( err ) return resolve(null);
      
            resolve(token)
      
          });
        })
      }

      static validateToken (token:string) {

      }
}