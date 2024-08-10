import { Component, Input } from '@angular/core';
import { HeroComponent } from '../../components/global/hero/hero.component';
import { LoginFormComponent } from '../../components/login/loginForm/loginForm.component';
import { RegisterFormComponent } from '../../components/login/register-form/register-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeroComponent, LoginFormComponent, RegisterFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // Toggle Login and Register
  formDisplay: boolean = true;

  constructor() {
    console.log(this.formDisplay);
  }

  displayForm(form: any) {
    this.formDisplay = form;
  }
}
