import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthSuccess, IRegisterAccount } from './account.props';
import { Observable } from 'rxjs';
import { NotImplemented } from '@shared/errors';

/**
 * Responsible for interacting with the API on behalf of the user to perform account-related
 * actions, such as registering, changing their email, resetting their password, etc.
 *
 * Think: Access, Altering, Reading an account.
 */
@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private readonly http: HttpClient) { }

  /**
   * Using an email/password, register a new account with the API. 
   */
  public register(arg: IRegisterAccount): Observable<IAuthSuccess> {
    return this.http.post<IAuthSuccess>('account', arg, { withCredentials: false });
  }

  public login(): Observable<IAuthSuccess> {
    throw new NotImplemented();
  }

}
