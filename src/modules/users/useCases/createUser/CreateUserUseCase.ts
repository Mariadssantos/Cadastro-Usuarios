/* eslint-disable */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
interface IRequest {
  name: string;
  email: string;
}
class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }
  execute({ email, name }: IRequest): User {
    const verifyUserAlreardyExists = this.usersRepository.findByEmail(email);

    if (verifyUserAlreardyExists) {
      throw new Error("Não foi possível criar esse usuário com esse email!")
    }
    const res = this.usersRepository.create({ name, email })
    return res;
  }
}

export { CreateUserUseCase };
