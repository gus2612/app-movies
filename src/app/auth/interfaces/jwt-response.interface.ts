import { UserPayload } from 'src/app/common/classes/UserPayload';

export interface ITokenResponse {
  accessToken: string;
  permissions: string[];
  payload?: UserPayload;
}
