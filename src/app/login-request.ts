
export default class LoginRequest {
  public client_id = 'webapp';
  public client_secret = 'webapp';
  public grant_type = 'password';
  constructor(public username: string, public password: string) {}
}
