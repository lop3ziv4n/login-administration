import { Authentication } from '../models/authentication';
import { HttpStatusResponse } from '../models/http-status-response';

export class AuthenticationResponse {
    status: HttpStatusResponse;
    entity: Authentication;
}
