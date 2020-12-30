import { IAPIException } from '@shared/props';
import { HttpErrorResponse } from '@angular/common/http';

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
