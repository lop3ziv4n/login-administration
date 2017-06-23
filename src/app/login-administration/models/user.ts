import { Role } from '../models/role';

export class User {
    id: number;
    dateCreated: Date;
    dateModify: Date;
    username: string;
    email: string;    
    password: string;
    enabled: boolean = true;
    role: Role[]
}
