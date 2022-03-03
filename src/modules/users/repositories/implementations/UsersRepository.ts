/* eslint-disable */
import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    const res = Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      Admin: false
    });

    this.users.push(user);
    return res;
  }

  findById(user_id: string): User | undefined {
    const user = this.users.find(user => user.id === user_id)
    return user;
  }

  turnAdmin(receivedUser: User): User {
    if(!receivedUser.Admin){
      receivedUser.Admin = true;
      return receivedUser;
    }
    return receivedUser;
  }

  // findByEmail(email: string): User | undefined {
  //   // Complete aqui
  // }
  list(): User[] {
    return this.users;
  }

}

export { UsersRepository };
