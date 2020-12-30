import { IAPIException } from '@shared/props';

export const mockAuthException: IAPIException = {
  code: 400,
  error: 'An unauthorized exception occurred',
  message: 'You\'re not allowed to do that',
};

export const mockUnknownException: IAPIException = {
  code: 500,
  error: 'An unknown error occurred',
  message: 'Uh oh! Something went wrong!',
};
