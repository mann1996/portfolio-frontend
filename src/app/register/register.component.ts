import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: [
          '',
          [Validators.required, Validators.email, this.checkValidEmail],
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      { validators: [this.confirmPasswordValidator] }
    );
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  checkValidEmail(control: AbstractControl) {
    if (control.value) {
      let email: string = control.value.toString();
      if (email.length > 0 && email === 'jsprtmnn@gmail.com') {
        return { validEmail: true };
      }
    }
    return null;
  }

  confirmPasswordValidator(control: FormGroup) {
    if (control.value) {
      let password: string = control.get('password').value.toString();
      let confirmPassword: string = control
        .get('confirmPassword')
        .value.toString();
      if (password.length > 0 && password === confirmPassword) {
        return null;
      }
    }
    return { confirmPasswordValid: true };
  }
}
