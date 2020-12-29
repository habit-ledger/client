/**
 * The type that represents the API simply giving a message to the client side. It is not an error,
 * and in most cases is just something you should parse to toast to the user (check your email 
 * for example).
 */
export interface IMessageResponse {
  message: string;
}

/**
 * The type that represents the NestJS exception type so we can properly parse the
 * body of the error.
 *
 * The API will usually give a message (the user can read this), an error (you can parse this),
 * and an error code (makes parsing easier)
 */
export interface IAPIException extends IMessageResponse {
  error: string;
  code: number;
}

