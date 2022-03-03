/* eslint-disable */
import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}
class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }
  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id)
    if (!user) {
      throw new Error("Não foi possível encontrar este usuário");
    }
    const userAdmin = this.usersRepository.turnAdmin(user)
    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
