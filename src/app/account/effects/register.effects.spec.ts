import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Subject, ReplaySubject, of, throwError } from 'rxjs';

import { RegisterEffects } from './register.effects';
import { Action } from '@ngrx/store';
import { AccountService } from '../account.service';
import { register, registerSuccess, registerFailure } from '../account.actions';
import { IRegisterAccount, IAuthSuccess } from '../account.props';
import { first } from 'rxjs/operators';
import { mockUnknownException } from 'src/testing/http-error';
import { HttpErrorResponse } from '@angular/common/http';

describe('RegisterEffects', () => {
  let actions$: Subject<Action>;
  let effects: RegisterEffects;
  let service: jasmine.SpyObj<AccountService>;

  beforeEach(() => {

    actions$ = new ReplaySubject(1);
    service = jasmine.createSpyObj('AccountService', [ 'register' ]);

    TestBed.configureTestingModule({
      providers: [
        RegisterEffects,
        provideMockActions(() => actions$.asObservable()),
        { provide: AccountService, useValue: service },
      ],
    });

    effects = TestBed.inject(RegisterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onRegister$', () => {
    let trigger: Action & IRegisterAccount;
    let token: IAuthSuccess;

    beforeEach(() => {
      trigger = register({
        email: 'me@jonathanschmold.ca',
        password: 'test-password',
      });

      token = { access: 'access-token', refresh: 'refresh-token' };

      actions$.next(trigger);

      service.register.and.returnValue(of(token));
    });

    it('calls the API correctly', () => {
      effects.onRegister$.subscribe().unsubscribe();
      const { email, password } = trigger;
      expect(service.register).toHaveBeenCalledWith({ email, password });
    });

    it('returns a success result if it worked', async () => {
      const success = registerSuccess(token);
      const result = await effects.onRegister$.pipe(first()).toPromise();
      expect(result).toEqual(success);
    });

    it('returns a failure result if it broke', async () => {
      const err = new HttpErrorResponse({ error: mockUnknownException });
      service.register.and.returnValue(throwError(err));

      const failure = registerFailure(mockUnknownException);
      const result = await effects.onRegister$.pipe(first()).toPromise();
      expect(result).toEqual(failure);
    });
  });
});
