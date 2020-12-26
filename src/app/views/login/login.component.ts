import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Observable, ReplaySubject } from 'rxjs';
import { first } from 'rxjs/operators';

type LoginMode = 'login' | 'register';

interface IComponentData {
  mode: LoginMode;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  
  public form: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(64),
    ]),
  });

  public data$: Observable<IComponentData>;

  private dataSubject: Subject<IComponentData>;

  constructor() {
    this.dataSubject = new ReplaySubject<IComponentData>(1);
    this.data$ = this.dataSubject.asObservable();
  }

  public ngOnInit(): void {
    this.dataSubject.next({ mode: 'register' });
  }

  public switchMode(mode: LoginMode): void {
    this.data$.pipe(first())
      .subscribe(a => this.dataSubject.next({ ... a, mode }));
  }

  public submit(): void {
    console.warn('Not implemented');
  }

}
