export interface IUser {
  _id?: any;
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  password?: string;
}

export interface IUserSignIn {
  email: string;
  password: string;
}
