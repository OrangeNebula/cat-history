import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  host: process.env.HOST,
  port: process.env.PORT,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  accessTokenExpirationTime: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
}));