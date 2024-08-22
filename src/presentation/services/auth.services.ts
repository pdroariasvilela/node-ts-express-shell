import { Model } from "mongoose";
import { UserModel } from "../../data";
import { CustomError, RegisterUserDto, UserEntity } from "../../domain";
import { JwtAdapter, bcryptAdapter } from "../../config";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";

export class AuthServices {
  constructor() {}

  public async registerUser(registerUserDTO: RegisterUserDto) {
    const existUser = await UserModel.findOne({ email: registerUserDTO.email });

    if (existUser) throw CustomError.badRequest("Email already exist");

    try {
      const user = new UserModel(registerUserDTO);

      user.password = bcryptAdapter.hash(registerUserDTO.password);

      await user.save();

      const { password, ...userEntities } = UserEntity.fromObject(user);
      return {
        user: userEntities,
        token: "ABC123",
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }



  public async loginUser(loginUserDto: LoginUserDto) {
    const user = await UserModel.findOne({ email: loginUserDto.email });

    if (!user) return CustomError.badRequest("Email not exist");

    const resultEmailcheck = bcryptAdapter.compare(
      loginUserDto.password,
      user.password!
    );
    if (!resultEmailcheck)
      throw CustomError.badRequest("Password is not invalid");

    const { password, ...userEntity } = UserEntity.fromObject(user);

    const token  = await JwtAdapter.generateToken({id : user.id , email : user.email})
    if(!token) throw CustomError.internalServer("JWT not generate")

    return {
      user: userEntity,
      token: token,
    };
  }
}
