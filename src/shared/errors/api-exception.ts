import { IAPIException } from '@shared/props';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * APIException a simple type with a helper to allow the form of an API Exception (nest style)
 * to make this instance. This primarily exists for the easy (and safe) conversion of error types,
 * since sometimes the error is NOT an HTTPErrorResponse
 */
export class APIException implements IAPIException {

  public error = 'Unknown';
  public code = 500;
  public message = 'Uh oh! Something went wrong!';

  public static fromError<T extends Error>(arg: T): IAPIException {
    const err = new APIException();

    if (arg instanceof HttpErrorResponse) {
      const body = arg.error as IAPIException;
      err.code = body.code;
      err.error = body.error;
      err.message = body.message;
    } else {
      err.error = arg.message;
    }

    return err;
  }

}
