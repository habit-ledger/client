import { of, OperatorFunction } from 'rxjs';
import { IAPIException } from './props';
import { APIException } from './errors/api-exception';
import { catchError } from 'rxjs/operators';
import { ActionCreator, Action } from '@ngrx/store';

type ExceptionAction = ActionCreator<string, (arg: IAPIException) => Action & IAPIException>;

export function catchAPIException(
  action: ExceptionAction,
): OperatorFunction<any, Action & IAPIException> {
  return catchError(err => of(action(APIException.fromError(err))));
}

