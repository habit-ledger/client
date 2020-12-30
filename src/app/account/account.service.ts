import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthSuccess, IRegisterAccount } from './account.props';
import { Observable } from 'rxjs';
import { NotImplemented } from '@shared/errors';
import { ApiResult } from '@shared/types/api-result';

@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private readonly http: HttpClient) { }

  public register(arg: IRegisterAccount): Observable<IAuthSuccess> {
    return this.http.post<IAuthSuccess>('account', arg, { withCredentials: false });
  }

  public login(): Observable<ApiResult<IAuthSuccess>> {
    throw new NotImplemented();
  }

}
