export class UserPayload implements UserPayload {
  id: number;
  name: string = '';
  email: string = '';
  img?: string = '';
  iat: number;
  exp: number;

  constructor(userPayload: UserPayload) {
    this.id = userPayload.id;
    this.name = userPayload.name;
    this.email = userPayload.email;
    this.img = userPayload.img;
    this.iat = userPayload.iat;
    this.exp = userPayload.exp;
  }

  getShortName() {
    const shortName = this.name.split(' ').shift();
    return shortName ?? '';
  }
}
