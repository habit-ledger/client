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
 * When you click the link of a confirm acount email, this token is provided to the app, which is
 * then passed off to the API to assert that the user is not a bot 
 */
export interface IConfirmAccount {
  token: string;
}

/**
 * The result of any action that returns an access/refresh pair, such as a successful
 * registration, or a successful login
 */
export interface IAuthSuccess {
  access: string;
  refresh: string;
}

