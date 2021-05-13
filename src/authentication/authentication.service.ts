import { Injectable } from '@nestjs/common';
import { User } from '../user/domain/user.entity';

@Injectable()
export class AuthenticationService {
  public getAccessToken(user: User) {

  }

  public getRefreshToken(user: User) {

  }
}