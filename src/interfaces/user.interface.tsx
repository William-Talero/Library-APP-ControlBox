export interface IUser {
  id: number;
  fullname: string;
  is_active: boolean;
  username: string;
  email: string;
  hashed_password: string;
}
