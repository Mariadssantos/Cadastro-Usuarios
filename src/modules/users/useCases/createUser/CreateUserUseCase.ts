/* eslint-disable */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
interface IRequest {
  name: string;
  email: string;
}
class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ email, name }: IRequest): User {
    const res = this.usersRepository.create({name, email})
    return res;
  }
}

export { CreateUserUseCase };
