import { Role } from '../models/role';

export class User {
    id: number;
    login: string;
    enabled: boolean = true;
    password: string;
    role: Role[]
}
