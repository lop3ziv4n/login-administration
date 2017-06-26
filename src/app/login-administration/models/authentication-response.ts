import { Authentication } from '../models/authentication';
import { StatusResponse } from '../models/status-response';

export class AuthenticationResponse {
    status: StatusResponse;
    entity: Authentication;
}
