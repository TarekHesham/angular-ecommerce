import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-loginForm',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loginForm.component.html',
  styleUrl: './loginForm.component.css',
})
export class LoginFormComponent {
  loginForm: FormGroup;
  @Output() formPage = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  handleFormSubmit() {
    // Send Data email and password to api
    console.log(this.loginForm.value);
  }

  toggleForm(e: any) {
    e.classList.add('toggleForm');
    setTimeout(async () => {
      e.classList.remove('toggleForm');
      setTimeout(() => this.formPage.emit(false), 500);
    }, 500);
  }
}
