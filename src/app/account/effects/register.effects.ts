/**
 * This file is responsible for:
 *  - Registering
 *  - Toasting register failure
 *  - Toasting register success
 *  - Mapping success to a login success
 */

import * as props from '../account.props';
import * as AccountActions from '../account.actions';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { IAPIException } from '@shared/props';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { AccountService } from '../account.service';
import { mergeMap, map } from 'rxjs/operators';
import { catchAPIException } from '@shared/operators';

type Trigger = Action & props.IRegisterAccount;
type Success = Action & props.IAuthSuccess;
type Failure = Action & IAPIException;
type Result = Success | Failure;

@Injectable()
export class RegisterEffects {

  /**
   * Responds to the "register" action from the Login component, and either transforms that
   * to a register success or register failure.
   */
  public onRegister$: Observable<Result> = createEffect(
    () => this.actions$.pipe(
      ofType<Trigger>(AccountActions.register),
      mergeMap(a => this.register(a)),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly service: AccountService,
  ) { }

  private register({ email, password }: Trigger): Observable<Result> {
    return this.service.register({ email, password })
      .pipe(
        map(a => AccountActions.registerSuccess(a)),
        catchAPIException(AccountActions.registerFailure),
      );
  }
}
