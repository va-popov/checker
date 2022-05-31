import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
interface UserCreationAttrs {
    login: string;
    password: string;
    name: string;
    surname: string;
    phone: number;
    email: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    login: string;
    password: string;
    name: string;
    surname: string;
    phone: number;
    email: string;
    roles: Role[];
}
export {};
