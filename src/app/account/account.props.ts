/**
 * The parameters necessary to login to an existing account
 */
export interface ILogin {
  email: string;
  password: string;
}

/**
 * The necessary arguments that allow you to register a new account with the server
 */
export interface IRegisterAccount {
  email: string;
  password: string;
}

/**
 * The result of any action that returns an access/refresh pair, such as a successful
 * registration, or a successful login
 */
export interface IAuthSuccess {
  access: string;
  refresh: string;
}
