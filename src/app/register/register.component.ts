import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { of, observable, Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: [''],
        email: [
          '',
          [Validators.required, Validators.email],
          [this.checkValidEmail(this.userService)],
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

  checkValidEmail(us: UserService) {
    return (control: AbstractControl) => {
      if (control.value) {
        const email = control.value;
        return us
          .validateEmail(email)
          .pipe(map((res) => (res.emailTaken ? { emailTaken: true } : null)));
      } else {
        return null;
      }
    };
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
