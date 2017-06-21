import { Role } from '../models/role';

export class User {
    id: number;
    username: string;
    email: string;    
    password: string;
    confirmPassword: string;
    enabled: boolean = true;
    role: Role[]
}
