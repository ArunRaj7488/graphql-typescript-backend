import { UserModel, IUser } from "../models/User";

export class UserService {

  async getUsers(): Promise<IUser[]> {
    return UserModel.find();
  }

  async getUser(id: string): Promise<IUser | null> {
    return UserModel.findById(id);
  }

  async createUser(data: Partial<IUser>): Promise<IUser> {
    return UserModel.create(data);
  }

  async updateUser(
    id: string,
    data: Partial<IUser>
  ): Promise<IUser | null> {

    return UserModel.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );

  }

  async deleteUser(id: string): Promise<boolean> {

    const result = await UserModel.findByIdAndDelete(id);

    return !!result;

  }

}