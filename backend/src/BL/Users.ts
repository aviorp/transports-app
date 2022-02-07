import { UserI } from "../interfaces/index";
import UserService from "../services/UserService";

export const getAllUsers = (): UserI[] => UserService.getUsers(false);

export const getUserById = (id: string): UserI => UserService.getUserById(id);

export const getUserByEmail = (email: string): UserI =>
  UserService.getUserByEmail(email);

export const addUser = (newUser: UserI) => UserService.addUser(newUser);

export const updateUser = (user: UserI) => UserService.updateUser(user);

export const deleteUser = (user: UserI) => UserService.deleteUser(user);
