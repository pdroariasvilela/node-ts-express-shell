import { UserModel } from "../../data";
import { CustomError, RegisterUserDto } from "../../domain";

export class AuthServices {
  constructor() {}

  public async registerUser(registerUserDTO: RegisterUserDto) {
    const existUser = await UserModel.findOne({ email: registerUserDTO.email });

    if (existUser) throw CustomError.badRequest("Email already exist");

    return "todo ok";
  }
}
