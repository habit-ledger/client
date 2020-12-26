import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({
        declarations: [ LoginComponent ],
        providers: [
          provideMockStore(),
        ],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          NoopAnimationsModule,
        ],
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render', () => {

    it('should have an email field', () => {
      const el = de.query(By.css('.email-address'));
      expect(el).toBeTruthy();
    });

    it('should have a password field', () => {
      const el = de.query(By.css('.password'));
      expect(el).toBeTruthy();
    });

    it('should have a register mode-changing button', () => {
      const spy = spyOn(component, 'switchMode').and.callThrough();
      const className = '.mode-switcher';

      const registerButton = de.query(By.css(className));
      expect(registerButton).toBeTruthy();
      const registerEl = registerButton.nativeElement as HTMLElement;
      // it needs to ask the user to login
      expect(registerEl.innerText).toMatch(/login/i);

      registerEl.click();
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith('login');

      const loginButton = de.query(By.css(className));
      expect(loginButton).toBeTruthy();
      const loginEl = loginButton.nativeElement as HTMLElement;
      // it needs to ask the user to register
      expect(loginEl.innerText).toMatch(/register/i);
      loginEl.click();
      expect(spy).toHaveBeenCalledWith('register');
    });

    it('should have a submit button', () => {
      const button = de.query(By.css('.submit'));
      expect(button).toBeTruthy();

      const spy = spyOn(component, 'submit');
      const el = button.nativeElement as HTMLButtonElement;
      el.click();
      expect(spy).toHaveBeenCalled();
    });

  });
});
